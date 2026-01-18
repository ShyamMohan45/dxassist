import torch
import numpy as np
import sounddevice as sd
import keyboard
from transformers import pipeline, VitsModel, AutoTokenizer
import os
import re

class CodeSwitch_AI:
    def __init__(self):
        print("--- Loading Multilingual Assistant (Hinglish/Urdu-English) ---")
        self.device = "cuda:0" if torch.cuda.is_available() else "cpu"
        
        # Using 'small' for better mixed-language handling
        self.stt_pipe = pipeline("automatic-speech-recognition", 
                                 model="openai/whisper-small", 
                                 device=self.device)

        self.llm_pipe = pipeline("text-generation", 
                                 model="TinyLlama/TinyLlama-1.1B-Chat-v1.0", 
                                 device=self.device)

        self.current_tts_lang = None
        self.tts_model = None
        self.tts_tokenizer = None

        # Map for voice switching
        self.voice_map = {"hi": "hin", "ur": "urd", "en": "eng"}

    def get_dominant_language(self, text):
        """Detects if the text is primarily Hindi, Urdu, or English."""
        if re.search(r'[\u0900-\u097F]', text): return "hi"
        if re.search(r'[\u0600-\u06FF]', text): return "ur"
        return "en"

    def load_voice(self, lang_code):
        mms_code = self.voice_map.get(lang_code, "eng")
        if self.current_tts_lang != mms_code:
            print(f"--- Switching to {mms_code.upper()} Voice ---")
            model_id = f"facebook/mms-tts-{mms_code}"
            self.tts_tokenizer = AutoTokenizer.from_pretrained(model_id)
            self.tts_model = VitsModel.from_pretrained(model_id).to(self.device)
            self.current_tts_lang = mms_code

    def speak(self, text):
        if not text.strip(): return
        
        # Decide which voice to use based on the AI's reply
        lang = self.get_dominant_language(text)
        self.load_voice(lang)
        
        # Clean text for the voice engine (important to avoid crash)
        clean_text = re.sub(r'[^\w\s\u0600-\u06FF\u0900-\u097F]', '', text)

        inputs = self.tts_tokenizer(clean_text, return_tensors="pt").to(self.device)
        with torch.no_grad():
            output = self.tts_model(**inputs).waveform[0].cpu().numpy()
        
        print(f"AI ({lang}): {text}")
        sd.play(output, samplerate=self.tts_model.config.sampling_rate)
        sd.wait()

    def listen(self):
        fs, audio_buffer = 16000, []
        print("\n[READY] Press SPACE...")
        keyboard.wait('space')
        sd.sleep(200)
        print("[LISTENING... Mixed Language OK]")
        def cb(i, f, t, s): audio_buffer.append(i.copy())
        with sd.InputStream(samplerate=fs, channels=1, callback=cb):
            keyboard.wait('space')
        return np.concatenate(audio_buffer).flatten()

if __name__ == "__main__":
    ai = CodeSwitch_AI()
    while True:
        audio = ai.listen()
        # Step 1: Transcribe (No fixed language, let it mix)
        result = ai.stt_pipe({"sampling_rate": 16000, "raw": audio})
        user_text = result["text"]
        
        if user_text.strip():
            print(f"You: {user_text}")
            # Step 2: Brain (TinyLlama understands the mix)
            prompt = f"<|system|>\nYou are a helpful assistant. The user speaks mixed languages. Respond naturally.</s>\n<|user|>\n{user_text}</s>\n<|assistant|>\n"
            reply = ai.llm_pipe(prompt, max_new_tokens=60)[0]["generated_text"].split("<|assistant|>\n")[-1].strip()
            # Step 3: Speak
            ai.speak(reply)
##############################code for indian language speech
# import torch
# import numpy as np
# import sounddevice as sd
# import keyboard
# from transformers import pipeline, VitsModel, AutoTokenizer
# import scipy.io.wavfile

# class Multilingual_Assistant:
#     def __init__(self):
#         print("Loading Multilingual Models... (Whisper Base & TinyLlama)")
#         self.device = "cuda:0" if torch.cuda.is_available() else "cpu"
        
