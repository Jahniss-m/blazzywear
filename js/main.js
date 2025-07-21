// Scroll suave para botón CTA
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  window.scrollTo({
    top: section.offsetTop - 60,
    behavior: 'smooth'
  });
}
