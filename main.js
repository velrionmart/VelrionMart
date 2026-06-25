document.addEventListener("DOMContentLoaded", function () {

const sidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("menuOverlay");
const menuBtn = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", function () {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

// close function for ✕ button
window.closeMenu = function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
};

overlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

});
