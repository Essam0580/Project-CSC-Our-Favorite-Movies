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

function showSection(index) {
	sections.forEach((sec, i) => {
		if (i === index) {
			sec.classList.add("visible");
			sec.style.position = 'fixed';
			sec.style.top = '0';
			sec.style.left = '0';
			sec.style.width = '100%';
			sec.style.zIndex = '5';
		} else {
			sec.classList.remove("visible");
			sec.style.position = (i === sections.length - 1) ? 'relative' : 'fixed';
			sec.style.top = '0';
			sec.style.left = '0';
			sec.style.width = '100%';
			sec.style.zIndex = '1';
		}
	});
}

// Show first section
showSection(0);

// Handle scroll
let scrolling = false;
window.addEventListener('scroll', () => {
	if (scrolling) return;
	scrolling = true;

	const scrollPos = window.scrollY;
	const step = window.innerHeight * 0.8;
	const newIndex = Math.min(
		Math.floor(scrollPos / step),
		sections.length - 1
	);

	if (newIndex !== currentIndex) {
		currentIndex = newIndex;
		showSection(currentIndex);
	}

	setTimeout(() => scrolling = false, 100);
});

// Make body tall enough to scroll through all sections
document.body.style.height = `${sections.length * window.innerHeight}px`;
