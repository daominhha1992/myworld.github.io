"use strict";
// @ts-nocheck
// Webdangky.ts - Login / Signup logic
var _a, _b, _c, _d;
// Lấy danh sách users từ localStorage
let users = JSON.parse(localStorage.getItem("users") || "[]");
// Form elements
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
// Toggle password
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input)
        input.type = input.type === "password" ? "text" : "password";
}
(_a = document.getElementById("togglePass")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => togglePassword("password"));
(_b = document.getElementById("toggleLoginPass")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => togglePassword("loginPassword"));
// Chuyển form login/signup
(_c = document.getElementById("toLogin")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", (e) => {
    e.preventDefault();
    if (signupForm)
        signupForm.style.display = "none";
    if (loginForm)
        loginForm.style.display = "block";
});
(_d = document.getElementById("toSignup")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", (e) => {
    e.preventDefault();
    if (loginForm)
        loginForm.style.display = "none";
    if (signupForm)
        signupForm.style.display = "block";
});
// Signup form submit
signupForm === null || signupForm === void 0 ? void 0 : signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
        alert("Vui lòng nhập đủ thông tin");
        return;
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
    // Chuyển sang login
    if (signupForm)
        signupForm.style.display = "none";
    if (loginForm)
        loginForm.style.display = "block";
});
// Login form submit
loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const loggedUser = users.find((u) => u.email === email && u.password === password);
    if (loggedUser) {
        localStorage.setItem("currentUser", JSON.stringify(loggedUser));
        window.location.href = "./index.html"; // Chuyển sang trang chủ
    }
    else {
        alert("Email hoặc password không đúng!");
    }
});
// Logout function (gắn global để HTML gọi được)
window.logout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "./mylogin.html"; // Trang login
};
//# sourceMappingURL=webdangky.js.map