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

// Dynamic year in footer
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();
document.querySelector('footer p')?.append(` © ${yearSpan.textContent}`);

// Page load fade-in
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Delayed button pulse effect
const pulseBtn = document.querySelector('.hero-btn');
if (pulseBtn) {
  setTimeout(() => {
    pulseBtn.classList.add('pulse');
  }, 1000);
}

// Animate nav background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll progress indicator (optional)
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.append(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + '%';
});

// IntersectionObserver polyfill (if needed)
if (!('IntersectionObserver' in window)) {
  revealElements.forEach(el => el.classList.add('reveal'));
}

// Optional: Log when sections become visible
observer.disconnect();
revealElements.forEach(el => {
  observer.observe(el);
  console.log(`Watching: ${el.className}`);
});

// Easter egg console message
console.log('%cBuilt with ♥ by Swiftstare Dev Team', 'color: #fff; background: #222; padding: 8px; font-size: 14px');
