#!/bin/bash
# Start Backend Server on Port 8000

cd backend
source venv/Scripts/activate
uvicorn app.main:app --reload --port 8000
