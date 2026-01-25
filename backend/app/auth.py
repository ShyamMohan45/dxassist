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