#         # 1. STT: Whisper Base (Supports 99+ languages and detection)
#         self.stt_pipe = pipeline("automatic-speech-recognition", model="openai/whisper-base", device=self.device)

#         # 2. LLM: TinyLlama (Handles multilingual prompts well)
#         self.llm_pipe = pipeline("text-generation", model="TinyLlama/TinyLlama-1.1B-Chat-v1.0", device=self.device)

#         # 3. TTS Storage (We load these on demand to save RAM)
#         self.current_tts_lang = "eng" # Default to English
#         self.tts_model = None
#         self.tts_tokenizer = None

#     def load_tts(self, lang_code):
#         """Loads a Meta MMS model for a specific language."""
#         # Maps Whisper codes (en) to Meta MMS codes (eng)
#         mapping = {"en": "eng", "hi": "hin", "es": "spa", "fr": "fra", "de": "deu"}
#         mms_code = mapping.get(lang_code, "eng")
        
#         if self.current_tts_lang != mms_code or self.tts_model is None:
#             print(f"Switching voice to: {mms_code}...")
#             model_id = f"facebook/mms-tts-{mms_code}"
#             self.tts_tokenizer = AutoTokenizer.from_pretrained(model_id)
#             self.tts_model = VitsModel.from_pretrained(model_id).to(self.device)
#             self.current_tts_lang = mms_code

#     def listen_toggle(self, key='space'):
#         fs = 16000
#         audio_buffer = []
#         print(f"\n[READY] Press {key.upper()} to Start/Stop")
#         keyboard.wait(key)
#         sd.sleep(200)
#         print("[RECORDING...]")
        
#         def callback(indata, frames, time, status):
#             audio_buffer.append(indata.copy())
#         with sd.InputStream(samplerate=fs, channels=1, callback=callback):
#             keyboard.wait(key)
            
#         print("[PROCESSING...]")
#         return np.concatenate(audio_buffer).flatten()

#     def think(self, text, lang):
#         # We tell the LLM to respond in the detected language
#         prompt = f"<|system|>\nYou are a helpful assistant. Always respond in the language: {lang}.</s>\n<|user|>\n{text}</s>\n<|assistant|>\n"
#         outputs = self.llm_pipe(prompt, max_new_tokens=60, do_sample=True, temperature=0.7)
#         return outputs[0]["generated_text"].split("<|assistant|>\n")[-1].strip()

#     def speak(self, text, lang_code):
#         self.load_tts(lang_code)
#         inputs = self.tts_tokenizer(text, return_tensors="pt").to(self.device)
#         with torch.no_grad():
#             output = self.tts_model(**inputs).waveform[0].cpu().numpy()
        
#         sd.play(output, samplerate=self.tts_model.config.sampling_rate)
#         sd.wait()

# if __name__ == "__main__":
#     ai = Multilingual_Assistant()
    
#     while True:
#         audio = ai.listen_toggle()
#         # Whisper automatically detects the language here
#         result = ai.stt_pipe({"sampling_rate": 16000, "raw": audio}, return_language=True)
        
#         user_text = result["text"]
#         detected_lang = result["chunks"][0]["language"] if "chunks" in result else "en"
        
#         print(f"Detected ({detected_lang}): {user_text}")
        
#         reply = ai.think(user_text, detected_lang)
#         ai.speak(reply, detected_lang)
# ##########################################code for press space bar continuously
# # import torch
# # import numpy as np
# # import sounddevice as sd
# # import keyboard
# # from transformers import pipeline, SpeechT5Processor, SpeechT5ForTextToSpeech, SpeechT5HifiGan
# # import os

# # class PTT_AI_Assistant:
# #     def __init__(self):
# #         print("Initializing PTT Assistant...")
# #         self.device = "cuda:0" if torch.cuda.is_available() else "cpu"
        
# #         # 1. STT: Whisper Base
# #         self.stt_pipe = pipeline("automatic-speech-recognition", model="openai/whisper-base", device=self.device)

