console.log("JavaScript is running");
const elbyTag = document.getElementsByClassName("mauchu");
    const colors = ["red", "yellow", "orange"];
    for (let i = 0; i < elbyTag.length; i++) {
        elbyTag[i].style.color = colors[i];}
const elbyId = document.getElementById("id1");
    elbyId.style.color = "purple";
const elbyClass = document.getElementsByClassName("group-class");
    const mau = ["orange", "green", "white"];
    for (let i = 0; i < elbyClass.length; i++) {
        elbyClass[i].style.color = mau[i];}
function showDateTime() {
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
    document.getElementById("clock").innerText = date + " " + time;}
    showDateTime();
    setInterval(showDateTime, 1000);
const togglePassword = () => {
    const pw = document.getElementById("password");
    pw.type = (pw.type === "password") ? "text" : "password";}
function goRegister() {
    window.location.href = "dangky.html";}
    function login(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;
        const savedEmail = localStorage.getItem("email");
        const savedPass = localStorage.getItem("password");
    if (email === savedEmail && pass === savedPass) {
        window.location.href = "test-all.html";}
    else {
        alert("Sai email hoặc mật khẩu!");}
    }
const trangthai = (status) => {
    const img = document.getElementById("bongden");
    if (status === "bat") {
        img.src = "./images/densang.jpg";}
    else {
        img.src = "./images/dentat.jpg";}
    }
const toc = (status) => {
    const img = document.getElementById("thuy");
    if (status === "co") {
        img.src = "./images/thuy.jpg";}
    else {
        img.src = "./images/ditu.jpg";}
    }
function xeploai(input) {
    let diem = parseFloat(input.value);
    let hocluc = input.parentElement.querySelector(".hocluc");

    if (isNaN(diem)) {
        hocluc.innerText = "---";}
    else if (diem < 0 || diem > 10) {
        hocluc.innerText = "❌ Điểm không hợp lệ";
        input.value = "";}
    else if (diem < 5) {
        hocluc.innerText = "Yếu";}
    else if (diem < 6.5) {
        hocluc.innerText = "Trung bình";}
    else if (diem < 8) {
        hocluc.innerText = "Khá";}
    else if (diem < 9) {
        hocluc.innerText = "Giỏi";}
    else {
        hocluc.innerText = "Xuất sắc";}
    }

