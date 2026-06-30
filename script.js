// =====================================
// MOBILE SIDE MENU
// =====================================

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");

function openMenu() {
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMenuFunction() {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}

// Open Menu
menuBtn.addEventListener("click", openMenu);

// Close Menu Button
closeMenu.addEventListener("click", closeMenuFunction);

// Close on Overlay Click
menuOverlay.addEventListener("click", closeMenuFunction);

// Close on ESC Key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeMenuFunction();
    }
});
