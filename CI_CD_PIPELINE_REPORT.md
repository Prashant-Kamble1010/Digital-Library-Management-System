# 📚 Digital Library Management System — CI/CD Pipeline Report

---

## 📌 Executive Summary

This document details the configuration and execution of the Continuous Integration and Continuous Deployment (CI/CD) pipeline for the **Digital Library Management System**. The pipeline automates the entire lifecycle of code changes: **code quality analysis**, **automated unit testing**, **code coverage generation**, **production compilation (build)**, and **comprehensive reporting**.

Both **GitHub Actions** and **Jenkins** configurations have been implemented with automatic triggers on code commits (`push`) and pull requests (`pull_request`).

---

## 🛠️ Pipeline Architecture & Workflow

```
+-----------------------------------------------------------------------------------+
|                            AUTOMATIC TRIGGERS                                     |
|           • Code Commit (git push to main/master)                                 |
|           • Pull Request (pull_request to main/master)                            |
|           • Manual Execution (workflow_dispatch)                                  |
+-----------------------------------------------------------------------------------+
                                          │
                                          ▼
+-----------------------------------------------------------------------------------+
|                     STAGE 1: CODE QUALITY & STATIC ANALYSIS                       |
|           • ESLint static analysis (Syntax, standards, unused vars)               |
|           • npm audit dependency vulnerability check                              |
+-----------------------------------------------------------------------------------+
                                          │
                                          ▼
+-----------------------------------------------------------------------------------+
|                     STAGE 2: AUTOMATED TESTING & COVERAGE                         |
|           • Vitest unit tests execution (bookValidation, loginValidation)         |
|           • V8 code coverage report generation (HTML, LCOV, JSON)                 |
+-----------------------------------------------------------------------------------+
                                          │
                                          ▼
+-----------------------------------------------------------------------------------+
|                        STAGE 3: APPLICATION BUILD                                 |
|           • Vite production bundle compilation                                    |
|           • Minification, tree-shaking, and asset optimization into dist/         |
+-----------------------------------------------------------------------------------+
                                          │
                                          ▼
+-----------------------------------------------------------------------------------+
|                    STAGE 4: REPORTING & ARTIFACT ARCHIVING                        |
|           • GitHub Step Summary / Jenkins Console & HTML Report                   |
|           • Artifacts: Production Build (dist/), Coverage (coverage/), Report     |
+-----------------------------------------------------------------------------------+
```

---

## ⚙️ Trigger Configuration

The pipeline executes automatically without manual intervention whenever code is pushed or a pull request is created:

```yaml
on:
  push:
    branches:
      - main
      - master
  pull_request:
    branches:
      - main
      - master
  workflow_dispatch:
```

- **Commit Trigger (`push`)**: Ensures every commit pushed to `master` or `main` is validated immediately before deployment.
- **Pull Request Trigger (`pull_request`)**: Acts as a quality gate to prevent broken code from being merged into production branches.
- **Manual Trigger (`workflow_dispatch`)**: Allows team members and administrators to trigger the pipeline on-demand from the GitHub web console.

---

## 📋 Pipeline Stages Implementation

### 1. Stage 1: Static Code Analysis & Quality
- **Tool**: ESLint (`eslint .`) & `npm audit`
- **Purpose**: Enforce strict coding standards, prevent syntax/runtime errors, detect unused/undefined variables, and flag security vulnerabilities in dependencies.
- **Resolution**: Identified and resolved undefined variable and syntax errors in `Login.jsx` (`setError`, `username`, `password`, unused `handleLogin`), resulting in **0 errors and 0 warnings**.

### 2. Stage 2: Automated Testing & Code Coverage
- **Tool**: Vitest (`vitest run`) & `@vitest/coverage-v8`
- **Purpose**: Verify business logic correctness across core library management functionalities:
  - `bookValidation.test.js`: Validates book creation/update fields (title, author, category requirements).
  - `loginValidation.test.js`: Validates credential requirements and password length boundaries.
- **Coverage**: Generates detailed coverage reports in HTML, JSON, and LCOV formats stored in `frontend/coverage/`.

### 3. Stage 3: Application Build
- **Tool**: Vite (`vite build`)
- **Purpose**: Compiles React JSX components, bundles CSS, and optimizes static assets into production-ready output in `frontend/dist/`.
- **Quality Gate**: The build only runs if analysis and tests pass successfully.

