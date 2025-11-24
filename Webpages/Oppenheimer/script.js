// Dropdown
function toggleDropdown() {
    const list = document.getElementById("websiteList");
    list.style.display = (list.style.display === "block") ? "none" : "block";
}

// Fade in/out section scrolling
const sections = document.querySelectorAll("section");
let currentIndex = 0;

// Show first section initially
sections[currentIndex].classList.add("visible");

window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        // scroll down
        sections[currentIndex].classList.remove("visible");
        sections[currentIndex].classList.add("fade-out");
        currentIndex++;
        sections[currentIndex].classList.remove("fade-out");
        sections[currentIndex].classList.add("visible");
    } else if (e.deltaY < 0 && currentIndex > 0) {
        // scroll up
        sections[currentIndex].classList.remove("visible");
        sections[currentIndex].classList.add("fade-out");
        currentIndex--;
        sections[currentIndex].classList.remove("fade-out");
        sections[currentIndex].classList.add("visible");
    }
});

// Typewriter for text sections
const typewriterSections = document.querySelectorAll(".Movie_info2, .Movie_info3, .Movie_info4, .Movie_info5, .Movie_info6, .Movie_info7, .Movie_info8, .Movie_info9, .Movie_info10, .Movie_info11, .Movie_info12, .Movie_info13, .Movie_info14, .Movie_info15");

typewriterSections.forEach(section => {
    const text = section.querySelector("h5, p");
    if (text) {
        section.classList.add("typewriter");
    }
});
