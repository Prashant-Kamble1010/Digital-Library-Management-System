# 🎥 1–2 Minute Video Demonstration Script & Guide
**Assessment:** Formative Assessment 2 (FA2) — Agile Software Development  
**Subject:** Agile Software Development | PCCOE IT Department  
**Required Video Duration:** 1 to 2 minutes (Strictly enforced)  
**Narration Requirement:** Original human voice (AI voice strictly prohibited)  

---

## ⏱️ Video Timeline & Screen Breakdown

| Time Window | What Screen to Show | What to Say (Spoken Script) | Speaker |
| :---: | :--- | :--- | :---: |
| **0:00 – 0:20** | **GitHub Repository Home Page**<br>• Show repo title `Digital-Library-Management-System`<br>• Show `AGILE_PROJECT_PLAN.md` with User Stories & DoD | *"Hello everyone. Today our group is presenting Formative Assessment 2 for Agile Software Development. We selected the Digital Library Management System. We prepared our Agile plan comprising 5 user stories, sprint planning for a two-week sprint, acceptance criteria in Given-When-Then format, and a strict Definition of Done."* | **Student 1** |
| **0:20 – 0:45** | **CI/CD Workflow File (`ci-cd.yml`)**<br>• Show `.github/workflows/ci-cd.yml`<br>• Highlight triggers: `push` & `pull_request`<br>• Highlight the 4 stages: Build, Test, Quality, Deploy | *"To implement our CI/CD pipeline, we configured GitHub Actions with automatic triggers on every commit and pull request. Our pipeline implements the required five-stage workflow: GitHub Trigger, Build, Automated Testing, Code Quality Check with ESLint, and Production Deployment."* | **Student 1 / 2** |
| **0:45 – 1:15** | **GitHub Actions Execution Tab (`Actions`)**<br>• Click on the latest green workflow run<br>• Show the completed stage graph<br>• Open **Stage 2 (Vitest Testing)** showing 8/8 tests passed<br>• Open **Stage 3 (ESLint)** showing 0 errors | *"Here on the GitHub Actions console, you can see our automated pipeline executing. First, it compiles the production build using Vite. Next, it executes 8 automated unit tests in Vitest with 100% test coverage. Following that, ESLint performs static code analysis with zero errors and zero warnings, enforcing our Definition of Done."* | **Student 2** |
| **1:15 – 1:45** | **Artifacts & Step Summary Dashboard**<br>• Scroll to Job Summary table<br>• Show uploaded artifacts (`digital-library-build`, `coverage`)<br>• Briefly show the deployed/running React app | *"Finally, the deployment stage packages the production bundle, and the pipeline generates this comprehensive CI/CD report summary and archives our build and coverage artifacts. This ensures continuous, reliable delivery in an Agile environment. Thank you!"* | **Student 2** |

---

## 🎙️ Word-for-Word Narration Script (Ready to Read)

### Part 1: Introduction & Agile Project Plan (Student 1 — ~35 seconds)
> *"Hello ma'am and everyone. For our FA2 Skill-Based Activity, our group has designed and demonstrated an automated CI/CD pipeline for the Digital Library Management System.*  
> *Under Agile project planning, we defined 5 core user stories covering login authentication, book catalog management, and input validation. We formulated acceptance criteria in Given-When-Then format and defined our team's Definition of Done requiring clean code, passing unit tests, and automated deployment."*

### Part 2: CI/CD Pipeline Implementation & Live Demo (Student 2 — ~45 seconds)
> *"For automation, we configured a GitHub Actions pipeline that triggers automatically on every code push and pull request.*  
> *As required, our pipeline follows the workflow:*  
> **GitHub → Build → Automated Testing → Code Quality Check → Deployment.**  
> *As seen here in our live GitHub Actions run:*  
> *1. The application builds cleanly with Vite.*  
> *2. Vitest executes all 8 unit tests across login and book validations with 100% pass rate.*  
> *3. ESLint checks code quality with zero errors and zero warnings.*  
> *4. The deployment stage packages the production release and archives artifacts.*  
> *This completes our automated pipeline. Thank you!"*

---

## 🛠️ Step-by-Step Recording Instructions

### Method 1: Using Windows Built-in Xbox Game Bar (Quickest)
1. Open your browser with two tabs ready:
   - **Tab 1:** Your GitHub repository (`https://github.com/Prashant-Kamble1010/Digital-Library-Management-System`)
   - **Tab 2:** Your GitHub Actions runs (`https://github.com/Prashant-Kamble1010/Digital-Library-Management-System/actions`)
2. Press **`Windows Key + Alt + R`** to start screen recording.
3. Make sure your microphone is unmuted (click the mic icon).
4. Follow the timeline above, narrating clearly with your natural voice.
5. Press **`Windows Key + Alt + R`** to stop. The video file will be in `Videos\Captures`.

### Method 2: Using OBS Studio or Zoom/Google Meet
1. Start a local Google Meet or Zoom meeting with screen share enabled.
2. Record the meeting for ~1 minute 30 seconds.
3. Export the `.mp4` video.

---

## ✅ FA2 Final Submission Checklist

- [ ] Git commit and push all files to GitHub repository (`master` branch).
- [ ] Verify green checkmark on GitHub Actions tab.
- [ ] Record 1–2 minute video following the script above using your original voice.
- [ ] Submit video link / `.mp4` file to Google Classroom before deadline.
- [ ] Submit written report (`CI_CD_PIPELINE_REPORT.md` and `AGILE_PROJECT_PLAN.md`) if required.
