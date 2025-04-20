document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    // Only on small screens (e.g max 768px)
    const isSmallScreen =  window.matchMedia("(max-width: 768px)").matches;

    if (isSmallScreen && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver (
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            {
                threshold: 0.3, //30% of the card is visible
            }
        );

        cards.forEach((card) => observer.observe(card));
    }
});