# #         # 2. LLM: TinyLlama
# #         self.llm_pipe = pipeline("text-generation", model="TinyLlama/TinyLlama-1.1B-Chat-v1.0", device=self.device)

# #         # 3. TTS: SpeechT5
# #         self.processor = SpeechT5Processor.from_pretrained("microsoft/speecht5_tts")
# #         self.tts_model = SpeechT5ForTextToSpeech.from_pretrained("microsoft/speecht5_tts").to(self.device)
# #         self.vocoder = SpeechT5HifiGan.from_pretrained("microsoft/speecht5_hifigan").to(self.device)
# #         self.speaker_embeddings = torch.tensor(np.fromfile("speaker_embeddings.bin", dtype=np.float32)).unsqueeze(0).to(self.device)

# #     def listen_ptt(self, key='space'):
# #         """Records only while the specified key is held down."""
# #         fs = 16000
# #         audio_buffer = []
        
# #         print(f"\n--- HOLD [{key.upper()}] TO TALK ---")
        
# #         # Wait for user to press the key
# #         keyboard.wait(key)
        
# #         print("[Recording... Release to stop]")
        
# #         # Use an InputStream to capture audio in real-time
# #         def callback(indata, frames, time, status):
# #             if status:
# #                 print(status)
# #             audio_buffer.append(indata.copy())

# #         with sd.InputStream(samplerate=fs, channels=1, callback=callback):
# #             # Keep recording as long as the key is pressed
# #             while keyboard.is_pressed(key):
# #                 sd.sleep(100)
        
# #         print("[Done Recording. Processing...]")
# #         return np.concatenate(audio_buffer).flatten()

# #     def think(self, text):
# #         prompt = f"<|system|>\nYou are a short, direct assistant.</s>\n<|user|>\n{text}</s>\n<|assistant|>\n"
# #         outputs = self.llm_pipe(prompt, max_new_tokens=60, do_sample=True, temperature=0.7)
# #         return outputs[0]["generated_text"].split("<|assistant|>\n")[-1].strip()

# #     def speak(self, text):
# #         print(f"AI: {text}")
# #         inputs = self.processor(text=text, return_tensors="pt").to(self.device)
# #         speech = self.tts_model.generate_speech(inputs["input_ids"], self.speaker_embeddings, vocoder=self.vocoder)
# #         sd.play(speech.cpu().numpy(), samplerate=16000)
# #         sd.wait()

# # if __name__ == "__main__":
# #     assistant = PTT_AI_Assistant()
# #     assistant.speak("Ready. Hold space to talk to me.")
    
# #     while True:
# #         audio = assistant.listen_ptt(key='space')
# #         transcription = assistant.stt_pipe({"sampling_rate": 16000, "raw": audio})["text"]
        
# #         if transcription.strip():
# #             print(f"You: {transcription}")
# #             reply = assistant.think(transcription)
# #             assistant.speak(reply)
# # # #####################################################code for speech pressing any button
# # # import torch
# # # import numpy as np
# # # import sounddevice as sd
# # # from transformers import pipeline, SpeechT5Processor, SpeechT5ForTextToSpeech, SpeechT5HifiGan
# # # import os

# # # class Smart_AI_Assistant:
# # #     def __init__(self):
# # #         print("Initializing smart local models...")
# # #         self.device = "cuda:0" if torch.cuda.is_available() else "cpu"
        
# # #         # 1. Load Silero VAD (The Smart Listener)
# # #         self.vad_model, self.utils = torch.hub.load(repo_or_dir='snakers4/silero-vad',
# # #                                                     model='silero_vad',
# # #                                                     force_reload=False)
# # #         (self.get_speech_timestamps, _, _, _, _) = self.utils

# # #         # 2. STT: Whisper Base (Better accuracy than tiny)
# # #         self.stt_pipe = pipeline("automatic-speech-recognition", model="openai/whisper-base", device=self.device)

# # #         # 3. LLM: TinyLlama
# # #         self.llm_pipe = pipeline("text-generation", model="TinyLlama/TinyLlama-1.1B-Chat-v1.0", device=self.device)

