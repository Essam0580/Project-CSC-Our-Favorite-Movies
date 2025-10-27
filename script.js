// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Select only the movie sections (you gave them ids Movie1..Movie5)
  const movies = document.querySelectorAll('section[id^="Movie"]');

  if (!movies.length) {
    console.warn('No movie sections found. Make sure your <section> tags have ids like id="Movie1"');
  }

  // Make sure the script loaded (helpful for debugging)
  console.log(`Found ${movies.length} movie section(s).`);

  const options = {
    threshold: 0.5,            // 50% of section must be in view
    root: null,
    rootMargin: '0px'
  };

  // IntersectionObserver path
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    }, options);

    movies.forEach(m => observer.observe(m));
    console.log('Using IntersectionObserver for scroll fades.');
  } else {
    // Fallback for older browsers: onscroll handler (throttled)
    console.log('IntersectionObserver not supported — using scroll fallback.');

    function isCenteredInViewport(el) {
      const rect = el.getBoundingClientRect();
      const viewCenter = window.innerHeight / 2;
      return rect.top < viewCenter && rect.bottom > viewCenter;
    }

    function updateVisibility() {
      movies.forEach(m => {
        m.classList.toggle('visible', isCenteredInViewport(m));
      });
    }

    // simple throttle
    function throttle(fn, wait = 100) {
      let last = 0;
      return (...args) => {
        const now = Date.now();
        if (now - last > wait) {
          last = now;
          fn(...args);
        }
      };
    }

    window.addEventListener('scroll', throttle(updateVisibility, 100));
    window.addEventListener('resize', throttle(updateVisibility, 100));
    updateVisibility();
  }
});
