# 🤖 AI Project Architect

> An AI-powered web application that generates complete software project reports instantly using Google Gemini AI — built with Python, FastAPI, and vanilla JavaScript.

![Home Page](Screenshot%202026-06-27%20182320.png)

---

## 🌟 Live Demo
> 🔗 _Coming soon — deployment in progress on Render_

---

## 📌 About the Project

Planning a software project takes hours of research and documentation. **AI Project Architect** solves this by letting you type any project idea and instantly generating a complete, structured project report using Google Gemini AI — including Abstract, Introduction, Tech Stack, System Architecture, Database Design, and more.

Built with a modern **FastAPI backend** and clean **HTML/CSS/JS frontend**, this tool is useful for students, developers, and teams who want to kickstart their project planning.

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🤖 AI Generation | Generate full project reports using Google Gemini AI |
| 📄 Download PDF | Export generated report as a PDF instantly |
| 🌙 Dark / Light Mode | Toggle between dark and light themes |
| 📋 Copy Output | Copy generated content to clipboard |
| 📜 View History | Browse all previously generated projects |
| 🗑️ Clear History | Reset project history with one click |
| 👀 Preview Website | Preview generated web project live |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python, FastAPI, Uvicorn |
| AI | Google Gemini API |
| Frontend | HTML5, CSS3, JavaScript |
| Storage | JSON-based local history |
| PDF Export | ReportLab / FPDF |

---

## 📂 Project Structure

```
AI-Project-Architect/
│
├── backend/
│   ├── app/
│   │   ├── main.py          # FastAPI app & API routes
│   │   ├── ai_service.py    # Gemini AI integration
│   │   └── __init__.py
│   ├── project_history.json # Saved project history
│   └── .env                 # API keys (not committed)
│
├── frontend/
│   ├── index.html           # Main UI
│   ├── script.js            # API calls & UI logic
│   └── style.css            # Styling & dark mode
│
├── .gitignore
└── README.md
```

---

## ⚙️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/keerthanakumar02/AI-Project-Architect.git
cd AI-Project-Architect
```

### 2. Create virtual environment
```bash
python -m venv venv
venv\Scripts\activate  # Windows
```

### 3. Install dependencies
```bash
pip install fastapi uvicorn google-generativeai python-dotenv
```

### 4. Add your Gemini API key
Create `.env` file inside `backend/` folder:
```
GEMINI_API_KEY=your_api_key_here
```
Get your free API key at: https://makersuite.google.com/app/apikey

### 5. Run Backend
```bash
cd backend
uvicorn app.main:app --reload --port 8000
```

### 6. Run Frontend
Open a new terminal:
```bash
cd frontend
python -m http.server 5500
```

### 7. Open in browser
```
http://127.0.0.1:5500
```

---

## 📸 Screenshots

### 🏠 Home Page — Dark Mode
![Home Page](Screenshot%202026-06-27%20182320.png)

### 👀 Preview Website
![Preview](Screenshot%202026-06-27%20213356.png)

### 📜 Project History
![Project History](Screenshot%202026-06-27%20213423.png)

### 💜 Light Mode
![Light Mode](Screenshot%202026-06-27%20213647.png)

---

## 🔮 Upcoming Features

- [ ] 🌐 Deploy on Render (Backend) + GitHub Pages (Frontend)
- [ ] 📊 Export as Word Document
- [ ] 🔐 User login & personal project dashboard
- [ ] 🎨 Better markdown rendering in output
- [ ] 📱 Mobile responsive design

---

## 🎯 Use Cases

- Students generating project reports for college submissions
- Developers kickstarting new project documentation
- Teams planning software architecture quickly
- Hackathon participants needing rapid project outlines

---

## 👩‍💻 Developer

**Keerthana K**

[![GitHub](https://img.shields.io/badge/GitHub-keerthanakumar02-black?logo=github)](https://github.com/keerthanakumar02)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

> ⭐ If you found this project useful, please give it a star on GitHub!
