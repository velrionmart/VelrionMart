/* =====================================================
IMAGE GALLERY & IMAGE PREVIEW
===================================================== */

/* ---------- SELECT ELEMENTS ---------- */

const thumbnails = document.querySelectorAll(".thumb");

const mainImage = document.getElementById("mainProductImage");

const imageModal = document.getElementById("imageModal");

const previewImage = document.getElementById("previewImage");

const closeImage = document.querySelector(".close-image");

/* ---------- THUMBNAIL GALLERY ---------- */

if (thumbnails.length > 0 && mainImage) {

    thumbnails.forEach((thumb) => {

        thumb.addEventListener("click", () => {

            mainImage.src = thumb.src;

            mainImage.alt = thumb.alt;

            thumbnails.forEach((item) => {

                item.classList.remove("active");

            });

            thumb.classList.add("active");

        });

    });

}

/* ---------- OPEN IMAGE PREVIEW ---------- */

if (mainImage && imageModal && previewImage) {

    mainImage.addEventListener("click", () => {

        previewImage.src = mainImage.src;

        previewImage.alt = mainImage.alt;

        imageModal.classList.add("active");

    });

}

/* ---------- CLOSE IMAGE PREVIEW ---------- */

if (closeImage && imageModal) {

    closeImage.addEventListener("click", () => {

        imageModal.classList.remove("active");

    });

}

/* ---------- CLOSE WHEN CLICK OUTSIDE ---------- */

if (imageModal) {

    imageModal.addEventListener("click", (event) => {

        if (event.target === imageModal) {

            imageModal.classList.remove("active");

        }

    });

}

/* ---------- CLOSE USING ESC KEY ---------- */

document.addEventListener("keydown", (event) => {

    if (

        event.key === "Escape" &&

        imageModal.classList.contains("active")

    ) {

        imageModal.classList.remove("active");

    }

});

/* =====================================================
QUANTITY • WISHLIST • SHARE • CART
===================================================== */

/* ---------- SELECT ELEMENTS ---------- */

const qtyInput = document.getElementById("quantity");

const qtyMinus = document.querySelector(".qty-minus");

const qtyPlus = document.querySelector(".qty-plus");

const wishlistBtn = document.querySelector(".wishlist-btn");

const wishlistIcon = document.querySelector(".wishlist-icon");

const shareBtn = document.querySelector(".share-btn");

const addCartBtn = document.querySelector(".add-cart");

const mobileCartBtn = document.querySelector(".mobile-cart");

const toastMessage = document.getElementById("toastMessage");

/* ---------- QUANTITY ---------- */

if (qtyInput && qtyMinus && qtyPlus) {

    qtyMinus.addEventListener("click", () => {

        let qty = parseInt(qtyInput.value);

        if (qty > 1) {

            qtyInput.value = qty - 1;

        }

    });

    qtyPlus.addEventListener("click", () => {

        let qty = parseInt(qtyInput.value);

        qtyInput.value = qty + 1;

    });

}

/* ---------- WISHLIST ---------- */

if (wishlistBtn && wishlistIcon) {

    wishlistBtn.addEventListener("click", () => {

        wishlistBtn.classList.toggle("active");

        if (wishlistBtn.classList.contains("active")) {

            wishlistIcon.textContent = "♥";

        }

        else {

            wishlistIcon.textContent = "♡";

        }

    });

}

/* ---------- SHARE PRODUCT ---------- */

if (shareBtn) {

    shareBtn.addEventListener("click", async () => {

        const shareData = {

            title: document.title,

            text: "Check out this product on Velrion Mart",

            url: window.location.href

        };

        if (navigator.share) {

            try {

                await navigator.share(shareData);

            }

            catch (error) {}

        }

        else {

            navigator.clipboard.writeText(window.location.href);

            showToast("Product link copied");

        }

    });

}

/* ---------- TOAST ---------- */

function showToast(message) {

    if (!toastMessage) return;

    toastMessage.textContent = message;

    toastMessage.classList.add("show");

    setTimeout(() => {

        toastMessage.classList.remove("show");

    }, 2500);

}

/* ---------- ADD TO BAG ---------- */

function addToBag() {

    showToast("Product Added To Bag");

}

if (addCartBtn) {

    addCartBtn.addEventListener("click", addToBag);

}

