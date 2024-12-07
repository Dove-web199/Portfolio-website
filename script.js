// Typing Effect
const typingText = ["Web Developer", "UI/UX Designer", "Graphic Designer"];
let typingIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (charIndex < typingText[typingIndex].length) {
        typingElement.textContent += typingText[typingIndex][charIndex];
        charIndex++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(() => {
            typingElement.textContent = "";
            charIndex = 0;
            typingIndex = (typingIndex + 1) % typingText.length;
            typeEffect();
        }, 2000);
    }
}

typeEffect();

// Section Scroll Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    },
    { threshold: 0.2 }
);

sections.forEach((section) => {
    observer.observe(section);
});

// Smooth Scroll for Navbar
document.querySelectorAll(".navbar a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    });
});
