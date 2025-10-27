const movies = document.querySelectorAll('section');  // Select all the movie sections

const observer = new IntersectionObserver((entries) => { // Create an intersection observer to detect when sections enter the viewport
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');  // fade in
    } else {
      entry.target.classList.remove('visible'); // fade out
    }
  });
}, {
  threshold: 0.5  // 50% of section visible before triggering
});

movies.forEach(movie => {   // Observe each movie section
  observer.observe(movie);
});
