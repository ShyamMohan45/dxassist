@echo off
REM Start Backend Server on Port 8000

cd backend
call venv\Scripts\activate.bat
uvicorn app.main:app --reload --port 8000
pause
