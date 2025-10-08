const errorMsg = document.getElementById("error-msg");
document.getElementById("showpassword").addEventListener("change", function () {
    const pw1 = document.getElementById("password");
    const pw2 = document.getElementById("confirmpassword");
    const t = this.checked ? "text" : "password";
    pw1.type = t; pw2.type = t;});
document.getElementById("password").addEventListener("input", () => { errorMsg.textContent = ""; });
document.getElementById("confirmpassword").addEventListener("input", () => { errorMsg.textContent = ""; });
    function goLogin() {
        window.location.href = "./HocCode/index.html";}
    function register(event) {
        event.preventDefault();
        errorMsg.textContent = "";

        const id = document.getElementById("email").value.trim();
        const pass = document.getElementById("password").value;
        const confirmPass = document.getElementById("confirmpassword").value;

        if (pass !== confirmPass) {
            errorMsg.textContent = "❌ Mật khẩu không khớp!";
            return;}
        localStorage.setItem("email", id);
        localStorage.setItem("password", pass);

        alert("Đăng ký thành công! Mời bạn đăng nhập.");
        window.location.href = "index.html";}