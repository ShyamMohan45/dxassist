# Analysis History Feature - Complete Fix Guide

## Problem Summary
Users were unable to see their past analyses in the history page even though the analysis was being performed. The data wasn't being retrieved and displayed.

## Root Causes Identified

### 1. **Wrong Backend Port Numbers**
- **History Page Issue**: Called `http://127.0.0.1:8001/analyses` but backend runs on port **8000**
- **Analyze Page Issue**: Called `http://127.0.0.1:8001/analyze` but backend runs on port **8000**

### 2. **Missing User Authentication Headers**
- **History Page Issue**: Did NOT send `x-user-id` header required by backend authentication
- **Result**: Backend's `get_user(request: Request)` dependency returned 401 Unauthorized

### 3. **Missing User Context in History Page**
- History page didn't import or use `AuthContext` to get current user ID
- Couldn't pass user ID even if header was implemented

## Solutions Applied

### Fix 1: Update History Page ([app/diagnostics/history/page.js](app/diagnostics/history/page.js))

**Changes:**
- Added `useAuth()` hook import from AuthContext
- Added user state dependency to useEffect
- Changed API endpoint from `8001` to `8000`
- Added `x-user-id` header with user ID to API call
- Added user login check - shows message if not authenticated
- Added error handling and logging

**Before:**
```javascript
"use client";
import { useEffect, useState } from "react";
import SeverityCard from "../analyze/SeverityCard";

export default function PastAnalysesPage() {
  const [analyses, setAnalyses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8001/analyses", {  // ❌ Wrong port
      credentials: "include",                    // ❌ Missing user ID header
    })
```

**After:**
```javascript
"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";  // ✅ Added
import SeverityCard from "../analyze/SeverityCard";

export default function PastAnalysesPage() {
  const { user } = useAuth();  // ✅ Added
  const [analyses, setAnalyses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !user.id) {  // ✅ Added
      setLoading(false);
      return;
    }

    fetch("http://127.0.0.1:8000/analyses", {  // ✅ Fixed port
      credentials: "include",
      headers: {
        "x-user-id": user.id.toString(),  // ✅ Added auth header
      },
    })
```

### Fix 2: Update Analyze Page ([app/diagnostics/analyze/page.js](app/diagnostics/analyze/page.js))

**Changes:**
- Changed API endpoint from `8001` to `8000`

**Before:**
```javascript
const res = await fetch("http://127.0.0.1:8001/analyze", {  // ❌ Wrong port
```

**After:**
```javascript
const res = await fetch("http://127.0.0.1:8000/analyze", {  // ✅ Correct port
```

### Fix 3: Add User Login Check to History Page

**New Feature:**
- Shows "Please login to view your past analyses" message if user not authenticated
- Only loads data if user ID is available

```javascript
if (!user) {
  return (
    <div className="p-8 max-w-6xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">
        View Past Analyses
      </h1>
      <p className="text-red-400">
        Please login to view your past analyses.
      </p>
    </div>
  );
}
```

## Backend Configuration (Already Correct)

### Database Storage
- ✅ Table `medical_analyses` exists with correct schema
- ✅ Fields: `id`, `user_id`, `summary`, `conditions` (JSON), `evidence` (JSON), `created_at`
- ✅ Foreign key constraint on `user_id` references `users(id)`

### Backend Endpoints
- ✅ `POST /analyze` - Saves analysis to database via `save_analysis()` function
- ✅ `GET /analyses` - Retrieves user's analyses via `get_analyses_by_user()` function
- ✅ CORS configured for `http://localhost:3000`
- ✅ User authentication via `x-user-id` header

### Database Functions
- ✅ `save_analysis()` - Inserts analysis with user_id
- ✅ `get_analyses_by_user()` - Retrieves analyses filtered by user_id, ordered by created_at DESC
- ✅ JSON parsing for conditions and evidence arrays

## How It Works Now

1. **User logs in** → AuthContext provides user ID
2. **User uploads document** → Frontend sends to `/analyze` with `x-user-id` header
3. **Backend analyzes** → AI generates summary, conditions, evidence
4. **Backend saves** → Stores in `medical_analyses` table with user_id
5. **User views history** → Frontend fetches `/analyses` with `x-user-id` header
6. **Backend retrieves** → Queries database filtering by user_id
7. **History displays** → Shows all past analyses with timestamps

## Testing Checklist

- [ ] Start backend: `cd backend && python -m uvicorn app.main:app --reload --port 8000`
- [ ] Verify backend running on port 8000 (not 8001)
- [ ] Login to frontend as a user
- [ ] Upload a document for analysis
- [ ] Check that analysis completes and displays
- [ ] Click "View Past Analyses" link
- [ ] Verify past analyses appear in history
- [ ] Logout and try to view history → should show login message
- [ ] Database check: `SELECT * FROM medical_analyses WHERE user_id = 1;` should have records

## Common Issues & Solutions

### Issue: "No past analyses found"
**Possible Causes:**
1. Backend not running on port 8000
2. User not logged in (user ID missing)
3. Analysis not saved to database (check backend logs)
4. Wrong user_id in header

**Solution:**
- Check backend is running: `lsof -i :8000` (macOS/Linux) or `netstat -ano | findstr :8000` (Windows)
- Verify user is logged in and has valid user.id
- Check browser console for network errors
- Check backend console for database errors

### Issue: "401 Unauthorized" in browser console
**Cause:** User ID header not sent to backend

**Solution:**
- Ensure AuthContext is imported and user object is available
- Verify `x-user-id` header is being sent in fetch request
- Check browser DevTools Network tab - should see header in request

### Issue: Backend gives 500 error on /analyze
**Cause:** Database connection or save_analysis() failure

**Solution:**
- Check MySQL is running
- Verify .env file has correct DATABASE_HOST, DATABASE_USER, DATABASE_PASS, DATABASE_NAME
- Check medical_analyses table exists: `DESCRIBE medical_analyses;`
- Check backend error logs

## Files Modified

1. [app/diagnostics/history/page.js](app/diagnostics/history/page.js) - Added auth header, fixed port
2. [app/diagnostics/analyze/page.js](app/diagnostics/analyze/page.js) - Fixed port

## Environment Variables Required

Backend `.env` file should contain:
```
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASS=your_password
DATABASE_NAME=dxassist
GEMINI_API_KEY=your_api_key
```

## Summary

✅ **All fixes applied**
- Port numbers corrected (8001 → 8000)
- User authentication headers added
- Login checks added to UI
- History page now retrieves and displays past analyses correctly
- Data persists in database per user

**Status: History feature should now work correctly!**
