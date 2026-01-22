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



# from fastapi import FastAPI, Request, Response, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# import mysql.connector
# import os

# from app.auth import require_admin

# app = FastAPI()

# # ---------------- CORS ----------------
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # ---------------- DB ----------------
# def get_db():
#     return mysql.connector.connect(
#         host=os.getenv("DATABASE_HOST"),
#         user=os.getenv("DATABASE_USER"),
#         password=os.getenv("DATABASE_PASS"),
#         database=os.getenv("DATABASE_NAME"),
#     )

# # ---------------- ADMIN LOGIN ----------------
# @app.post("/admin/login")
# def admin_login(data: dict, response: Response):
#     email = data.get("email")
#     password = data.get("password")

#     if (
#         email != os.getenv("ADMIN_EMAIL")
#         or password != os.getenv("ADMIN_SECRET_PASSWORD")
#     ):
#         raise HTTPException(status_code=403, detail="Invalid admin credentials")

#     response.set_cookie(
#         key="admin_auth",
#         value="true",
#         httponly=True,
#         samesite="lax",
#     )

#     return {"success": True}


# # ---------------- ADMIN DASHBOARD ----------------
# @app.get("/admin/dashboard")
# def admin_dashboard(patient_email: str, request: Request):
#     require_admin(request)

#     db = get_db()
#     cursor = db.cursor(dictionary=True)

#     cursor.execute(
#         """
#         SELECT id, email, last_login
#         FROM users
#         WHERE email = %s
#         """,
#         (patient_email,),
#     )

#     user = cursor.fetchone()
#     if not user:
#         raise HTTPException(status_code=404, detail="Patient not found")

#     cursor.execute(
#         """
#         SELECT summary, created_at
#         FROM medical_analyses
#         WHERE user_id = %s
#         ORDER BY created_at DESC
#         LIMIT 1
#         """,
#         (user["id"],),
#     )
#     last_analysis = cursor.fetchone()

#     cursor.execute(
#         """
#         SELECT COUNT(*) AS total
#         FROM medical_analyses
#         WHERE user_id = %s
#         """,
#         (user["id"],),
#     )
#     total_docs = cursor.fetchone()["total"]

#     return {
#         "email": user["email"],
#         "last_login": user["last_login"],
#         "documents_analyzed": total_docs,
#         "last_analysis": last_analysis,
#     }
