/**
 * ============================================================================
 * AURA RESTAURANT - VANILLA JAVASCRIPT INTERACTIONS
 * Pure Vanilla JS | Modular | Accessible | Production Ready
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
   * 1. STICKY NAVBAR SCROLL EFFECT
   * -------------------------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');
  const scrollThreshold = 40;

  function handleNavbarScroll() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check

  /* --------------------------------------------------------------------------
   * 2. MOBILE HAMBURGER MENU NAVIGATION
   * -------------------------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    navToggle.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    mobileBackdrop.classList.add('visible');
    document.body.classList.add('nav-open');
  }

  function closeMobileMenu() {
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    mobileBackdrop.classList.remove('visible');
    document.body.classList.remove('nav-open');
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (mobileBackdrop) {
      mobileBackdrop.addEventListener('click', closeMobileMenu);
    }

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 3. SMOOTH SCROLLING WITH NAVBAR OFFSET
   * -------------------------------------------------------------------------- */
  const internalNavLinks = document.querySelectorAll('a[href^="#"]');

  internalNavLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 70;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* --------------------------------------------------------------------------
   * 4. ACTIVE NAVIGATION LINK ON SCROLL (SCROLLSPY)
   * -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-menu .nav-link');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        mobileNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  /* --------------------------------------------------------------------------
   * 5. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
   * -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* --------------------------------------------------------------------------
   * 6. MENU CATEGORY FILTER TABS
   * -------------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const dishCards = document.querySelectorAll('.dish-card');

  if (filterButtons.length > 0 && dishCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active button state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterCategory = button.getAttribute('data-filter');

        dishCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (filterCategory === 'all' || cardCategory === filterCategory) {
            card.style.display = 'flex';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
   * 7. CUSTOMER REVIEWS MOBILE SLIDER & DOT TRACKING
   * -------------------------------------------------------------------------- */
  const reviewsGrid = document.querySelector('.reviews-grid');
  const reviewDots = document.querySelectorAll('.review-dot');

  if (reviewsGrid && reviewDots.length > 0) {
    reviewsGrid.addEventListener('scroll', () => {
      const scrollLeft = reviewsGrid.scrollLeft;
      const cardWidth = reviewsGrid.querySelector('.review-card').offsetWidth + 20;
      const activeIndex = Math.round(scrollLeft / cardWidth);

      reviewDots.forEach((dot, index) => {
        if (index === activeIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }, { passive: true });

    reviewDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const cards = reviewsGrid.querySelectorAll('.review-card');
        if (cards[index]) {
          cards[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
   * 8. RESERVATION MODAL CONTROLLER & VALIDATION
   * -------------------------------------------------------------------------- */
  const bookingBackdrop = document.getElementById('bookingModal');
  const openModalButtons = document.querySelectorAll('[data-open-modal="booking"]');
  const closeModalButton = document.getElementById('closeModalBtn');
  const bookingForm = document.getElementById('bookingForm');
  const toastNotification = document.getElementById('bookingToast');

  function openBookingModal() {
    if (!bookingBackdrop) return;
    bookingBackdrop.classList.add('open');
    bookingBackdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Auto set min date to today
    const dateInput = document.getElementById('bookDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      if (!dateInput.value) {
        dateInput.value = today;
      }
    }

    // Set focus to the first input for accessibility
    setTimeout(() => {
      const firstInput = bookingForm ? bookingForm.querySelector('input') : null;
      if (firstInput) firstInput.focus();
    }, 150);
  }

  function closeBookingModal() {
    if (!bookingBackdrop) return;
    bookingBackdrop.classList.remove('open');
    bookingBackdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // If mobile nav is open, close it first
      if (mobileNav && mobileNav.classList.contains('open')) {
        closeMobileMenu();
      }
      openBookingModal();
    });
  });

  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeBookingModal);
  }

  if (bookingBackdrop) {
    bookingBackdrop.addEventListener('click', (e) => {
      if (e.target === bookingBackdrop) {
        closeBookingModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && bookingBackdrop.classList.contains('open')) {
        closeBookingModal();
      }
    });
  }

  // Form Validation & Submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Inputs
      const nameField = document.getElementById('bookName');
      const phoneField = document.getElementById('bookPhone');
      const guestsField = document.getElementById('bookGuests');
      const dateField = document.getElementById('bookDate');
      const timeField = document.getElementById('bookTime');

      function validateField(field, condition) {
        const parentGroup = field.closest('.form-group');
        if (!condition) {
          field.classList.add('error');
          if (parentGroup) parentGroup.classList.add('has-error');
          isValid = false;
        } else {
          field.classList.remove('error');
          if (parentGroup) parentGroup.classList.remove('has-error');
        }
      }

      validateField(nameField, nameField.value.trim().length >= 2);
      validateField(phoneField, /^[0-9+\s-]{8,15}$/.test(phoneField.value.trim()));
      validateField(guestsField, guestsField.value !== '');
      validateField(dateField, dateField.value !== '');
      validateField(timeField, timeField.value !== '');

      if (isValid) {
        const submitBtn = bookingForm.querySelector('.booking-submit-btn');
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Reserving Your Table...</span>';

        // Simulate seamless processing
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          closeBookingModal();
          bookingForm.reset();

          showToast(`Table confirmed for ${nameField.value.trim()} on ${dateField.value} at ${timeField.value}. We've messaged your reservation details!`);
        }, 800);
      }
    });

    // Clear error style on input
    bookingForm.querySelectorAll('input, select').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        const parent = input.closest('.form-group');
        if (parent) parent.classList.remove('has-error');
      });
    });
  }

  /* --------------------------------------------------------------------------
   * 9. TOAST NOTIFICATION UTILITY
   * -------------------------------------------------------------------------- */
  function showToast(message) {
    if (!toastNotification) return;

    const toastMsgText = toastNotification.querySelector('.toast-message p');
    if (toastMsgText) {
      toastMsgText.textContent = message;
    }

    toastNotification.classList.add('show');

    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 5500);
  }

  /* --------------------------------------------------------------------------
   * 10. BACK TO TOP BUTTON
   * -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
   * 11. NEWSLETTER SUBSCRIPTION FORM
   * -------------------------------------------------------------------------- */
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim().length > 4) {
        showToast('Thank you for subscribing to our culinary journal & exclusive tasting invites.');
        emailInput.value = '';
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 12. FULL MENU MODAL / DIALOG
   * -------------------------------------------------------------------------- */
  const viewFullMenuBtn = document.getElementById('viewFullMenuBtn');
  if (viewFullMenuBtn) {
    viewFullMenuBtn.addEventListener('click', () => {
      // Toggle all menu items and scroll down gracefully to popular dishes
      const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
      if (allFilterBtn) {
        allFilterBtn.click();
      }
      showToast('Displaying our complete seasonal artisanal menu selection.');
    });
  }

});
