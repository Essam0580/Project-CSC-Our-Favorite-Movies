// DROPDOWN
function toggleDropdown() {
    const list = document.getElementById("websiteList");
    list.style.display = (list.style.display === "block") ? "none" : "block";
}


// FULL PAGE SECTION SCROLL
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll("section");
    let currentIndex = 0;
    let isScrolling = false;

    // Show first section
    sections.forEach((sec, i) => {
        sec.style.position = "fixed";
        sec.style.top = "0";
        sec.style.left = "0";
        sec.style.width = "100%";
        sec.style.opacity = i === 0 ? "1" : "0";
        sec.style.zIndex = i === 0 ? "10" : "1";
    });

    function showSection(index) {
        sections.forEach((sec, i) => {
            if (i === index) {
                sec.style.opacity = "1";
                sec.style.zIndex = "10";
            } else {
                sec.style.opacity = "0";
                sec.style.zIndex = "1";
            }
        });
    }

    // Scroll handler
    window.addEventListener("wheel", (e) => {
        if (isScrolling) return;

        if (e.deltaY > 50 && currentIndex < sections.length - 1) {
            isScrolling = true;
            currentIndex++;
            showSection(currentIndex);
        } else if (e.deltaY < -50 && currentIndex > 0) {
            isScrolling = true;
            currentIndex--;
            showSection(currentIndex);
        }

        setTimeout(() => {
            isScrolling = false;
        }, 1200);
    });

    // Make sure body is tall enough for scrolling
    document.body.style.height = `${sections.length * window.innerHeight}px`;

    
    // TYPEWRITER ANIMATION
    const typewriterSections = document.querySelectorAll(
        ".Movie_info2, .Movie_info3, .Movie_info4, .Movie_info5, .Movie_info6, .Movie_info7, .Movie_info8, .Movie_info9, .Movie_info10, .Movie_info11, .Movie_info12, .Movie_info13, .Movie_info14, .Movie_info15"
    );

    typewriterSections.forEach(section => {
        const text = section.querySelector("h5, p");
        if (text) {
            section.classList.add("typewriter");
        }
    });
});

    if (text) {
        section.classList.add("typewriter");
    }
});
