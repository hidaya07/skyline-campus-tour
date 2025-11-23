// Simple JS for future interactivity

// Scroll smooth behavior for navbar links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Optional: highlight active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, header');
  let scrollPos = window.scrollY + 200;
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});
