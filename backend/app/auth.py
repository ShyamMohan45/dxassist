from fastapi import Depends, HTTPException, status

# TEMP MOCK AUTH (until JWT is wired)
def get_user():
    # Replace later with real session/JWT logic
    return {
        "id": 1,
        "email": "demo@dxassist.ai"
    }



# import os
# from fastapi import Request, HTTPException

# ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
# ADMIN_PASSWORD = os.getenv("ADMIN_SECRET_PASSWORD")


# def require_admin(request: Request):
#     admin = request.cookies.get("admin_auth")

#     if admin != "true":
#         raise HTTPException(status_code=403, detail="Admin access required")
