# 📖 Digital Library Management System

![CI/CD Pipeline](https://github.com/Prashant-Kamble1010/Digital-Library-Management-System/actions/workflows/ci-cd.yml/badge.svg)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)
![Tests](https://img.shields.io/badge/Tests-8%2F8%20Passed-brightgreen.svg)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)
![Code Quality](https://img.shields.io/badge/Code%20Quality-ESLint%20Clean-brightgreen.svg)

A modern, responsive web application for managing digital library collections, book inventories, updates, and user authentication. Built with **React** and **Vite**, featuring a fully automated **CI/CD pipeline** with GitHub Actions and Jenkins.

---

## 🚀 Key Features

- 🔐 **User Authentication**: Secure login form with comprehensive input validation.
- 📚 **Book Management**: Add, update, and manage book details (title, author, category).
- ⚡ **Vite & React Fast Refresh**: High-performance development and production build pipeline.
- 🤖 **CI/CD Automation**: Automated build, test, lint, and coverage reporting on every commit and pull request.

---

## 🏗️ CI/CD Pipeline Stages

The pipeline triggers automatically on any `push` or `pull_request` to `master` and `main`:

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Stage 1:       │     │  Stage 2:        │     │  Stage 3:       │     │  Stage 4:       │
│  Code Analysis  │ ──> │  Automated Tests │ ──> │  Production     │ ──> │  Reporting &    │
│  (ESLint Audit) │     │  (Vitest + V8)   │     │  Build (Vite)   │     │  Artifacts      │
└─────────────────┘     └──────────────────┘     └─────────────────┘     └─────────────────┘
```

1. **Analysis**: ESLint static code quality inspection and security audit (`npm audit`).
2. **Test**: Vitest unit testing for book and login validation logic with V8 coverage reports.
3. **Build**: Optimized compilation of frontend assets into `frontend/dist/`.
4. **Reporting**: Generates CI/CD summary dashboard, uploads build binaries and test coverage artifacts.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v20 or v22 recommended)
- npm (v10+)

### Installation
```bash
git clone https://github.com/Prashant-Kamble1010/Digital-Library-Management-System.git
cd Digital-Library-Management-System/frontend
npm install
```

### Local Development
```bash
npm run dev
```

### Running Tests & Quality Checks
```bash
# Run unit tests
npm run test:run

# Run unit tests with code coverage
npm run test:coverage

# Run ESLint quality analysis
npm run lint

# Build for production
npm run build
```

---

## 📄 Documentation

For full details on pipeline configuration, quality metrics, and test results, see:
- [CI/CD Pipeline Report](CI_CD_PIPELINE_REPORT.md)
- [GitHub Actions Workflow](.github/workflows/ci-cd.yml)
- [Jenkins Pipeline](Jenkinsfile)
