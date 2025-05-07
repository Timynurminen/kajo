document.addEventListener("DOMContentLoaded", function () {
    const infoButton = document.querySelector(".info-button");
    const hoverBox = document.querySelector(".site-hover-box");

    /* Only toggle on mobile devices */
    infoButton.addEventListener("click", function (event) {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            event.preventDefault();
            hoverBox.classList.toggle("visible");
        }
    });

    /*Close dropdown when clicking outside of it*/
    document.addEventListener("click", function (event) {
        const isClickInside = infoButton.contains(event.target) || hoverBox.contains(event.target);
        if (!isClickInside && hoverBox.classList.contains("visible")) {
            hoverBox.classList.remove("visible");
        }
    });
});
