// DROPDOWN
function toggleDropdown() {
    const list = document.getElementById("websiteList");
    list.style.display = (list.style.display === "block") ? "none" : "block";
}



// SECTION FADE SCROLL SYSTEM
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    let currentIndex = 0;
    let isScrolling = false;

    // INITIAL SECTION SETUP
    sections.forEach((sec, index) => {
        sec.style.position = "fixed";
        sec.style.top = "0";
        sec.style.left = "0";
        sec.style.width = "100%";
        sec.style.opacity = index === 0 ? "1" : "0";
        sec.style.zIndex = index === 0 ? "10" : "1";
        sec.style.transition = "opacity 1s ease";
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

    // SMOOTH SCROLLING — FIXED SPEED
    window.addEventListener("wheel", (e) => {
        if (isScrolling) return;

        // Threshold to trigger fade
        const threshold = 80;

        if (e.deltaY > threshold && currentIndex < sections.length - 1) {
            currentIndex++;
            isScrolling = true;
            showSection(currentIndex);
        } else if (e.deltaY < -threshold && currentIndex > 0) {
            currentIndex--;
            isScrolling = true;
            showSection(currentIndex);
        }

        // delay between scrolls
        setTimeout(() => { isScrolling = false; }, 1100);
    });

    // Artificial page height (makes scroll wheel work)
    document.body.style.height = `${sections.length * window.innerHeight}px`;



    // TYPEWRITER 
    const typewriterTargets = document.querySelectorAll(
        ".Movie_info, .Movie_info1, .Movie_info2, .Movie_info3, .Movie_info4, .Movie_info5, .Movie_info6, .Movie_info7, .Movie_info8, .Movie_info9, .Movie_info10, .Movie_info11, .Movie_info12, .Movie_info13, .Movie_info14, .Movie_info15"
    );

    typewriterTargets.forEach(section => {
        const textElement = section.querySelector("p, h5, h4, h3");
        if (textElement) {
            section.classList.add("typewriter");
        }
    });
});

    }
});
