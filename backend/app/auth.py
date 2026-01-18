from fastapi import Depends, HTTPException, status

# TEMP MOCK AUTH (until JWT is wired)
def get_user():
    # Replace later with real session/JWT logic
    return {
        "id": 1,
        "email": "demo@dxassist.ai"
    }
