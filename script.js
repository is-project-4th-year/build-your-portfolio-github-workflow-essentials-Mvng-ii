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

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
    return;
  }

  // Simulate form sending (or integrate EmailJS/Formspree here)
  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "#4caf50";
  this.reset();
});

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}
