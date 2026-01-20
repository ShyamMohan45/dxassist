import io
import os
import tempfile
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import torch
import re
from transformers import pipeline, VitsModel, AutoTokenizer

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

device = "cuda" if torch.cuda.is_available() else "cpu"

stt_pipe = pipeline(
    "automatic-speech-recognition",
    model="openai/whisper-small",
    device=device
)

llm_pipe = pipeline(
    "text-generation",
    model="TinyLlama/TinyLlama-1.1B-Chat-v1.0",
    device=device
)

@app.post("/api/speech")
async def speech_api(file: UploadFile = File(...)):
    
    with tempfile.NamedTemporaryFile(delete=False, suffix=".webm") as tmp:
        tmp.write(await file.read())
        tmp_path = tmp.name

    try:
        
        stt = stt_pipe(tmp_path)
        user_text = stt["text"]

        if not user_text.strip():
            return {"user": "", "reply": ""}

        prompt = (
            "<|system|>\nYou are a helpful medical assistant. "
            "User may speak mixed languages.</s>\n"
            f"<|user|>\n{user_text}</s>\n<|assistant|>\n"
        )

        reply = llm_pipe(prompt, max_new_tokens=80)[0]["generated_text"]
        reply = reply.split("<|assistant|>")[-1].strip()

        return {
            "user": user_text,
            "reply": reply
        }

    finally:
        os.remove(tmp_path)
