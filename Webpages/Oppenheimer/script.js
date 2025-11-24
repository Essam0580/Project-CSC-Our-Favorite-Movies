// Dropdown
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

// ---------- OPTIONAL FADE-IN ON SCROLL ----------
const sections = document.querySelectorAll("section");

function handleScroll() {
	sections.forEach(section => {
		const rect = section.getBoundingClientRect();
		if (rect.top < window.innerHeight * 0.8) {
			section.classList.add("visible");
			section.classList.remove("fade-out");
		} else {
			section.classList.remove("visible");
			section.classList.add("fade-out");
		}
	});
}

// Trigger on scroll and on page load
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
