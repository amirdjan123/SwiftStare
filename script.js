// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Scroll animations
const revealElements = document.querySelectorAll('.feature-card, .highlight, .cta-banner');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// Smooth scroll to anchors
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Footer year
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();
document.querySelector('footer p')?.append(` © ${yearSpan.textContent}`);

// Page load fade
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Button pulse
const pulseBtn = document.querySelector('.hero-btn');
if (pulseBtn) {
  setTimeout(() => {
    pulseBtn.classList.add('pulse');
  }, 1000);
}

// Navbar scroll background
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll progress
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.append(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + '%';
});

// Fallback if IntersectionObserver not supported
if (!('IntersectionObserver' in window)) {
  revealElements.forEach(el => el.classList.add('reveal'));
}

// Log observed elements
observer.disconnect();
revealElements.forEach(el => {
  observer.observe(el);
  console.log(`Watching: ${el.className}`);
});

console.log('%cBuilt with ♥ by Swiftstare Dev Team', 'color: #fff; background: #222; padding: 8px; font-size: 14px');

// ✅ FORM HANDLING (NO REDIRECT)
const contactForm = document.getElementById("contact-form");
const successMsg = document.getElementById("success-message");

if (contactForm && successMsg) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = new FormData(contactForm);

    const response = await fetch(contactForm.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      successMsg.style.display = "block";
      contactForm.reset();
      setTimeout(() => {
        successMsg.style.display = "none";
      }, 5000);
    } else {
      alert("There was a problem submitting the form. Please try again.");
    }
  });
}
