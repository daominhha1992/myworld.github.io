"use strict";
// ===== BACKGROUND =====
const images = [
    "./img/bobien.jpg", "./img/bautroi.jpg", "./img/langque.jpg",
    "./img/hoahuongduong.jpg", "./img/songnuoc.jpg", "./img/thacnuoc.jpg"
];
let bgIndex = 0;
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
let showBg1 = true;
bg1.style.backgroundImage = `url(${images[0]})`;
bg1.style.opacity = '1';
bg2.style.opacity = '0';
function changeBackground() {
    bgIndex = (bgIndex + 1) % images.length;
    const nextBg = showBg1 ? bg2 : bg1;
    const currBg = showBg1 ? bg1 : bg2;
    nextBg.style.backgroundImage = `url(${images[bgIndex]})`;
    nextBg.style.opacity = '1';
    currBg.style.opacity = '0';
    showBg1 = !showBg1;
}
setInterval(changeBackground, 10000);
// ===== MENU =====
document.addEventListener("click", (e) => {
    const menu = document.querySelector(".menu-box");
    if ((menu === null || menu === void 0 ? void 0 : menu.open) && !e.target.closest(".menu-box"))
        menu.removeAttribute("open");
});
// ===== 3D CARDS =====
const scene = document.getElementById("scene");
const imageList = [
    'bautroi.jpg', 'bobien.jpg', 'bosong.jpg', 'cogai.jpeg', 'colau.jpg',
    'haiau.jpg', 'hoahuongduong.jpg', 'langque.jpg', 'ngoinha.jpg', 'nui.jpg',
    'songnuoc.jpg', 'thacnuoc.jpg', 'thanhpho.jpg', 'thuyenbuom.jpg', 'thuyenvabien.jpeg'
];
const total = imageList.length;
const radius = 500;
const angleStep = 360 / total;
let currentIndex = 0;
let rotationY = 0;
let isRotating = false;
const TRANSITION_TIME = 500;
// Tạo scene
scene.innerHTML = "";
imageList.forEach((img, i) => {
    const card = document.createElement("div");
    card.className = "card";
    const inner = document.createElement("div");
    inner.className = "card-inner";
    const front = document.createElement("div");
    front.className = "card-face front";
    front.innerHTML = `<img src="./anhthiennhien/${img}" alt="">`;
    const back = document.createElement("div");
    back.className = "card-face back";
    back.innerHTML = `<img src="./anhthiennhien/${img}" alt="">`;
    inner.append(front, back);
    card.appendChild(inner);
    card.style.transform = `rotateY(${angleStep * i}deg) translateZ(${radius}px)`;
    scene.appendChild(card);
});
// ===== XOAY ĐẾN ẢNH CHÍNH DIỆN =====
function rotateTo(index) {
    if (isRotating)
        return;
    isRotating = true;
    rotationY = -angleStep * index;
    scene.style.transform = `rotateX(0deg) rotateY(${rotationY}deg)`;
    currentIndex = index;
    setTimeout(() => { isRotating = false; }, TRANSITION_TIME);
}
// ===== NÚT ĐIỀU HƯỚNG =====
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
navLeft.addEventListener('click', () => { if (!isDragging)
    rotateTo((currentIndex - 1 + total) % total); });
navRight.addEventListener('click', () => { if (!isDragging)
    rotateTo((currentIndex + 1) % total); });
// ===== XOAY BẰNG CHUỘT =====
let isDragging = false;
let startX = 0;
let startRotation = 0;
let currentRotation = 0;
scene.style.transform = `rotateX(0deg) rotateY(0deg)`;
scene.style.cursor = "grab";
scene.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startRotation = rotationY;
    scene.style.cursor = "grabbing";
    e.preventDefault();
});
window.addEventListener("mousemove", (e) => {
    if (!isDragging)
        return;
    const delta = e.clientX - startX;
    currentRotation = startRotation + delta * 0.3;
    scene.style.transform = `rotateX(0deg) rotateY(${currentRotation}deg)`;
});
window.addEventListener("mouseup", () => {
    if (!isDragging)
        return;
    isDragging = false;
    rotationY = currentRotation;
    scene.style.cursor = "grab";
});
// ===== LOGOUT =====
window.logout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "./login.html";
};
//# sourceMappingURL=trangchu.js.map