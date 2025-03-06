document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".fade-in");
    buttons.forEach((btn, index) => {
        btn.style.animationDelay = `${index * 0.3}s`;
    });
});
