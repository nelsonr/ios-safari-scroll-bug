function scrollToTop (el) {
    el.scroll({
        top: 0,
        behavior: "instant"
    });
}

function showScreen (screenId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach((screen) => {
        if (screen.id == screenId.replace("#", "")) {
            screen.classList.remove("hidden");
        } else {
            screen.classList.add("hidden");
        }
    });
}

function handleNavClick (link) {
    const scrollEl = document.querySelector("main");

    link.addEventListener("click", (ev) => {
        ev.preventDefault();

        scrollToTop(scrollEl);
        showScreen(link.getAttribute("href"));
    })
}

function navigation () {
    const nav = document.querySelector("nav");
    const links = nav.querySelectorAll("a");

    links.forEach((link) => handleNavClick(link));
}

document.addEventListener("DOMContentLoaded", navigation);
