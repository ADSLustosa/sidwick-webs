// navbar.js

const menuItems = document.querySelectorAll("nav ul li");
const languageButtons = document.querySelectorAll(".language-button");

window.addEventListener("load", () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: "instant" });
    }
});

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(li => li.classList.remove("active"));
        item.classList.add("active");
    });
});

languageButtons.forEach(button => {
    button.addEventListener("click", () => {
        languageButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");

        const lang = button.dataset.lang;

        if (lang === "es" && typeof window.applyTranslations === "function") {
            window.applyTranslations();
        } else if (lang === "en" && typeof window.resetToEnglish === "function") {
            window.resetToEnglish();
        }
    });
});
