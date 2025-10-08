"use strict";

// Hàm Scaling (BỔ SUNG - Bạn cần thêm hàm này cho trang login)
function scaleApp() {
    const app = document.getElementById('app');
    if (!app) return; 

    const scale = Math.min(window.innerWidth / 375, window.innerHeight / 667);
    app.style.transform = `scale(${scale})`;
    
    // Đặt ở giữa màn hình
    const translateX = (window.innerWidth - 375 * scale) / 2;
    const translateY = (window.innerHeight - 667 * scale) / 2;
    app.style.transform += ` translate(${translateX / scale}px, ${translateY / scale}px)`;
}
window.addEventListener('resize', scaleApp);
scaleApp();

// Logic Đăng ký / Đăng nhập
document.addEventListener("DOMContentLoaded", () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Lấy các phần tử form
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    // Lấy các input
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginEmailInput = document.getElementById("loginEmail");
    const loginPasswordInput = document.getElementById("loginPassword");
    
    // Lấy checkbox và nút
    const agreeCheck = document.getElementById("agree");
    const signupBtn = document.getElementById("signupBtn");

    // Kiểm tra nút và input có tồn tại không
    if (!signupForm || !loginForm || !emailInput || !passwordInput || !loginEmailInput || !loginPasswordInput || !agreeCheck || !signupBtn) {
        console.error("Không tìm thấy một hoặc nhiều phần tử Form/Input. Kiểm tra lại ID trong HTML.");
        return; 
    }

    // ===== Kích hoạt nút đăng ký =====
    signupBtn.disabled = true;
    agreeCheck.addEventListener("change", () => {
        signupBtn.disabled = !agreeCheck.checked;
    });

    // ===== Toggle password visibility =====
    function togglePassword(input) {
        input.type = input.type === "password" ? "text" : "password";
    }
    
    document.getElementById("togglePass")?.addEventListener("click", () => togglePassword(passwordInput));
    document.getElementById("toggleLoginPass")?.addEventListener("click", () => togglePassword(loginPasswordInput));

    // ===== Chuyển đổi Form (Login/Signup) =====
    document.getElementById("toLogin")?.addEventListener("click", e => {
        e.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    document.getElementById("toSignup")?.addEventListener("click", e => {
        e.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

    // ===== Đăng ký (Signup) =====
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

    // ===== Đăng nhập (Login) =====
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
        } else {
            alert("Email hoặc password không đúng!");
        }
    });

    // ===== Logout (Dùng cho trang khác) =====
    window.logout = () => {
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    };
});
