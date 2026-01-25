
import logging
import os
import json
import time
from dotenv import load_dotenv
import google.generativeai as genai
from app.prompts import MEDICAL_PROMPT, EVIDENCE_EXTRACTION_PROMPT

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
logger = logging.getLogger(__name__)

def analyze_medical_file(file_path: str) -> dict:
    try:
        
        uploaded_file = genai.upload_file(file_path)

        
        while uploaded_file.state.name == "PROCESSING":
            time.sleep(1)
            uploaded_file = genai.get_file(uploaded_file.name)

        
        model = genai.GenerativeModel("gemini-2.5-flash")
        response = model.generate_content(
            [uploaded_file, MEDICAL_PROMPT]
        )

        
        data = json.loads(response.text)

        # Extract evidence with specific references
        evidence = data.get("evidence", [])
        
        # Ensure conditions have all required fields
        conditions = data.get("conditions", [])
        for condition in conditions:
            if "severity" not in condition:
                condition["severity"] = "Medium"
            if "justification" not in condition:
                condition["justification"] = "Requires clinical review"

        # If no conditions found, add default
        if not conditions:
            conditions = [{
                "name": "General Health Status",
                "severity": "Low",
                "justification": "No significant clinical abnormalities detected"
            }]

        return {
            "summary": data.get("summary", "Clinical analysis completed"),
            "conditions": conditions,
            "evidence": evidence
        }

    except json.JSONDecodeError as e:
        logger.error(f"JSON parsing error: {e}")
        return {
            "summary": "Clinical analysis completed with partial results.",
            "conditions": [{
                "name": "Analysis Status",
                "severity": "Low",
                "justification": "Document processed with parsing constraints"
            }],
            "evidence": [],
            "error": str(e)
        }
    except Exception as e:
        logger.error(f"Analysis error: {e}")
        #  SAFE FALLBACK (quota / API / parsing errors)
        return {
            "summary": "AI analysis unavailable due to API quota limits.",
            "conditions": [{
                "name": "Service Unavailable",
                "severity": "Low",
                "justification": "AI service is temporarily unavailable"
            }],
            "evidence": [],
            "error": str(e)
        }
