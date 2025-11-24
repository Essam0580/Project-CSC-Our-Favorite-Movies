// ---------- DROPDOWN ----------
function toggleDropdown() {
	const list = document.getElementById("websiteList");
	list.style.display = (list.style.display === "block") ? "none" : "block";
}

// ---------- TYPEWRITER ----------
const typewriterSections = document.querySelectorAll(
	".Movie_info2, .Movie_info3, .Movie_info4, .Movie_info5, .Movie_info6, .Movie_info7, .Movie_info8, .Movie_info9, .Movie_info10, .Movie_info11, .Movie_info12, .Movie_info13, .Movie_info14, .Movie_info15"
);

typewriterSections.forEach(section => {
	const text = section.querySelector("h5, p");
	if (text) section.classList.add("typewriter");
});

// ---------- SCROLL-TRIGGERED SINGLE SECTION ----------
document.addEventListener('DOMContentLoaded', () => {
	const sections = document.querySelectorAll('section');
	let currentIndex = 0;

	function showSection(index) {
		sections.forEach((sec, i) => {
			if (i === index) {
				sec.classList.add('visible');
				sec.style.position = 'fixed';
				sec.style.top = '0';
				sec.style.left = '0';
				sec.style.width = '100%';
				sec.style.zIndex = '5';
			} else {
				sec.classList.remove('visible');
				sec.style.position = (i === sections.length - 1) ? 'relative' : 'fixed';
				sec.style.top = '0';
				sec.style.left = '0';
				sec.style.width = '100%';
				sec.style.zIndex = '1';
			}
		});
	}

	// Show first section initially
	showSection(0);

	// Handle scroll
	window.addEventListener('scroll', () => {
		const scrollPos = window.scrollY;
		const step = window.innerHeight * 0.8; // amount to scroll per section
		const newIndex = Math.min(Math.floor(scrollPos / step), sections.length - 1);

		if (newIndex !== currentIndex) {
			currentIndex = newIndex;
			showSection(currentIndex);
		}
	});

	// Make body tall enough to allow scrolling
	document.body.style.height = `${sections.length * window.innerHeight}px`;
});
