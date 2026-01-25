
import os
from fastapi import FastAPI, UploadFile, File, Depends
from fastapi.middleware.cors import CORSMiddleware

from app.ai import analyze_medical_file
from app.db import save_analysis, get_analyses_by_user
from app.auth import get_user  

app = FastAPI(title="Medical AI Backend")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




@app.post("/analyze")
async def analyze(
    file: UploadFile = File(...),
    user=Depends(get_user)
):
    temp_path = f"temp_{file.filename}"

    try:
        # Save uploaded file temporarily
        with open(temp_path, "wb") as f:
            f.write(await file.read())

        # Run AI analysis
        result = analyze_medical_file(temp_path)

        # Store in DB (per user)
        save_analysis(
            user_id=user["id"],
            summary=result["summary"],
            conditions=result["conditions"],
            evidence=result.get("evidence", [])
        )

        # Return complete result with all fields
        return {
            "status": "success",
            "summary": result.get("summary", ""),
            "conditions": result.get("conditions", []),
            "evidence": result.get("evidence", [])
        }

    except Exception as e:
        return {
            "status": "error",
            "message": str(e),
            "summary": "Analysis failed",
            "conditions": [],
            "evidence": []
        }

    finally:
        # Cleanup temp file
        if os.path.exists(temp_path):
            os.remove(temp_path)



#  View Past Analyses Endpoint

@app.get("/analyses")
def get_past_analyses(user=Depends(get_user)):
    data = get_analyses_by_user(user["id"])
    return {
        "status": "success",
        "data": data
    }


