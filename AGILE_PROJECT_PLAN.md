# 📋 Agile Project Plan — Digital Library Management System
**Course:** Agile Software Development (B.Tech IT, PCCOE)  
**Assessment:** Formative Assessment 2 (FA2) — Skill-Based Activity  
**Project Chosen:** Library Management System  

---

## 1. 🎯 Project Overview & Objective

The **Digital Library Management System** is a responsive web application designed for academic libraries to streamline book cataloging, inventory updates, and member authentication. The development is organized using the **Agile Scrum** framework to deliver iterative, tested, and automatically deployed increments of software through a modern CI/CD pipeline.

---

## 2. 📝 User Stories (Product Backlog)

Each user story is structured using the standard Agile template:  
> **"As a [role], I want [action], so that [business value]."**

| Story ID | User Story Title | User Story Description | Priority | Story Points |
| :---: | :--- | :--- | :---: | :---: |
| **US-01** | **User Login & Authentication** | *As a* library member or librarian, *I want to* securely log into the system with my credentials, *so that* I can access restricted library management functions. | **High** | **3** |
| **US-02** | **Add New Book to Collection** | *As a* librarian, *I want to* enter and validate book details (title, author, category), *so that* new books are cataloged and made discoverable. | **High** | **5** |
| **US-03** | **Update Book Information** | *As a* librarian, *I want to* edit existing book metadata, *so that* catalog records remain accurate and up-to-date. | **Medium** | **3** |
| **US-04** | **Input Data Validation** | *As a* system administrator, *I want* input validation on both client and business logic layers, *so that* erroneous or incomplete data is rejected before submission. | **High** | **3** |
| **US-05** | **Automated CI/CD Quality Gate** | *As a* DevOps/Agile team member, *I want* every commit and pull request to trigger automated build, testing, and quality checks, *so that* only bug-free code is deployed to production. | **High** | **5** |

---

## 3. ⏱️ Sprint Planning (Sprint 1)

### Sprint Details
- **Sprint Name:** Sprint 1 — Core Inventory & CI/CD Pipeline Setup
- **Sprint Duration:** 2 Weeks (10 working days)
- **Sprint Goal:** Deliver working user login, book addition, and book update modules backed by a fully automated CI/CD pipeline (`GitHub → Build → Automated Testing → Code Quality Check → Deployment`).

### Team Roles & Responsibilities
- **Product Owner:** Defines requirements, prioritizes backlog, and reviews acceptance criteria.
- **Scrum Master:** Facilitates daily stand-ups, removes impediments, and ensures DoD adherence.
- **Development & QA Team:** Implements React UI, writes Vitest unit tests, configures ESLint, and establishes the CI/CD pipeline.

### Sprint 1 Backlog & Estimation
| Task ID | Task Description | Assigned User Story | Estimated Hours | Status |
| :---: | :--- | :---: | :---: | :---: |
| **T-101** | Create React frontend components (`Login`, `AddBook`, `UpdateBook`) | US-01, US-02, US-03 | 12 hrs | **Done** |
| **T-102** | Implement validation helper modules (`bookValidation.js`, `loginValidation.js`) | US-04 | 6 hrs | **Done** |
| **T-103** | Write automated unit tests using Vitest (`bookValidation.test.js`, `loginValidation.test.js`) | US-04 | 8 hrs | **Done** |
| **T-104** | Configure ESLint rules and fix syntax/quality issues | US-05 | 4 hrs | **Done** |
| **T-105** | Implement GitHub Actions workflow (`.github/workflows/ci-cd.yml`) with all 4 stages | US-05 | 8 hrs | **Done** |
| **T-106** | Implement declarative `Jenkinsfile` for multi-platform CI/CD demonstration | US-05 | 6 hrs | **Done** |

---

## 4. ✅ Definition of Done (DoD)

A user story or feature is considered **"Done"** only when all the following criteria are fulfilled:

1. **Coding Standards:** Code is clean, modular, and adheres to ECMAScript module conventions without unresolved syntax errors.
2. **Static Analysis & Linting:** ESLint executes with **0 errors and 0 warnings**.
3. **Automated Testing:** All unit tests in Vitest pass successfully (**100% pass rate**).
4. **Code Coverage:** Code coverage for business validation logic meets or exceeds **80%** (achieved: **100%**).
5. **Successful Build:** Vite production build compiles successfully and outputs optimized assets into `frontend/dist/`.
6. **Automated CI/CD Trigger:** Pipeline runs automatically on GitHub upon every `git push` or `pull_request`.
7. **Successful Deployment:** Deployment stage packages and deploys the production distribution bundle.
8. **Documentation:** User stories, acceptance criteria, and CI/CD reports are updated and committed to the repository.

---

## 5. 🔍 Acceptance Criteria (Given-When-Then Format)

### Acceptance Criteria for US-01: User Login & Authentication
```gherkin
Scenario 1: Successful login with valid credentials
  Given the user is on the login page
  When they enter username "admin" and password "123456"
  And click on the "Login" button
  Then the system should display "Login successful"
  And no error message should be visible.

Scenario 2: Validation failure on empty username
  Given the user is on the login page
  When they leave the username field blank
  And enter a password "123456"
  And click on the "Login" button
  Then the system should display error "Username is required".

Scenario 3: Validation failure on short password
  Given the user is on the login page
  When they enter username "admin"
  And enter a password with less than 6 characters (e.g., "123")
  And click on the "Login" button
  Then the system should display error "Password must be at least 6 characters".
```

---

### Acceptance Criteria for US-02: Add New Book to Collection
```gherkin
Scenario 1: Successful book submission with complete details
  Given the librarian is on the "Add New Book" form
  When they enter title "Java Programming", author "James Gosling", and category "Programming"
  And click on the "Save Book" button
  Then the system should display "Book added successfully!"
  And the input fields should be cleared for the next entry.

Scenario 2: Validation failure on missing book title
  Given the librarian is on the "Add New Book" form
  When they leave the title blank
  And enter author "James Gosling" and category "Programming"
  And click on "Save Book"
  Then the system should prevent submission and display "Book title is required".

Scenario 3: Validation failure on missing author
  Given the librarian is on the "Add New Book" form
  When they enter title "Java Programming", leave author blank, and select category "Programming"
  And click on "Save Book"
  Then the system should prevent submission and display "Author is required".

Scenario 4: Validation failure on missing category
  Given the librarian is on the "Add New Book" form
  When they enter title "Java Programming", author "James Gosling", and leave category unselected
  And click on "Save Book"
  Then the system should prevent submission and display "Category is required".
```
