document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.querySelector(".scroll-top");

    if (!scrollTopBtn) {
        console.error("Scroll-top button not found!");
        return;
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("scroll-top--visible");
        } else {
            scrollTopBtn.classList.remove("scroll-top--visible");
        }
    });
});
