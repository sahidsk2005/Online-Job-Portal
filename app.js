/* =========================================================
   FILE: app.js
   PROJECT: CareerConnect - Core Database & Security Helpers
   ========================================================= */

// 1. Initialize Default Data on First Load
function initDatabase() {
    if (!localStorage.getItem('cc_students')) {
        localStorage.setItem('cc_students', JSON.stringify([]));
    }

    if (!localStorage.getItem('cc_recruiters')) {
        const defaultRecruiters = [
            {
                id: 101,
                recruiterName: "Arjun Mehta",
                companyName: "TechNova Solutions",
                email: "hr@technova.com",
                mobile: "9876543210",
                password: "Password123",
                address: "Sector V, Salt Lake, Kolkata",
                logo: "https://via.placeholder.com/100x100.png?text=TechNova"
            }
        ];
        localStorage.setItem('cc_recruiters', JSON.stringify(defaultRecruiters));
    }

    if (!localStorage.getItem('cc_jobs')) {
        const defaultJobs = [
            {
                id: 201,
                recruiterId: 101,
                title: "Junior Web Developer",
                companyName: "TechNova Solutions",
                category: "IT & Software",
                location: "Kolkata",
                type: "Full-time",
                salary: "₹3,50,000 - ₹5,00,000 / year",
                qualification: "BCA / B.Tech / B.Sc CS",
                skills: "HTML5, CSS3, Bootstrap, JavaScript",
                description: "Build and maintain responsive websites and web portals for clients.",
                deadline: "2026-12-31"
            },
            {
                id: 202,
                recruiterId: 101,
                title: "Frontend Development Intern",
                companyName: "TechNova Solutions",
                category: "IT & Software",
                location: "Bengaluru",
                type: "Internship",
                salary: "₹15,000 / month",
                qualification: "BCA / MCA Pursuing",
                skills: "HTML, CSS, Basic JS, UI Design",
                description: "Great opportunity for freshers to learn modern frontend web design.",
                deadline: "2026-12-15"
            },
            {
                id: 203,
                recruiterId: 101,
                title: "Database Support Executive",
                companyName: "TechNova Solutions",
                category: "Data & Analytics",
                location: "Mumbai",
                type: "Full-time",
                salary: "₹3,00,000 - ₹4,20,000 / year",
                qualification: "BCA / B.Sc IT",
                skills: "SQL, MySQL, Data Entry, Reports",
                description: "Manage relational databases, write basic queries, and maintain data backups.",
                deadline: "2026-12-20"
            }
        ];
        localStorage.setItem('cc_jobs', JSON.stringify(defaultJobs));
    }

    if (!localStorage.getItem('cc_applications')) {
        localStorage.setItem('cc_applications', JSON.stringify([]));
    }
}

// Call initialization immediately when script loads
initDatabase();

// 2. Database Getter & Setter Helper Functions
function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// 3. Show / Hide Password Toggle Function
function togglePassword(inputId, btnElement) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        btnElement.textContent = "Hide";
    } else {
        input.type = "password";
        btnElement.textContent = "Show";
    }
}

// 4. Safe File Upload Validator & Base64 Converter
// Prevents executable scripts (.php, .js, .exe, .sh) and validates size & extension
function validateAndReadFile(fileInput, allowedType, maxSizeKB, callback) {
    const file = fileInput.files[0];
    if (!file) {
        callback("Please select a file to upload.", null);
        return;
    }

    const fileName = file.name.toLowerCase();
    const fileSizeKB = file.size / 1024;

    // Block dangerous script extensions explicitly
    const forbiddenExtensions = ['.php', '.js', '.exe', '.sh', '.bat', '.html', '.htm', '.py', '.jsp'];
    for (let ext of forbiddenExtensions) {
        if (fileName.endsWith(ext)) {
            callback("Security Error: Executable or script files are strictly forbidden!", null);
            fileInput.value = "";
            return;
        }
    }

    // Check file size limit
    if (fileSizeKB > maxSizeKB) {
        callback(`File is too large (${Math.round(fileSizeKB)} KB). Maximum allowed size is ${maxSizeKB} KB.`, null);
        fileInput.value = "";
        return;
    }

    // Check image vs PDF rules
    if (allowedType === 'IMAGE') {
        const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        const validImageExts = ['.jpg', '.jpeg', '.png'];
        const hasValidExt = validImageExts.some(ext => fileName.endsWith(ext));

        if (!validImageTypes.includes(file.type) || !hasValidExt) {
            callback("Invalid Image! Only JPG, JPEG, and PNG images are allowed.", null);
            fileInput.value = "";
            return;
        }
    } else if (allowedType === 'PDF') {
        if (file.type !== 'application/pdf' || !fileName.endsWith('.pdf')) {
            callback("Invalid Resume! Only PDF (.pdf) documents are allowed.", null);
            fileInput.value = "";
            return;
        }
    }

    // Read safe file as DataURL (Base64 string) so it never executes as a script on a server
    const reader = new FileReader();
    reader.onload = function (e) {
        callback(null, {
            name: file.name,
            type: file.type,
            sizeKB: Math.round(fileSizeKB),
            dataUrl: e.target.result
        });
    };
    reader.onerror = function () {
        callback("Error reading file. Please try again.", null);
    };
    reader.readAsDataURL(file);
}

// 5. Escape HTML Helper to prevent XSS issues
function escapeHTML(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}