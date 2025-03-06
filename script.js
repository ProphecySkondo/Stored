document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".fade-in");
    buttons.forEach((btn, index) => {
        btn.style.animationDelay = `${index * 0.5}s`;  // Delay each button's animation by 0.5 seconds
    });
});
