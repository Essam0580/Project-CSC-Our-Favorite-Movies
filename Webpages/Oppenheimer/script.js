// DROPDOWN
function toggleDropdown() {
    const list = document.getElementById("websiteList");
    list.style.display = (list.style.display === "block") ? "none" : "block";
}

// SECTIONS SCROLL ANIMATION
const sections = document.querySelectorAll("section");
let currentIndex = 0;
let scrolling = false;

// Show first section
sections[currentIndex].classList.add("visible");

// Scroll handler with threshold
window.addEventListener("wheel", (e) => {
    if (scrolling) return;
    if (e.deltaY > 50 && currentIndex < sections.length - 1) {
        scrolling = true;
        sections[currentIndex].classList.remove("visible");
        sections[currentIndex].classList.add("fade-out");

        currentIndex++;
        sections[currentIndex].classList.remove("fade-out");
        sections[currentIndex].classList.add("visible");

        setTimeout(() => { scrolling = false; }, 1200);
    } else if (e.deltaY < -50 && currentIndex > 0) {
        scrolling = true;
        sections[currentIndex].classList.remove("visible");
        sections[currentIndex].classList.add("fade-out");

        currentIndex--;
        sections[currentIndex].classList.remove("fade-out");
        sections[currentIndex].classList.add("visible");

        setTimeout(() => { scrolling = false; }, 1200);
    }
});


// TYPEWRITER
const typewriterSections = document.querySelectorAll(
    ".Movie_info2, .Movie_info3, .Movie_info4, .Movie_info5, .Movie_info6, .Movie_info7, .Movie_info8, .Movie_info9, .Movie_info10, .Movie_info11, .Movie_info12, .Movie_info13, .Movie_info14, .Movie_info15"
);

typewriterSections.forEach(section => {
    const text = section.querySelector("h5, p");
    if (text) {
        section.classList.add("typewriter");
    }
});