if (mobileCartBtn) {

    mobileCartBtn.addEventListener("click", addToBag);

}

/* =====================================================
BUY NOW • PRODUCT TABS • READ MORE • PINCODE
===================================================== */

/* ---------- SELECT ELEMENTS ---------- */

const buyNowBtn = document.querySelector(".buy-now");

const mobileBuyBtn = document.querySelector(".mobile-buy");

const tabButtons = document.querySelectorAll(".tab-btn");

const tabContents = document.querySelectorAll(".tab-content");

const readMoreBtn = document.querySelector(".read-more-btn");

const fullDescription = document.querySelector(".full-description");

const pincodeInput = document.getElementById("pincode");

const checkBtn = document.querySelector(".check-btn");

const deliveryText = document.querySelector(".delivery-text");


/* ---------- BUY NOW ---------- */

function buyNowProduct() {

    const productData = {

        name: document.querySelector(".product-details h1")?.textContent.trim(),

        price: document.querySelector(".selling-price")?.textContent.trim(),

        quantity: document.getElementById("quantity")?.value,

        image: document.getElementById("mainProductImage")?.src

    };

    localStorage.setItem(

        "buyNowProduct",

        JSON.stringify(productData)

    );

    window.location.href = "order.html";

}

if (buyNowBtn) {

    buyNowBtn.addEventListener("click", buyNowProduct);

}

if (mobileBuyBtn) {

    mobileBuyBtn.addEventListener("click", buyNowProduct);

}

/* ---------- PRODUCT TABS ---------- */

if (tabButtons.length && tabContents.length) {

    tabButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const tab = button.dataset.tab;

            tabButtons.forEach((btn) => {

                btn.classList.remove("active");

            });

            tabContents.forEach((content) => {

                content.classList.remove("active");

            });

            button.classList.add("active");

            document

                .getElementById(tab)

                .classList.add("active");

        });

    });

}

/* ---------- READ MORE ---------- */

if (readMoreBtn && fullDescription) {

    readMoreBtn.addEventListener("click", () => {

        fullDescription.classList.toggle("show");

        if (

            fullDescription.classList.contains("show")

        ) {

            readMoreBtn.textContent = "Read Less";

        }

        else {

            readMoreBtn.textContent = "Read More";

        }

    });

}

/* ---------- PINCODE CHECK ---------- */

if (checkBtn && pincodeInput && deliveryText) {

    checkBtn.addEventListener("click", () => {

        const pin = pincodeInput.value.trim();

        if (/^[0-9]{6}$/.test(pin)) {

            deliveryText.textContent =

            "✅ Delivery Available at your location.";

            deliveryText.style.color = "#1a7f37";

        }

        else {

            deliveryText.textContent =

            "❌ Please enter a valid 6-digit pincode.";

            deliveryText.style.color = "#d32f2f";

        }

    });

}

/* =====================================================
SCROLL TOP • INITIALIZATION • FUTURE READY
===================================================== */

/* ---------- SELECT ELEMENTS ---------- */

const scrollTopBtn = document.getElementById("scrollTop");

/* ---------- SCROLL TO TOP ---------- */

if (scrollTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            scrollTopBtn.classList.add("show");

        }

        else {

            scrollTopBtn.classList.remove("show");

        }

    });

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ---------- PAGE LOADED ---------- */

window.addEventListener("load", () => {

    console.log("Velrion Mart Product Page Loaded");

});

/* ---------- FUTURE READY FUNCTIONS ---------- */

/* Cart */

function saveCart(product) {

    // Future Cart System

}

/* Wishlist */

function saveWishlist(product) {

    // Future Wishlist System

}

/* Order */

function createOrder(product) {

    // Future Order System

}

/* Payment */

function startPayment(order) {

    // Razorpay / Payment Gateway

}

/* Email */

function sendOrderEmail(order) {

    // EmailJS

}

/* Reviews */

function loadReviews() {

    // Future Review System

}

/* Recently Viewed */

function saveRecentlyViewed(product) {

    // Future Recently Viewed

}

/* Analytics */

function trackProductView() {

    // Google Analytics / Meta Pixel

}

/* ---------- INITIALIZE ---------- */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Product JS Initialized Successfully");

});


