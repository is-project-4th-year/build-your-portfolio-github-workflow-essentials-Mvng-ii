console.log("Landing page loaded.");

function applyFadeInAnimation(selector, threshold = 0.15) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold });

  elements.forEach(el => observer.observe(el));
}

// Usage
// Fade in projects on scroll
applyFadeInAnimation('.project-card', 0.15);
// Fade-in animation when about section comes into view
applyFadeInAnimation('.about', 0.2);




