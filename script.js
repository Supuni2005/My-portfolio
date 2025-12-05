// menu toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// scroll spy + sticky header
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      const anchor = document.querySelector("header nav a[href*='" + id + "']");
      if (anchor) anchor.classList.add('active');
    }
  });

  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100)

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ScrollReveal
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .projects-container, .projects-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}

/* ===== Skills bars animation using IntersectionObserver ===== */
document.addEventListener('DOMContentLoaded', function () {
  const skillsSection = document.querySelector('#skills');
  const fills = document.querySelectorAll('.fill');

  if (!skillsSection || fills.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fills.forEach(fill => {
          const percent = fill.getAttribute('data-percent') || '0';
          const color = fill.getAttribute('data-color') || '#283444';
          fill.style.background = color;
          // trigger the transition
          fill.style.width = percent + '%';
        });
        obs.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.25 });

  observer.observe(skillsSection);
});

const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    icon.className = "bx bxs-moon";
    icon.style.color = "#000000"; 
} else {
    icon.className = "bx bxs-sun bx-flip-vertical";
    icon.style.color = "#f5f1f1";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      
        icon.className = "bx bxs-moon";
    icon.style.color = "#000000";
        localStorage.setItem("theme", "light");
    } else {
        
        icon.className = "bx bxs-sun bx-flip-vertical";
    icon.style.color = "#f5f1f1";
        localStorage.setItem("theme", "dark");
    }
});


