// ---------- DROPDOWN ----------
function toggleDropdown() {
    const list = document.getElementById("websiteList");
    if (list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
}

// ---------- FADE-IN / FADE-OUT SECTIONS ON SCROLL ----------
const sections = document.querySelectorAll("section");
let lastVisibleIndex = -1;

function handleScroll() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 1.5 && rect.bottom > 50) {
            if (lastVisibleIndex !== index) {
                // fade out previous
                if (lastVisibleIndex >= 0) {
                    sections[lastVisibleIndex].classList.remove("visible");
                    sections[lastVisibleIndex].classList.add("fade-out");
                }
                // fade in current
                section.classList.remove("fade-out");
                section.classList.add("visible");
                lastVisibleIndex = index;
            }
        }
    });
}

window.addEventListener("scroll", handleScroll);

// ---------- TYPEWRITER EFFECT ----------
const typewriterSections = document.querySelectorAll(".Movie_info2, .Movie_info3, .Movie_info4, .Movie_info5, .Movie_info6, .Movie_info7, .Movie_info8, .Movie_info9, .Movie_info10, .Movie_info11, .Movie_info12, .Movie_info13, .Movie_info14, .Movie_info15");

typewriterSections.forEach(section => {
    const text = section.querySelector("h5, p");
    if(text) {
        section.classList.add("typewriter");
    }
});

