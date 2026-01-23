from fastapi import Depends, HTTPException, Request

def get_user(request: Request):
    """
    ✅ Extract user_id from x-user-id header
    Used to ensure analysis is saved with correct user_id
    """
    user_id = request.headers.get("x-user-id")

    if not user_id:
        raise HTTPException(status_code=401, detail="Not authenticated")

    try:
        return {"id": int(user_id)}
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid user ID")

# this above is initial code 

# from fastapi import Request, HTTPException

# def get_user(request: Request):
#     user_id = request.headers.get("x-user-id")

#     if not user_id:
#         raise HTTPException(status_code=401, detail="Not authenticated")

#     return {"id": int(user_id)}




# import os
# from fastapi import Request, HTTPException

# ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
# ADMIN_PASSWORD = os.getenv("ADMIN_SECRET_PASSWORD")


# def require_admin(request: Request):
#     admin = request.cookies.get("admin_auth")

#     if admin != "true":
#         raise HTTPException(status_code=403, detail="Admin access required")