# # #         # 4. TTS: SpeechT5
# # #         self.processor = SpeechT5Processor.from_pretrained("microsoft/speecht5_tts")
# # #         self.tts_model = SpeechT5ForTextToSpeech.from_pretrained("microsoft/speecht5_tts").to(self.device)
# # #         self.vocoder = SpeechT5HifiGan.from_pretrained("microsoft/speecht5_hifigan").to(self.device)
# # #         self.speaker_embeddings = torch.tensor(np.fromfile("speaker_embeddings.bin", dtype=np.float32)).unsqueeze(0).to(self.device)

# # #     def listen_smart(self):
# # #         fs = 16000
# # #         chunk_size = 512 
# # #         audio_buffer = []
        
# # #         # --- NOISE TUNING PARAMETERS ---
# # #         THRESHOLD = 0.7          # Higher = more strict (0.1 to 1.0)
# # #         MIN_SPEECH_SEC = 0.25    # Sound must last 0.25s to count as "speech" (filters clicks)
# # #         SILENCE_TIMEOUT = 1.2    # Wait 1.2s after you stop talking to process
# # #         # -------------------------------

# # #         print("\n[Listening... Speak clearly]")
        
# # #         speaking = False
# # #         consecutive_speech_time = 0
# # #         silence_duration = 0
        
# # #         with sd.InputStream(samplerate=fs, channels=1, blocksize=chunk_size, dtype='float32') as stream:
# # #             while True:
# # #                 audio_chunk, _ = stream.read(chunk_size)
# # #                 audio_buffer.append(audio_chunk.flatten())
                
# # #                 chunk_tensor = torch.from_numpy(audio_chunk.flatten())
# # #                 speech_prob = self.vad_model(chunk_tensor, fs).item()
                
# # #                 if speech_prob > THRESHOLD:
# # #                     consecutive_speech_time += chunk_size / fs
# # #                     # Only trigger "Speaking" if sound lasts longer than a click
# # #                     if consecutive_speech_time > MIN_SPEECH_SEC:
# # #                         if not speaking:
# # #                             print("[Speech Confirmed]")
# # #                         speaking = True
# # #                         silence_duration = 0
# # #                 else:
# # #                     consecutive_speech_time = 0
# # #                     if speaking:
# # #                         silence_duration += chunk_size / fs
                
# # #                 # Automatically stop
# # #                 if speaking and silence_duration > SILENCE_TIMEOUT:
# # #                     print("[Processing...]")
# # #                     break
                    
# # #         return np.concatenate(audio_buffer)

# # #     def think(self, text):
# # #         prompt = f"<|system|>\nYou are a short, direct assistant.</s>\n<|user|>\n{text}</s>\n<|assistant|>\n"
# # #         outputs = self.llm_pipe(prompt, max_new_tokens=60, do_sample=True, temperature=0.7)
# # #         return outputs[0]["generated_text"].split("<|assistant|>\n")[-1].strip()

# # #     def speak(self, text):
# # #         print(f"AI: {text}")
# # #         inputs = self.processor(text=text, return_tensors="pt").to(self.device)
# # #         speech = self.tts_model.generate_speech(inputs["input_ids"], self.speaker_embeddings, vocoder=self.vocoder)
# # #         sd.play(speech.cpu().numpy(), samplerate=16000)
# # #         sd.wait()

# # # if __name__ == "__main__":
# # #     assistant = Smart_AI_Assistant()
# # #     assistant.speak("I am ready and listening.")
    
# # #     while True:
# # #         audio = assistant.listen_smart()
# # #         transcription = assistant.stt_pipe({"sampling_rate": 16000, "raw": audio})["text"]
        
# # #         if transcription.strip():
# # #             print(f"You: {transcription}")
# # #             reply = assistant.think(transcription)
# # #             assistant.speak(reply)
# # # # #####################################################################working model for sppech
# # # # import torch
# # # # import sounddevice as sd
# # # # import numpy as np
# # # # from transformers import pipeline, SpeechT5Processor, SpeechT5ForTextToSpeech, SpeechT5HifiGan
# # # # import os

