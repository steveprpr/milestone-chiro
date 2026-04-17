/* ============================================
   Milestone Chiropractic Centre — Main JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Navigation --- */
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', nav.classList.contains('open'));
    });

    // Close mobile nav when a link is clicked
    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Active Nav Link --- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  /* --- Accordion --- */
  document.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion__item');
      const content = item.querySelector('.accordion__content');
      const isActive = item.classList.contains('active');

      // Close all items in same accordion
      const accordion = item.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion__item').forEach(i => {
          i.classList.remove('active');
          i.querySelector('.accordion__content').style.maxHeight = null;
        });
      }

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  /* --- Smooth Scroll for Anchor Links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  /* --- Header Shadow on Scroll --- */
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
      } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
      }
    }, { passive: true });
  }

  /* --- Netlify Form Submission Feedback --- */
  document.querySelectorAll('form[data-netlify="true"]').forEach(form => {
    form.addEventListener('submit', (e) => {
      // Let Netlify handle the actual submission.
      // This just provides a small UX touch.
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Sending...';
        btn.disabled = true;
      }
    });
  });

});
