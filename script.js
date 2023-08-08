function isSmoothScroll () {
    const input = document.getElementById("use-smooth-scroll");

    return input.checked;
}

function scrollToTop () {
    const scrollContainer = document.querySelector("main");
    const scrollableContent = document.querySelector(".content");

    if (isSmoothScroll()) {
        scrollableContent.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    } else {
        scrollContainer.style = "overflow: hidden;"
        scrollContainer.scrollTop = 0;
        scrollContainer.style = null;
    }
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
    link.addEventListener("click", (ev) => {
        ev.preventDefault();

        showScreen(link.getAttribute("href"))
        scrollToTop();
    });
}

function navigation () {
    const nav = document.querySelector("nav");
    const links = nav.querySelectorAll("a");

    links.forEach((link) => handleNavClick(link));
}

document.addEventListener("DOMContentLoaded", navigation);
