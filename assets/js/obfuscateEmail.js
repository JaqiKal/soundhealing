document.addEventListener("DOMContentLoaded", function () {
    const emailLinks = document.querySelectorAll('[data-user][data-domain]');

        emailLinks.forEach(link => {
            const user = link.getAttribute("data-user");
            const domain = link.getAttribute("data-domain");
            const email = `${user}@${domain}`;

            link.setAttribute("href", `mailto:${email}`);
        })

});