# # # # class Local_AI_Assistant:
# # # #     def __init__(self):
# # # #         print("Initializing local models... (This may take a minute on first run)")
# # # #         self.device = "cuda:0" if torch.cuda.is_available() else "cpu"
        
# # # #         # 1. Speech-to-Text (Whisper Tiny - very fast)
# # # #         self.stt_pipe = pipeline("automatic-speech-recognition", 
# # # #                                  model="openai/whisper-tiny", 
# # # #                                  device=self.device)

# # # #         # 2. LLM Brain (TinyLlama - lightweight and free)
# # # #         self.llm_pipe = pipeline("text-generation", 
# # # #                                  model="TinyLlama/TinyLlama-1.1B-Chat-v1.0", 
# # # #                                  device=self.device)

# # # #         # 3. Text-to-Speech (SpeechT5)
# # # #         self.processor = SpeechT5Processor.from_pretrained("microsoft/speecht5_tts")
# # # #         self.tts_model = SpeechT5ForTextToSpeech.from_pretrained("microsoft/speecht5_tts").to(self.device)
# # # #         self.vocoder = SpeechT5HifiGan.from_pretrained("microsoft/speecht5_hifigan").to(self.device)
        
# # # #         # Manually load the speaker embeddings bin file you downloaded
# # # #         self.speaker_embeddings = torch.tensor(np.fromfile("speaker_embeddings.bin", dtype=np.float32)).unsqueeze(0).to(self.device)

# # # #     def listen(self, duration=5):
# # # #         fs = 16000
# # # #         print("\n[Listening...]")
# # # #         recording = sd.rec(int(duration * fs), samplerate=fs, channels=1)
# # # #         sd.wait()
# # # #         return recording.flatten()

# # # #     def think(self, text):
# # # #         prompt = f"<|system|>\nYou are a helpful assistant.</s>\n<|user|>\n{text}</s>\n<|assistant|>\n"
# # # #         outputs = self.llm_pipe(prompt, max_new_tokens=50, do_sample=True, temperature=0.7)
# # # #         response = outputs[0]["generated_text"].split("<|assistant|>\n")[-1]
# # # #         return response.strip()

# # # #     def speak(self, text):
# # # #         print(f"AI: {text}")
# # # #         inputs = self.processor(text=text, return_tensors="pt").to(self.device)
# # # #         speech = self.tts_model.generate_speech(inputs["input_ids"], self.speaker_embeddings, vocoder=self.vocoder)
        
# # # #         # Play back the generated audio
# # # #         sd.play(speech.cpu().numpy(), samplerate=16000)
# # # #         sd.wait()

# # # # # --- Main Execution Loop ---
# # # # if __name__ == "__main__":
# # # #     if not os.path.exists("speaker_embeddings.bin"):
# # # #         print("ERROR: Please download 'speaker_embeddings.bin' and place it in this folder first!")
# # # #     else:
# # # #         assistant = Local_AI_Assistant()
# # # #         assistant.speak("Hello. I am running completely offline. How can I help you today?")

# # # #         while True:
# # # #             try:
# # # #                 audio_input = assistant.listen()
# # # #                 # Process Audio -> Text
# # # #                 transcription = assistant.stt_pipe({"sampling_rate": 16000, "raw": audio_input})["text"]
                
# # # #                 if transcription.strip():
# # # #                     print(f"You: {transcription}")
# # # #                     # Process Text -> Response
# # # #                     reply = assistant.think(transcription)
# # # #                     # Process Response -> Speech
# # # #                     assistant.speak(reply)
# # # #             except KeyboardInterrupt:
# # # #                 break
# # # # # ###########################################################################3
# # # # # import torch
# # # # # import sounddevice as sd
# # # # # import numpy as np
# # # # # from transformers import pipeline, SpeechT5Processor, SpeechT5ForTextToSpeech, SpeechT5HifiGan
# # # # # from datasets import load_dataset
# # # # # from scipy.io.wavfile import write
# # # # # import os

