# import os
# from fastapi import FastAPI, UploadFile, File
# from fastapi.middleware.cors import CORSMiddleware
# from app.ai import analyze_medical_file

# app = FastAPI(title="Medical AI Backend")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.post("/analyze")
# async def analyze(file: UploadFile = File(...)):
#     temp_path = f"temp_{file.filename}"

#     with open(temp_path, "wb") as f:
#         f.write(await file.read())

#     try:
#         report = analyze_medical_file(temp_path)
#         return {
#             "status": "success",
#             "report": report
#         }
#     finally:
#         if os.path.exists(temp_path):
#             os.remove(temp_path)


# import os
# from fastapi import FastAPI, UploadFile, File, Depends
# from fastapi.middleware.cors import CORSMiddleware

# from app.ai import analyze_medical_file
# from app.db import save_analysis
# from app.auth import get_user   # MUST exist

# app = FastAPI(title="Medical AI Backend")

# # -----------------------------
# # CORS (IMPORTANT for frontend)
# # -----------------------------
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # -----------------------------
# # Analyze Endpoint
# # -----------------------------
# @app.post("/analyze")
# async def analyze(
#     file: UploadFile = File(...),
#     user=Depends(get_user)
# ):
#     temp_path = f"temp_{file.filename}"

#     try:
#         # Save uploaded file temporarily
#         with open(temp_path, "wb") as f:
#             f.write(await file.read())

#         # Run AI analysis
#         result = analyze_medical_file(temp_path)

#         # Store in DB (per user)
#         save_analysis(
#             user_id=user["id"],
#             summary=result["summary"],
#             conditions=result["conditions"],
#             evidence=result["evidence"]
#         )

#         return {
#             "status": "success",
#             "data": result
#         }

#     finally:
#         # Cleanup temp file
#         if os.path.exists(temp_path):
#             os.remove(temp_path)

import os
from fastapi import FastAPI, UploadFile, File, Depends
from fastapi.middleware.cors import CORSMiddleware

from app.ai import analyze_medical_file
from app.db import save_analysis, get_analyses_by_user
from app.auth import get_user   # MUST exist

app = FastAPI(title="Medical AI Backend")

# -----------------------------
# CORS (IMPORTANT for frontend)
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Analyze Endpoint
# -----------------------------
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
            evidence=result["evidence"]
        )

        return {
            "status": "success",
            "data": result
        }

    finally:
        # Cleanup temp file
        if os.path.exists(temp_path):
            os.remove(temp_path)


# -----------------------------
# ✅ View Past Analyses Endpoint
# -----------------------------
@app.get("/analyses")
def get_past_analyses(user=Depends(get_user)):
    data = get_analyses_by_user(user["id"])
    return {
        "status": "success",
        "data": data
    }