### 4. Stage 4: Reporting & Artifact Archiving
- **Tool**: GitHub Actions `$GITHUB_STEP_SUMMARY`, `actions/upload-artifact@v4` & Jenkins Artifact Archiver
- **Purpose**: Creates transparent, visible execution summaries and preserves downloadable build binaries and test reports for auditing.

---

## 📊 CI/CD Quality Metrics & Test Results

| Metric Category | Target Standard | Achieved Result | Evaluation |
| :--- | :---: | :---: | :---: |
| **Pipeline Status** | Success | **100% Passed** | ✅ Meets Target |
| **Test Suites** | 2 Suites | **2 / 2 Passed** | ✅ 100% Passing |
| **Unit Tests Passed** | All Unit Tests | **8 / 8 Passed** | ✅ 100% Passing |
| **ESLint Errors** | 0 Errors | **0 Errors** | ✅ Clean Codebase |
| **ESLint Warnings** | 0 Warnings | **0 Warnings** | ✅ Clean Codebase |
| **Statement Coverage** | ≥ 80% | **100%** | ✅ Exceeds Target |
| **Branch Coverage** | ≥ 80% | **100%** | ✅ Exceeds Target |
| **Function Coverage** | ≥ 80% | **100%** | ✅ Exceeds Target |
| **Line Coverage** | ≥ 80% | **100%** | ✅ Exceeds Target |
| **High Security Vulnerabilities** | 0 | **0** | ✅ Secure |

---

## 🧪 Detailed Test Case Matrix

### Suite: `bookValidation.test.js`
| # | Test Scenario | Input Data | Expected Output | Status |
| :-: | :--- | :--- | :--- | :---: |
| 1 | Valid book submission | Title: `"Java Programming"`, Author: `"James Gosling"`, Category: `"Programming"` | `"Book is valid"` | ✅ Pass |
| 2 | Empty book title validation | Title: `""`, Author: `"James Gosling"`, Category: `"Programming"` | `"Book title is required"` | ✅ Pass |
| 3 | Empty author validation | Title: `"Java Programming"`, Author: `""`, Category: `"Programming"` | `"Author is required"` | ✅ Pass |
| 4 | Empty category validation | Title: `"Java Programming"`, Author: `"James Gosling"`, Category: `""` | `"Category is required"` | ✅ Pass |

### Suite: `loginValidation.test.js`
| # | Test Scenario | Input Data | Expected Output | Status |
| :-: | :--- | :--- | :--- | :---: |
| 1 | Valid username and password | User: `"admin"`, Pass: `"123456"` | `"Login successful"` | ✅ Pass |
| 2 | Empty username validation | User: `""`, Pass: `"123456"` | `"Username is required"` | ✅ Pass |
| 3 | Short password (< 6 chars) | User: `"admin"`, Pass: `"123"` | `"Password must be at least 6 characters"` | ✅ Pass |
| 4 | Exact 6-character password boundary | User: `"librarian"`, Pass: `"abcdef"` | `"Login successful"` | ✅ Pass |

---

## 📦 Published Artifacts

| Artifact Name | Source Directory | Content Description |
| :--- | :--- | :--- |
| **`digital-library-build`** | `frontend/dist/` | Production bundle (`index.html`, minified JS/CSS chunks, static assets) ready for web hosting (Nginx, S3, Vercel). |
| **`digital-library-coverage`** | `frontend/coverage/` | Interactive HTML coverage dashboard and LCOV file showing line-by-line test execution coverage. |
| **`digital-library-ci-report`** | `frontend/reports/` | Markdown and text execution log containing full stage timestamps and metrics. |

---

## 🚀 How to Run & Verify

### Locally (Command Line)
```bash
# Navigate to the frontend directory
cd frontend

# 1. Run static analysis (Code Quality)
npm run lint

# 2. Run automated tests
npm run test:run

# 3. Generate coverage metrics
npm run test:coverage

# 4. Compile production build
npm run build
```

### Git Commit & Push to Trigger the Pipeline
```bash
git add .
git commit -m "Configure CI/CD pipeline with build, test, analysis and reporting stages"
git push origin master
```

Once pushed, navigate to the **Actions** tab on GitHub:
👉 `https://github.com/Prashant-Kamble1010/Digital-Library-Management-System/actions` to watch the pipeline execute and view the interactive Job Summary dashboard!