# # # # # class HuggingFace_AI_Assistant:
# # # # #     def __init__(self):
# # # # #         print("Loading local models from Hugging Face... Please wait.")
# # # # #         self.device = "cuda:0" if torch.cuda.is_available() else "cpu"
        
# # # # #         # 1. STT: Whisper (Speech-to-Text)
# # # # #         self.stt_pipe = pipeline("automatic-speech-recognition", 
# # # # #                                  model="openai/whisper-tiny", 
# # # # #                                  device=self.device)

# # # # #         # 2. LLM: TinyLlama (Fast, local brain)
# # # # #         self.llm_pipe = pipeline("text-generation", 
# # # # #                                  model="TinyLlama/TinyLlama-1.1B-Chat-v1.0", 
# # # # #                                  device=self.device)

# # # # #         # 3. TTS: SpeechT5 (Neural Voice)
# # # # #         self.processor = SpeechT5Processor.from_pretrained("microsoft/speecht5_tts")
# # # # #         self.tts_model = SpeechT5ForTextToSpeech.from_pretrained("microsoft/speecht5_tts").to(self.device)
# # # # #         self.vocoder = SpeechT5HifiGan.from_pretrained("microsoft/speecht5_hifigan").to(self.device)
        
# # # # #         # Load speaker embeddings for a natural voice
# # # # #         self.embeddings_dataset = load_dataset("Matthijs/cmu-arctic-xvectors", split="validation")
# # # # #         self.speaker_embeddings = torch.tensor(self.embeddings_dataset[7306]["xvector"]).unsqueeze(0).to(self.device)

# # # # #     def listen(self, duration=5):
# # # # #         fs = 16000
# # # # #         print("\nListening...")
# # # # #         recording = sd.rec(int(duration * fs), samplerate=fs, channels=1)
# # # # #         sd.wait()
# # # # #         return recording.flatten()

# # # # #     def generate_response(self, text):
# # # # #         prompt = f"<|system|>\nYou are a helpful AI assistant.</s>\n<|user|>\n{text}</s>\n<|assistant|>\n"
# # # # #         outputs = self.llm_pipe(prompt, max_new_tokens=50, do_sample=True, temperature=0.7)
# # # # #         # Extract only the assistant's part
# # # # #         response = outputs[0]["generated_text"].split("<|assistant|>\n")[-1]
# # # # #         return response

# # # # #     def speak(self, text):
# # # # #         print(f"AI: {text}")
# # # # #         inputs = self.processor(text=text, return_tensors="pt").to(self.device)
        
# # # # #         # Generate speech
# # # # #         speech = self.tts_model.generate_speech(inputs["input_ids"], self.speaker_embeddings, vocoder=self.vocoder)
        
# # # # #         # Play the audio
# # # # #         audio_numpy = speech.cpu().numpy()
# # # # #         sd.play(audio_numpy, samplerate=16000)
# # # # #         sd.wait()

# # # # # # --- Run the Assistant ---
# # # # # assistant = HuggingFace_AI_Assistant()
# # # # # assistant.speak("Hello! I am your free, local assistant using Hugging Face models.")

# # # # # while True:
# # # # #     try:
# # # # #         audio_data = assistant.listen()
# # # # #         # Transcribe audio to text
# # # # #         result = assistant.stt_pipe({"sampling_rate": 16000, "raw": audio_data})
# # # # #         user_text = result["text"]
        
# # # # #         if user_text.strip():
# # # # #             print(f"You: {user_text}")
# # # # #             ai_text = assistant.generate_response(user_text)
# # # # #             assistant.speak(ai_text)
            
# # # # #     except KeyboardInterrupt:
# # # # #         print("Stopping...")
# # # # #         break
# # # # # ##################################################################################
# # # # # # import assemblyai as aai
# # # # # # from openai import OpenAI
# # # # # # # Updated ElevenLabs imports for v1.0.0+
# # # # # # from elevenlabs.client import ElevenLabs
# # # # # # from elevenlabs import stream

# # # # # # class AI_Assistant:
# # # # # #     def __init__(self):
# # # # # #         aai.settings.api_key = "f5e9a53e067c4b8588553d6b46110b01"
# # # # # #         self.openai_client = OpenAI(api_key="your_openai_api_key_here")

