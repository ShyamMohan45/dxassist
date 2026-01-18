
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from dotenv import load_dotenv
from huggingface_hub import InferenceClient
from typing import Generator

load_dotenv()

HF_TOKEN = os.getenv("HUGGINGFACEHUB_API_TOKEN")
if not HF_TOKEN:
    raise RuntimeError("HUGGINGFACEHUB_API_TOKEN not found")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = InferenceClient(api_key=HF_TOKEN)

SYSTEM_MESSAGE = {
    "role": "system",
    "content": (
        "You are a clinical assistant. "
        "Always cite WHO, CDC, NHS, or Mayo Clinic. "
        "Provide evidence-based medical information and include a disclaimer."
    ),
}

class ChatRequest(BaseModel):
    message: str

@app.post("/chat/stream")
def chat_stream(req: ChatRequest):

    def generator() -> Generator[str, None, None]:
        try:
            stream = client.chat_completion(
                model="meta-llama/Meta-Llama-3-8B-Instruct",
                messages=[
                    SYSTEM_MESSAGE,
                    {"role": "user", "content": req.message},
                ],
                max_tokens=300,
                temperature=0.7,
                stream=True,
            )

            for chunk in stream:
                if not chunk.choices:
                    continue

                delta = chunk.choices[0].delta
                if not delta:
                    continue

                text = delta.get("content")
                if text:
                    yield text

        except Exception as e:
            yield f"\n[Error: {str(e)}]\n"

    return StreamingResponse(generator(), media_type="text/plain")

@app.get("/")
def health():
    return {"status": "DxAssist Chatbot Backend Running"}
