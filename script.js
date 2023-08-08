function isSmoothScroll () {
    const input = document.getElementById("use-smooth-scroll");

    return input.checked;
}

function scrollToTop (el) {
    el.scrollIntoView({
        block: "start",
        behavior: isSmoothScroll() ? "smooth" : "instant"
    });
}

function showScreen (screenId) {
    const screens = document.querySelectorAll(".screen");
    const content = document.querySelectorAll(".content");

    screens.forEach((screen) => {
        if (screen.id == screenId.replace("#", "")) {
            screen.classList.remove("hidden");
        } else {
            screen.classList.add("hidden");
        }
    });
}

function handleNavClick (link) {
    const scrollEl = document.querySelector(".content");

    link.addEventListener("click", (ev) => {
        ev.preventDefault();

        showScreen(link.getAttribute("href"));
        scrollToTop(scrollEl);
    });
}

function navigation () {
    const nav = document.querySelector("nav");
    const links = nav.querySelectorAll("a");

    links.forEach((link) => handleNavClick(link));
}

document.addEventListener("DOMContentLoaded", navigation);
