// Loader

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, 1200);
});

// Mobile Menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu on click

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections();

// Counter Animation

const counters = document.querySelectorAll("[data-target]");

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.dataset.target;

      let count = 0;

      const updateCounter = () => {
        const increment = target / 100;

        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);

          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
      counterObserver.unobserve(counter);
    }
  });
});

counters.forEach(counter => {
  counterObserver.observe(counter);
});

// Testimonial Slider

const reviews = document.querySelectorAll(".review-card");

let currentReview = 0;

function showReview(index) {
  reviews.forEach(review => {
    review.classList.remove("active");
  });

  reviews[index].classList.add("active");
}

setInterval(() => {
  currentReview++;

  if (currentReview >= reviews.length) {
    currentReview = 0;
  }

  showReview(currentReview);

}, 4000);

// Reservation Form

const reservationForm = document.querySelector(".reservation-form");

reservationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Your reservation request has been submitted!");
});