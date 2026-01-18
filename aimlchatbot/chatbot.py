import os
from dotenv import load_dotenv
load_dotenv()

# Get the API token
api_token = os.getenv("HUGGINGFACEHUB_API_TOKEN")

try:
    from huggingface_hub import InferenceClient
except Exception:
    InferenceClient = None

# Use HuggingFace Inference API with a chat-optimized model
client = None
if InferenceClient is not None and api_token:
    try:
        print("Initializing HuggingFace Inference Client...")
        client = InferenceClient(api_key=api_token)
    except Exception as e:
        print(f"Failed to initialize InferenceClient: {e}")
        client = None
else:
    if not api_token:
        print("Error: HUGGINGFACEHUB_API_TOKEN not found in .env file.")
    if InferenceClient is None:
        print("Error: huggingface_hub not installed.")

print("System: Chatbot initialized. Type 'exit' to quit.")

# System message to guide the model behavior
system_message = {
    "role": "system",
    "content": """You are a helpful health information chatbot. When answering health-related questions:

1. CITE OFFICIAL SOURCES: Always reference credible medical sources such as:
   - WHO (World Health Organization)
   - CDC (Centers for Disease Control and Prevention)
   - Mayo Clinic
   - NHS (National Health Service)
   - Medical textbooks and peer-reviewed research

2. PROVIDE EVIDENCE-BASED INFORMATION:
   - Base answers on official medical guidelines and clinical evidence
   - Include specific recommendations from authoritative health organizations
   - Mention dosages, treatment options, and prevention methods when relevant

3. INCLUDE DISCLAIMERS:
   - Always remind users to consult healthcare professionals for personalized medical advice
   - Clarify that you're providing general health information, not personal medical advice

4. BE SPECIFIC AND PRACTICAL:
   - Give concrete, actionable information
   - Include symptom recognition, treatment options, and when to seek medical help
   - Reference specific guidelines and official recommendations

Example format: 'According to the CDC/WHO guidelines, [symptom/disease] treatment includes...'

Remember: Your credibility depends on citing official sources and evidence-based information."""
}

chat_history = [system_message]

while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        break

    try:
        if client is not None:
            # Add user message to history
            chat_history.append({"role": "user", "content": user_input})
            
            # Use chat_completion (conversational) method
            response = client.chat_completion(
                model="meta-llama/Meta-Llama-3-8B-Instruct",
                messages=chat_history,
                max_tokens=256,
                temperature=0.7,
            )
            
            # Extract bot response
            bot_text = response.choices[0].message.content.strip()
            
            # Add bot response to history
            chat_history.append({"role": "assistant", "content": bot_text})
            
            print("Bot:", bot_text)
        else:
            print("Error: Client not available.")
            break

    except Exception as e:
        import traceback
        print("\nError invoking model:")
        traceback.print_exc()
        print("\nMake sure your HuggingFace token is valid and in the .env file.")
        break