// =============================
// PRODUCT IMAGE GALLERY
// =============================

const thumbnails = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainProductImage");

thumbnails.forEach((thumb) => {

    thumb.addEventListener("click", () => {

        mainImage.src = thumb.src;

        thumbnails.forEach((item) => {
            item.classList.remove("active");
        });

        thumb.classList.add("active");

    });

});

// =============================
// SHARE PRODUCT
// =============================

const shareBtn = document.querySelector(".share-btn");

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
            } catch (err) {}

        } else {

            navigator.clipboard.writeText(window.location.href);

            alert("Product link copied successfully.");

        }

    });

}
