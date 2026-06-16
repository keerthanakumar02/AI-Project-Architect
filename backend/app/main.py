
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

from reportlab.platypus import (
SimpleDocTemplate,
Paragraph,
Spacer
)

from reportlab.lib.styles import getSampleStyleSheet

from app.ai_service import ask_gemini

import json
import os

app = FastAPI()

app.add_middleware(
CORSMiddleware,
allow_origins=["*"],
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "AI Project Architect Running"}

@app.get("/generate-project")
def generate_project(project_name: str):

    prompt = f"""
Generate a professional software project report for:

{project_name}

Include:

1. Project Title
2. Abstract
3. Introduction
4. Problem Statement
5. Objectives
6. Scope
7. Features
8. Functional Requirements
9. Non Functional Requirements
10. Technology Stack
11. System Architecture
12. Database Design
13. Testing
14. Advantages
15. Future Enhancements
16. Conclusion

Write detailed paragraphs for each section.

Return report only.
"""

    response = ask_gemini(prompt)

    return {
        "project_name": project_name,
        "result": response
    }



@app.get("/download-pdf")
def download_pdf(project_name: str):

    filename = f"{project_name}.pdf"

    doc = SimpleDocTemplate(filename)
    styles = getSampleStyleSheet()

    content = [
        Paragraph(project_name, styles["Title"]),
        Spacer(1, 20),
        Paragraph(
            "AI Project Architect Generated Report",
            styles["Normal"]
        )
    ]



    doc.build(content)

    return FileResponse(
        filename,
        media_type="application/pdf",
        filename=filename
    )
    @app.delete("/clear-history")
    def clear_history():

     with open("project_history.json", "w") as f:
        json.dump([], f)

    return {
        "message": "History Cleared Successfully"
    }


@app.get("/history")
def get_history():

    history_file = "project_history.json"

    if os.path.exists(history_file):
        with open(history_file, "r") as f:
            history = json.load(f)
    else:
        history = []

    return history




