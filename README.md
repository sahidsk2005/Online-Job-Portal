# CareerConnect – Online Job Portal

<p align="center">
  <strong>A student–recruiter job portal built as a college semester project</strong>
</p>

<p align="center">
  <a href="https://online-job-portal-ten.vercel.app/">Live Demo</a> ·
  <a href="https://github.com/sahidsk2005/Online-Job-Portal">GitHub Repository</a>
</p>

---

## 📌 Project Overview

**CareerConnect** is a front-end online job portal designed to connect job-seeking students with recruiters. It provides separate experiences for students and recruiters. Students can browse opportunities, submit applications, maintain their profiles and resumes, while recruiters can publish job openings and review applications.

The project is built with HTML5, CSS3, Bootstrap 5 and JavaScript. It uses the browser's **localStorage** to store application data.

## ✨ Features

### 👨‍🎓 Student Portal
- Student registration and login.
- Student dashboard.
- Browse available job opportunities.
- Search and filter jobs by category.
- Apply for available jobs.
- View submitted applications and their current status.
- View and update profile information.
- Upload or update a PDF resume.
- Upload or update a JPG/PNG profile photo.
- View/download the uploaded resume.
- Download an offer letter when an application is accepted.

### 🏢 Recruiter Portal
- Recruiter registration and login.
- Recruiter dashboard.
- Create and publish new job postings.
- Manage and delete posted jobs.
- View applications received for the recruiter's jobs.
- Review applicant details, skills and resumes.
- Accept or reject applications.
- View/manage company profile information.

### 🔐 File Validation
- Resume uploads are restricted to PDF files.
- Profile photos are restricted to JPG/JPEG/PNG files.
- File size limits are checked in the browser.
- Executable and script file extensions are rejected by the upload helper.

> **Important:** These are client-side checks in a browser-based academic project. They are not a replacement for server-side validation and secure file storage in a production system.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling and responsive layout |
| Bootstrap 5 | UI components and responsive design |
| JavaScript (ES6) | Application logic and interactivity |
| Browser localStorage | Stores student, recruiter, job and application data |
| Browser sessionStorage | Stores the active login session |
| Vercel | Live demo hosting |

## 🧭 How the Portal Works

### Student workflow
1. A student creates an account or logs in.
2. The student browses and filters job listings.
3. The student submits an application.
4. The student checks application status from **My Applications**.
5. If accepted, the student can download the generated offer letter.

### Recruiter workflow
1. A recruiter registers or logs in.
2. The recruiter creates a company profile and posts job openings.
3. The recruiter reviews applications for their jobs.
4. The recruiter accepts or rejects applicants.
5. The student can see the updated status in their dashboard.

## 📂 Project Structure

```text
Online-Job-Portal/
│
├── README.md
├── index.html                 # Main landing page
├── app.js                     # Shared data and helper functions
├── style.css                  # Shared styling
│
├── student-login.html         # Student login
├── student-register.html      # Student registration
├── student-dashboard.html     # Student dashboard
│
├── recruiter-login.html       # Recruiter login
├── recruiter-register.html    # Recruiter registration
└── recruiter-dashboard.html   # Recruiter dashboard
```

## 🚀 Run the Project Locally

This is a static HTML/CSS/JavaScript project. It does not require PHP, MySQL, Node.js or a separate backend server for the current localStorage-based version.

### Option 1: Open directly
1. Download or clone this repository.
2. Extract the project if downloaded as a ZIP.
3. Open the project folder.
4. Double-click `index.html` to open it in a browser.

### Option 2: Use VS Code Live Server
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## 🌐 Live Demo

[https://online-job-portal-ten.vercel.app/](https://online-job-portal-ten.vercel.app/)

## 💾 Data Storage – Important

The current version uses browser storage rather than a central database:

- `localStorage` stores student accounts, recruiter accounts, job listings and applications.
- `sessionStorage` keeps track of the currently logged-in session.

This means data is stored in the browser profile on the device where the website is being used. It is **not shared automatically between different users, devices or browsers**. Clearing browser site data can also remove saved project data.

For a real multi-user job portal, the next development step would be to add a backend API, a database such as MySQL, server-side authentication and secure file storage.

## 🖼️ Screenshots

Add screenshots of your actual running project to a folder named `screenshots/`, then use these suggested filenames:

```text
screenshots/
├── home-page.png
├── student-login.png
├── student-dashboard.png
├── recruiter-login.png
└── recruiter-dashboard.png
```

Example Markdown image:

```markdown
![CareerConnect Home Page](screenshots/home-page.png)
```

## 🎓 Project Purpose

CareerConnect was developed as a college semester project to practise the fundamentals of front-end web development, including:

- Structuring web pages with HTML.
- Styling and responsive layouts with CSS and Bootstrap.
- JavaScript functions, events and DOM manipulation.
- Form handling and validation.
- Browser storage using localStorage and sessionStorage.
- Building separate workflows for students and recruiters.

## 🔮 Possible Future Improvements

- Add a PHP or Node.js backend.
- Integrate a MySQL database for shared, persistent data.
- Implement server-side authentication and password hashing.
- Store resumes and profile images securely on a server.
- Add email notifications for application updates.
- Add advanced job search and filtering.
- Add an administrator dashboard.
- Add automated testing and stronger security controls.

## 👨‍💻 Developer

**Sahid SK**

- GitHub: [@sahidsk2005](https://github.com/sahidsk2005)
- Repository: [Online-Job-Portal](https://github.com/sahidsk2005/Online-Job-Portal)

## 📄 License

No license is currently specified in this repository. Please contact the repository owner before reusing or redistributing the project.

---

<p align="center">
  <strong>CareerConnect – Connecting Students with Opportunities</strong>
</p>
