# import os
# import time
# from dotenv import load_dotenv
# from google import genai
# from app.prompts import MEDICAL_PROMPT

# # --------------------------------------------------
# # Load environment variables
# # --------------------------------------------------
# load_dotenv()

# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# if not GEMINI_API_KEY:
#     raise RuntimeError("❌ GEMINI_API_KEY not found in .env")

# # --------------------------------------------------
# # Initialize Gemini client (NEW SDK)
# # --------------------------------------------------
# client = genai.Client(api_key=GEMINI_API_KEY)

# # --------------------------------------------------
# # Core AI logic
# # --------------------------------------------------
# def analyze_medical_file(file_path: str) -> str:
#     try:
#         # Upload medical file
#         medical_file = client.files.upload(file=file_path)

#         # Wait until processing finishes
#         while medical_file.state.name == "PROCESSING":
#             time.sleep(2)
#             medical_file = client.files.get(name=medical_file.name)

#         # Generate content
#         response = client.models.generate_content(
#             model="gemini-2.5-flash",
#             contents=[medical_file, MEDICAL_PROMPT]
#         )

#         return response.text

#     except Exception as e:
#         error_msg = str(e)

#         if "429" in error_msg:
#             return (
#                 "❌ QUOTA ERROR: Free tier limit reached.\n"
#                 "Please link a billing account in Google Cloud Console."
#             )

#         return f"❌ ERROR: {error_msg}"


# import os
# import json
# import time
# from dotenv import load_dotenv
# from google import genai
# from app.prompts import MEDICAL_PROMPT

# load_dotenv()

# client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# def analyze_medical_file(file_path: str) -> dict:
#     medical_file = client.files.upload(file=file_path)

#     while medical_file.state.name == "PROCESSING":
#         time.sleep(2)
#         medical_file = client.files.get(name=medical_file.name)

#     response = client.models.generate_content(
#         model="gemini-2.5-flash",
#         contents=[medical_file, MEDICAL_PROMPT]
#     )

#     try:
#         data = json.loads(response.text)

#         return {
#             "summary": data.get("summary", ""),
#             "conditions": data.get("conditions", []),
#             "evidence": data.get("evidence", [])
#         }

#     except json.JSONDecodeError:
#         raise ValueError("Gemini returned invalid JSON")



import os
import json
import time
from dotenv import load_dotenv
import google.generativeai as genai
from app.prompts import MEDICAL_PROMPT

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def analyze_medical_file(file_path: str) -> dict:
    try:
        # Upload file
        uploaded_file = genai.upload_file(file_path)

        # Wait until processing completes
        while uploaded_file.state.name == "PROCESSING":
            time.sleep(1)
            uploaded_file = genai.get_file(uploaded_file.name)

        # Generate content
        model = genai.GenerativeModel("gemini-2.5-flash")
        response = model.generate_content(
            [uploaded_file, MEDICAL_PROMPT]
        )

        # Parse JSON safely
        data = json.loads(response.text)

        return {
            "summary": data.get("summary", ""),
            "conditions": data.get("conditions", []),
            "evidence": data.get("evidence", [])
        }

    except Exception as e:
        # 🔒 SAFE FALLBACK (quota / API / parsing errors)
        return {
            "summary": "AI analysis unavailable due to API quota limits.",
            "conditions": [],
            "evidence": [],
            "error": str(e)
        }