# # # # # #         # Initialize the new ElevenLabs client
# # # # # #         self.eleven_client = ElevenLabs(api_key="your_elevenlabs_api_key_here")
        
# # # # # #         self.transcriber = None
# # # # # #         self.full_transcript = [
# # # # # #             {"role": "system", "content": "You are a helpful assistant."}
# # # # # #         ]

# # # # # #     def start_transcription(self):
# # # # # #         self.transcriber = aai.RealtimeTranscriber(
# # # # # #             sample_rate = 16000,
# # # # # #             on_data = self.on_data,
# # # # # #             on_error = self.on_error,
# # # # # #             on_open = self.on_open,
# # # # # #             on_close = self.on_close,
# # # # # #             end_utterance_silence_threshold = 1000
# # # # # #         )

# # # # # #         self.transcriber.connect()
# # # # # #         microphone_stream = aai.extras.MicrophoneStream(sample_rate=16000)
# # # # # #         self.transcriber.stream(microphone_stream)

# # # # # #     def stop_transcription(self):
# # # # # #         if self.transcriber:
# # # # # #             self.transcriber.close()
# # # # # #             self.transcriber = None

# # # # # #     def on_open(self, session_opened: aai.RealtimeSessionOpened):
# # # # # #         return 

# # # # # #     def on_data(self, transcript: aai.RealtimeTranscript):
# # # # # #         if not transcript.text:
# # # # # #             return

# # # # # #         if isinstance(transcript, aai.RealtimeFinalTranscript):
# # # # # #             self.generate_ai_response(transcript)
# # # # # #         else:
# # # # # #             print(transcript.text, end="\r")

# # # # # #     def on_error(self, error: aai.RealtimeError):
# # # # # #         return

# # # # # #     def on_close(self):
# # # # # #         return
    
# # # # # #     def generate_ai_response(self, transcript):
# # # # # #         self.stop_transcription()

# # # # # #         self.full_transcript.append({"role":"user", "content": transcript.text})
# # # # # #         print(f"\nPatient: {transcript.text}", end="\r\n")

# # # # # #         response = self.openai_client.chat.completions.create(
# # # # # #             model = "gpt-3.5-turbo",
# # # # # #             messages = self.full_transcript
# # # # # #         )

# # # # # #         ai_response = response.choices[0].message.content
# # # # # #         self.generate_audio(ai_response)
# # # # # #         self.start_transcription()

# # # # # #     def generate_audio(self, text):
# # # # # #         self.full_transcript.append({"role":"assistant", "content": text})
# # # # # #         print(f"\nAI : {text}")

# # # # # #         # Updated syntax for ElevenLabs v1.x+
# # # # # #         audio_stream = self.eleven_client.text_to_speech.convert(
# # # # # #             text = text,
# # # # # #             voice_id = "21m00Tcm4TlvDq8ikWAM", # This is the ID for 'Rachel'
# # # # # #             model_id = "eleven_multilingual_v2",
# # # # # #             output_format = "mp3_44100_128",
# # # # # #         )

# # # # # #         # The stream function still works as before
# # # # # #         stream(audio_stream)
# # # # # #     # def generate_audio(self, text):
# # # # # #     #     self.full_transcript.append({"role":"assistant", "content": text})
# # # # # #     #     print(f"\nAI : {text}")

# # # # # #     #     # Updated to use self.eleven_client.generate
# # # # # #     #     audio_stream = self.eleven_client.generate(
# # # # # #     #         text = text,
# # # # # #     #         voice = "Rachel",
# # # # # #     #         model = "eleven_multilingual_v2", # Recommended model
# # # # # #     #         stream = True
# # # # # #     #     )

# # # # # #     #     # This will use the 'mpv' you installed via Chocolatey
# # # # # #     #     stream(audio_stream)

