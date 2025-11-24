// Dropdown
function toggleDropdown() {
	const list = document.getElementById("websiteList");
	list.style.display = (list.style.display === "block") ? "none" : "block";
}

// Typewriter
const typewriterSections = document.querySelectorAll(
	".Movie_info2, .Movie_info3, .Movie_info4, .Movie_info5, .Movie_info6, .Movie_info7, .Movie_info8, .Movie_info9, .Movie_info10, .Movie_info11, .Movie_info12, .Movie_info13, .Movie_info14, .Movie_info15"
);

typewriterSections.forEach(section => {
	const text = section.querySelector("h5, p");
	if (text) section.classList.add("typewriter");
});

// ---------- Scroll-triggered single-section view ----------
const sections = document.querySelectorAll("section");
let currentIndex = 0;

// Initialize: show only first section
sections.forEach((sec, i) => {
	sec.style.position = "absolute";
	sec.style.top = "0";
	sec.style.left = "0";
	sec.style.width = "100%";
	sec.style.transition = "opacity 0.8s ease, transform 0.8s ease";
	sec.style.opacity = i === 0 ? "1" : "0";
	sec.style.zIndex = i === 0 ? "5" : "1";
});

// Show section function
function showSection(index) {
	sections.forEach((sec, i) => {
		if (i === index) {
			sec.style.opacity = "1";
			sec.style.transform = "translateY(0)";
			sec.style.zIndex = "5";
		} else {
			sec.style.opacity = "0";
			sec.style.transform = "translateY(50px)";
			sec.style.zIndex = "1";
		}
	});
}

// Handle scroll
window.addEventListener("scroll", () => {
	const scrollPos = window.scrollY;
	const step = window.innerHeight * 0.8; // how much scroll to switch
	const newIndex = Math.min(Math.floor(scrollPos / step), sections.length - 1);

	if (newIndex !== currentIndex) {
		currentIndex = newIndex;
		showSection(currentIndex);
	}
});

// Make body tall enough to scroll through all sections
document.body.style.height = `${sections.length * window.innerHeight}px`;
