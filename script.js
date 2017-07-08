// Scroll Animations
const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `${entry.target.dataset.animation} 500ms ${entry.target.dataset.delay} forwards ease-in-out`;
      }
    });
  },
  {
    threshold: 0.5
  }
);

const hiddenSection = document.querySelectorAll('.anim');
// Telling the observer what to observe
hiddenSection.forEach((el) => scrollObserver.observe(el));