# # # # # # # --- Execution ---
# # # # # # greeting = "Thank you for calling. My name is Sandy, how may I assist you"
# # # # # # ai_assistant = AI_Assistant()
# # # # # # ai_assistant.generate_audio(greeting)
# # # # # # ai_assistant.start_transcription()
# # # # # # # #############################################################################
# # # # # # # import assemblyai as aai
# # # # # # # from elevenlabs import generate, stream
# # # # # # # from openai import OpenAI

# # # # # # # class AI_Assistant:
# # # # # # #     def __init__(self):
# # # # # # #         aai.settings.api_key = "your_assemblyai_api_key_here"
# # # # # # #         self.openai_client = OpenAI(api_key="your_openai_api_key_here")

# # # # # # #         self.elevenlabs_api_key = "your_elevenlabs_api_key_here"
# # # # # # #         self.transcriber = None
# # # # # # #         self.full_transcript = [
# # # # # # #             {"role": "system", "content": "You are a helpful assistant."}
# # # # # # #         ]
# # # # # # #     def start_transcription(self):
# # # # # # #         self.transcriber = aai.RealtimeTranscriber(
# # # # # # #             sample_rate = 16000,
# # # # # # #             on_data = self.on_data,
# # # # # # #             on_error = self.on_error,
# # # # # # #             on_open = self.on_open,
# # # # # # #             on_close = self.on_close,
# # # # # # #             end_utterance_silence_threshold = 1000
# # # # # # #     )   

# # # # # # #         self.transcriber.connect()
# # # # # # #         microphone_stream = aai.extras.MicrophoneStream(sample_rate=16000)
# # # # # # #         self.transcriber.stream(microphone_stream)

# # # # # # #     def stop_transcription(self):
# # # # # # #         if self.transcriber:
# # # # # # #             self.transcriber.close()
# # # # # # #             self.transcriber = None

# # # # # # #     def on_open(self,session_opened: aai.RealtimeSessionOpened):
# # # # # # #         # print("Session ID:", session_opened.session_id)
# # # # # # #         return 
# # # # # # #     def on_data(self,transcript: aai.RealtimeTranscript):
# # # # # # #         if not transcript.text:
# # # # # # #             return

# # # # # # #         if isinstance(transcript, aai.RealtimeFinalTranscript):
# # # # # # #             self.generate_ai_response(transcript)
# # # # # # #             # print(transcript.text, end="\r\n")
        
# # # # # # #         else:
# # # # # # #             print(transcript.text, end="\r")

# # # # # # #     def on_error(self,error: aai.RealtimeError):
# # # # # # #         # print("An error occured:", error)
# # # # # # #         return
# # # # # # #     def on_close(self):
# # # # # # #         # print("Closing Session")
# # # # # # #         return
    
# # # # # # #     def generate_ai_response(self, transcript):

# # # # # # #         self.stop_transcription()

# # # # # # #         self.full_transcript.append({"role":"user", "content": transcript.text})
# # # # # # #         print(f"\nPatient: {transcript.text}", end="\r\n")

# # # # # # #         response = self.openai_client.chat.completions.create(
# # # # # # #             model = "gpt-3.5-turbo",
# # # # # # #             messages = self.full_transcript
# # # # # # #         )

# # # # # # #         ai_response = response.choices[0].message.content

# # # # # # #         self.generate_audio(ai_response)

# # # # # # #         self.start_transcription()

# # # # # # #     def generate_audio(self, text):
# # # # # # #         self.full_transcript.append({"role":"assistant", "content": text})
# # # # # # #         print(f"\nAI : {text}")

# # # # # # #         audio_stream = generate(
# # # # # # #             api_key = self.elevenlabs_api_key,
# # # # # # #             text = text,
# # # # # # #             voice = "Rachel",
# # # # # # #             stream = True
# # # # # # #         )

# # # # # # #         # This is where the 'mpv' you installed earlier is used by ElevenLabs
# # # # # # #         stream(audio_stream)

# # # # # # # greeting = "Thank you for calling. My name is Sandy, how may I assist you "
# # # # # # # ai_assistant = AI_Assistant()
# # # # # # # ai_assistant.generate_audio(greeting)
# # # # # # # ai_assistant.start_transcription()