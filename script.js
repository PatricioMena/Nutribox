///////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////
// Mobile Navigation
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////////////////////////////////////////////////////////// Sticky Navigation
const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px'
  }
);

obs.observe(sectionHeroEl);
