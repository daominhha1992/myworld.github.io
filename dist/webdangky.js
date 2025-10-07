"use strict";
document.addEventListener("DOMContentLoaded", () => {
    var _a, _b, _c, _d;
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // Form elements
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    // Inputs
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginEmailInput = document.getElementById("loginEmail");
    const loginPasswordInput = document.getElementById("loginPassword");
    // Checkbox và signup button
    const agreeCheck = document.getElementById("agree");
    const signupBtn = document.getElementById("signupBtn");
    // ===== Enable/Disable signup button =====
    signupBtn.disabled = true; // mặc định
    agreeCheck.addEventListener("change", () => {
        signupBtn.disabled = !agreeCheck.checked;
    });
    // ===== Toggle password =====
    function togglePassword(input) {
        input.type = input.type === "password" ? "text" : "password";
    }
    (_a = document.getElementById("togglePass")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => togglePassword(passwordInput));
    (_b = document.getElementById("toggleLoginPass")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => togglePassword(loginPasswordInput));
    // ===== Switch form =====
    (_c = document.getElementById("toLogin")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", e => {
        e.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });
    (_d = document.getElementById("toSignup")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", e => {
        e.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });
    // ===== Signup =====
    signupForm.addEventListener("submit", e => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        if (!email || !password) {
            alert("Vui lòng nhập đủ thông tin");
            return;
        }
        if (users.some(u => u.email === email)) {
            alert("Email đã tồn tại!");
            return;
        }
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng ký thành công!");
        // Chuyển sang login
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });
    // ===== Login =====
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        const email = loginEmailInput.value.trim();
        const password = loginPasswordInput.value.trim();
        if (!email || !password) {
            alert("Vui lòng nhập đủ thông tin");
            return;
        }
        const loggedUser = users.find(u => u.email === email && u.password === password);
        if (loggedUser) {
            localStorage.setItem("currentUser", JSON.stringify(loggedUser));
            window.location.href = "trangchu.html";
        }
        else {
            alert("Email hoặc password không đúng!");
        }
    });
    // ===== Logout =====
    window.logout = () => {
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    };
});
//# sourceMappingURL=webdangky.js.map
