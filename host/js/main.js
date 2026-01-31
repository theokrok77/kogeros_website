// Year auto-update in footer
const yearElement = document.getElementById("y");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Hero background slideshow (cycle through photos)
const heroSlideshow = document.querySelector(".hero");
const heroPhotos = [
  'images/outside/out1.jpg',
  'images/outside/out2.jpg',
  'images/outside/out3.jpg',
  'images/outside/out4.jpg',
  'images/outside/out5.jpg',
  'images/outside/out6.jpg',
  'images/outside/out7.jpg',
  'images/outside/out8.jpg',
  'images/outside/out9.jpg'
];
let currentPhotoIndex = 0;

function setHeroBackground(index) {
  if (heroSlideshow && heroPhotos[index]) {
    heroSlideshow.style.backgroundImage = `url('${heroPhotos[index]}')`;
    currentPhotoIndex = index;
  }
}

function nextHeroPhoto() {
  let next = (currentPhotoIndex + 1) % heroPhotos.length;
  setHeroBackground(next);
}

// Initialize with first photo and auto-advance every 7 seconds
if (heroSlideshow) {
  setHeroBackground(0);
  setInterval(nextHeroPhoto, 7000);
}

// Mobile menu
const burger = document.querySelector("[data-burger]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isHidden = mobileMenu.hasAttribute("hidden");
    if (isHidden) mobileMenu.removeAttribute("hidden");
    else mobileMenu.setAttribute("hidden", "true");
  });
}

// Booking bar validation + redirect (dummy)
const bookingForm = document.querySelector("[data-booking-form]");
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const checkin = bookingForm.querySelector("[name=checkin]")?.value;
    const checkout = bookingForm.querySelector("[name=checkout]")?.value;

    if (!checkin || !checkout) {
      alert("Διάλεξε ημερομηνίες check-in και check-out.");
      return;
    }
    if (new Date(checkout) <= new Date(checkin)) {
      alert("Το check-out πρέπει να είναι μετά το check-in.");
      return;
    }

    // Πήγαινε στη σελίδα κρατήσεων (εσύ μετά θα το συνδέσεις με booking engine / form)
    window.location.href = "reservations.html";
  });
}

// Apartment detail page booking form
const detailBookingForm = document.querySelector("[data-booking-form-detail]");
if (detailBookingForm) {
  detailBookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const checkin = detailBookingForm.querySelector("[name=checkin]")?.value;
    const checkout = detailBookingForm.querySelector("[name=checkout]")?.value;
    const guests = detailBookingForm.querySelector("[name=guests]")?.value;

    if (!checkin || !checkout) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    if (new Date(checkout) <= new Date(checkin)) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    // Calculate nights
    const nights = Math.ceil((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24));
    
    // Show booking confirmation (in production, send to backend or booking system)
    alert(`Booking Request:\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}\nNights: ${nights}\n\nThis will be connected to your booking system.`);
    
    // Optionally redirect to a confirmation page
    // window.location.href = "reservations.html";
  });
}

// Scroll reveal animations
(() => {
  const targets = document.querySelectorAll(
    ".card, .room, .service-card, .testimonial-card, .hero-card, .section-header, .footer-grid"
  );
  if (!("IntersectionObserver" in window) || targets.length === 0) return;

  targets.forEach(el => el.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });

  targets.forEach(el => io.observe(el));
})();

// Header shrink on scroll
(() => {
  const header = document.querySelector(".header");
  if (!header) return;
  let ticking = false;
  const onScroll = () => {
    const scrolled = window.scrollY > 10;
    header.classList.toggle("is-scrolled", scrolled);
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  onScroll();
})();

// Parallax effects (supports `.slide img` if present, plus hero elements)
(() => {
  const slideImages = document.querySelectorAll(".slide img");
  const heroEls = [
    document.querySelector(".hero .badge"),
    document.querySelector(".hero h1"),
    document.querySelector(".hero .bookingbar"),
    document.querySelector(".hero .hero-cards")
  ].filter(Boolean);

  const targets = [];
  slideImages.forEach(img => targets.push({ el: img, speed: 0.15 }));
  heroEls.forEach(el => targets.push({ el, speed: 0.08 }));

  if (targets.length === 0) return;

  let ticking = false;
  const applyParallax = () => {
    const scrollY = window.scrollY || 0;
    targets.forEach(({ el, speed }) => {
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + scrollY) * speed;
      el.style.transform = `translateY(${offset * -0.1}px)`;
    });
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }, { passive: true });

  applyParallax();
})();
