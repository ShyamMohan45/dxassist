# CLINICAL ANALYSIS - USER EXPERIENCE FLOW

## Step 1: Upload Medical Document

```
┌─────────────────────────────────────────┐
│    Clinical Document Analysis           │
├─────────────────────────────────────────┤
│                                         │
│  Choose File medical report1.png        │
│  [Choose File] [                    ]   │
│                                         │
│  [Analyze Document] (or "Analyzing...")│
│                                         │
│  View Past Analyses →                  │
│                                         │
└─────────────────────────────────────────┘
```

---

## Step 2: Analysis In Progress

```
┌─────────────────────────────────────────┐
│    Clinical Document Analysis           │
├─────────────────────────────────────────┤
│                                         │
│  [Analyzing Document...]                │
│                                         │
│  (Backend uploading to Gemini AI)      │
│  (Processing: 5-15 seconds)            │
│                                         │
└─────────────────────────────────────────┘
```

---

## Step 3: Results Display

### 3A: Clinical Summary
```
┌──────────────────────────────────────────────┐
│  Clinical Summary                             │
├──────────────────────────────────────────────┤
│                                              │
│  Patient presents with acute respiratory    │
│  infection indicated by fever (39.2°C),     │
│  productive cough, and elevated WBC          │
│  (15,000/μL). CT imaging shows right lower  │
│  lobe consolidation consistent with acute   │
│  pneumonia. No significant comorbidities.   │
│                                              │
└──────────────────────────────────────────────┘
```

### 3B: Clinical Priorities (Sorted by Risk)

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Acute Pneumonia  │  │ Elevated Fever   │  │ High WBC Count   │
├──────────────────┤  ├──────────────────┤  ├──────────────────┤
│ HIGH             │  │ MEDIUM           │  │ LOW              │
│ Risk             │  │ Caution          │  │ Monitor          │
├──────────────────┤  ├──────────────────┤  ├──────────────────┤
│ Based on fever,  │  │ Temperature      │  │ WBC 15,000/μL    │
│ elevated WBC,    │  │ at 39.2°C        │  │ (normal range:   │
│ and CT findings  │  │ requires        │  │ 4,500-11,000)    │
│                  │  │ monitoring       │  │                  │
└──────────────────┘  └──────────────────┘  └──────────────────┘
     RED                    YELLOW                   GREEN
   SEVERITY                SEVERITY                 SEVERITY
```

### 3C: Evidence & Citations

```
┌──────────────────────────────────────────────────────┐
│ 🔍 Evidence & Citations                              │
├──────────────────────────────────────────────────────┤
│                                                      │
│ • Vital signs: Temperature 39.2°C (fever present)   │
│                                                      │
│ • Lab Results: WBC count 15,000/μL                  │
│   (Normal range: 4,500-11,000/μL)                   │
│                                                      │
│ • Imaging Finding: Right lower lobe consolidation   │
│   on CT scan, measuring 8cm x 6cm                   │
│                                                      │
│ • Clinical Impression: Findings consistent with     │
│   bacterial pneumonia, likely community-acquired    │
│                                                      │
│ • Medical History: No previous respiratory disease, │
│   non-smoker, no immunocompromise noted             │
│                                                      │
│ • Physical Examination: Crackles heard in right     │
│   lower lobe on auscultation                        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ FRONTEND (Next.js) - localhost:3000/diagnostics/analyze    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. User selects PNG/PDF medical report                     │
│  2. Clicks "Analyze Document"                              │
│  3. FormData created with file                             │
│  4. Sends POST to http://127.0.0.1:8001/analyze           │
│                                                             │
└────────────────┬──────────────────────────────────────────┘
                 │
                 │ POST /analyze
                 │ multipart/form-data
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│ BACKEND (FastAPI) - localhost:8001                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Receive file upload                                    │
│  2. Save to temp_filename                                 │
│  3. Call analyze_medical_file(temp_path)                 │
│  4. Gemini AI processes and returns JSON:                │
│     {                                                     │
│       "summary": "...",                                  │
│       "conditions": [...],                              │
│       "evidence": [...]                                 │
│     }                                                    │
│  5. Save to database                                    │
│  6. Return response with all fields                     │
│  7. Delete temp file                                    │
│                                                         │
└────────────────┬──────────────────────────────────────────┘
                 │
                 │ JSON Response
                 │ {status, summary, conditions, evidence}
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│ FRONTEND - Display Results                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Parse json.summary → Display Clinical Summary         │
│  2. Parse json.conditions → Sort by severity              │
│  3. Render color-coded cards:                             │
│     - High (Red)   : Immediate attention                  │
│     - Medium (Yellow): Monitor & treat                    │
│     - Low (Green)  : Chronic/stable                       │
│  4. Parse json.evidence → Display as bullet list          │
│  5. Show all results with formatting                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Color Scheme

