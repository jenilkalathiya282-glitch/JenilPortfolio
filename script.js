const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const revealEls = document.querySelectorAll('.reveal');
const mobileLinks = document.querySelectorAll('#mobileMenu a');

function applyTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light');
    themeToggle.textContent = '☀';
  } else {
    body.classList.remove('light');
    themeToggle.textContent = '☾';
  }
  localStorage.setItem('portfolio-theme', theme);
}

themeToggle.addEventListener('click', () => {
  const next = body.classList.contains('light') ? 'dark' : 'light';
  applyTheme(next);
});

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('show'));
});

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
applyTheme(savedTheme);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

/* ===== CUSTOM CURSOR ===== */
const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

function animateCursor() {
  posX += (mouseX - posX) * 0.15;
  posY += (mouseY - posY) * 0.15;

  cursor.style.left = posX + "px";
  cursor.style.top = posY + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();

/* hover effect */
const hoverElements = document.querySelectorAll(
  "a, button, .btn, .project-card, .service-card"
);

hoverElements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});
