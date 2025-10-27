document.addEventListener('DOMContentLoaded', () => {
  const movies = document.querySelectorAll('section[id^="Movie"]');
  let currentIndex = 0;

  function showMovie(index) {
    movies.forEach((m, i) => {
      if (i === index) {
        m.classList.add('visible');
      } else {
        m.classList.remove('visible');
      }
    });
  }

  // Show the first movie
  showMovie(0);

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const step = window.innerHeight * 0.8; // how much scroll to switch
    const newIndex = Math.min(
      Math.floor(scrollPos / step),
      movies.length - 1
    );

    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      showMovie(currentIndex);
    }
  });

  // Make sure body is tall enough to allow scrolling through all movies
  document.body.style.height = `${movies.length * window.innerHeight}px`;
});