### Severity Indicators

| Level | Color | Hex Code | Use Case |
|-------|-------|----------|----------|
| High | 🔴 RED | #EF4444 | Life-threatening, urgent intervention |
| Medium | 🟡 YELLOW | #FBBF24 | Significant risk, requires monitoring |
| Low | 🟢 GREEN | #34D399 | Chronic, minor, no immediate risk |

---

## Example Outputs

### Scenario 1: Pneumonia (From Actual Medical Report)

**Summary:**
```
Patient with acute pneumonia presenting with fever, productive 
cough, and imaging findings of right lower lobe consolidation. 
Elevated inflammatory markers and WBC suggest bacterial infection. 
Clinical presentation consistent with community-acquired pneumonia.
```

**Conditions (Sorted):**
1. HIGH - Acute Pneumonia - Fever, elevated WBC, CT consolidation
2. MEDIUM - Elevated Fever - Temperature 39.2°C
3. MEDIUM - Elevated WBC - 15,000/μL (normal 4,500-11,000)
4. LOW - Abnormal Chest X-Ray - Right lower lobe opacity

**Evidence:**
- Temperature: 39.2°C documented in vital signs
- WBC: 15,000/μL (elevated)
- CT Finding: Right lower lobe consolidation measuring 8cm x 6cm
- CXR: Opacity in right basilar region
- Sputum Culture: Pending (to identify organism)

---

### Scenario 2: Healthy Patient (No Abnormalities)

**Summary:**
```
Clinical examination reveals no acute abnormalities. Vital signs 
are within normal limits. Laboratory values are normal. Patient 
appears to be in good health with no significant findings.
```

**Conditions:**
1. LOW - General Health Status - No significant abnormalities detected

**Evidence:**
- All vital signs within normal ranges
- No laboratory abnormalities detected
- Physical examination unremarkable
- No acute distress observed

---

## Response Time

- **Fast**: < 5 seconds (small documents, simple cases)
- **Normal**: 5-10 seconds (typical medical reports)
- **Slow**: 10-15 seconds (complex documents, multiple pages)

> Note: Time depends on Gemini API processing speed and document complexity

---

## Database Storage

After analysis, the system stores:

```json
{
  "id": 42,
  "user_id": 1,
  "summary": "Patient with acute infection...",
  "conditions": [
    {"name": "Pneumonia", "severity": "High", "justification": "..."},
    {"name": "Fever", "severity": "Medium", "justification": "..."}
  ],
  "evidence": [
    "Temperature 39.2°C",
    "WBC 15,000/μL",
    "CT consolidation right lower lobe"
  ],
  "created_at": "2026-01-23T14:30:00Z"
}
```

Users can later access this analysis through the "View Past Analyses" link.

---

## Error Handling

### If Analysis Fails

```
┌──────────────────────────────────────────┐
│  Clinical Document Analysis              │
├──────────────────────────────────────────┤
│                                          │
│  Unable to analyze document              │
│  (shown in red)                          │
│                                          │
│  Possible causes:                        │
│  - Backend not running on 8001           │
│  - Invalid/corrupted file                │
│  - Gemini API quota exceeded             │
│  - Network connection issue              │
│                                          │
│  Action: Try again or check setup        │
│                                          │
└──────────────────────────────────────────┘
```

---

## Success Indicators ✅

When working properly:

✅ File upload field accepts PNG/PDF  
✅ "Analyze Document" button triggers analysis  
✅ Button shows "Analyzing..." during processing  
✅ Clinical Summary text appears after 5-15 seconds  
✅ Condition cards display with color coding  
✅ Evidence bullets show specific findings  
✅ All results are properly formatted  
✅ No error messages displayed  

---

**Status**: ✅ Ready for user testing
**Last Updated**: January 23, 2026
