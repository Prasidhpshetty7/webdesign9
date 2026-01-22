//Getting dom elements
let mouseCursor = document.querySelector(".cursor-effect");
let ctaLinks = document.querySelectorAll(
  ".about-content a, .footer-links a, .more-about a"
);
let projectLinks = document.querySelectorAll(".project-box__link a ion-icon");
console.log(projectLinks);

//  Mouse effect with smooth animation
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let speed = 0.15; // Adjust this value for smoothness (0.1 = slower, 0.3 = faster)

window.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

function animateCursor() {
  // Smooth interpolation
  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;
  
  mouseCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  
  requestAnimationFrame(animateCursor);
}

animateCursor();

ctaLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});

projectLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});

//GSAP animations
function fadeOut() {
  TweenMax.to(".intro-btn", 1, {
    opacity: 0,
    y: -100,
  });
  TweenMax.to(".text", 1, {
    y: "-100%",
  });
  TweenMax.to(".slider", 2, {
    y: "-100%",
    delay: 1,
    ease: Expo.easeInOut,
  });
  TweenMax.to(".slider-2", 2, {
    y: "-100%",
    delay: 1.4,
    ease: Power2.easeInOut,
  });
  TweenMax.to(
    ".intro",
    2,
    {
      y: "-100%",
      delay: 2,
      ease: Power2.easeInOut,
    },
    "-=.5"
  );
  TweenMax.to(".content", 2, {
    y: 0,
    ease: Power2.easeInOut,
  });
}
///Timeline
const tl = gsap.timeline({
  defaults: { ease: "power1.out" },
});

tl.to(".text", {
  y: "0%",
  duration: 1,
  stagger: 0.4,
});
tl.from(
  ".services-heading h2",
  {
    y: 300,
    opacity: 0,
    duration: 1,
  },
  "-=1"
);

tl.fromTo(
  ".landing-text h1",
  { opacity: 0 },
  { opacity: 1, duration: 0.5, stagger: 0.5 }
);
tl.fromTo(".landing-text h5", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".effect-1", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".effect-2", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".effect-3", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".effect-4", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".inner", { opacity: 0 }, { opacity: 1, duration: 0.3 }, "-=1");

/////Dark theme toggle with localStorage
var checkbox = document.querySelector("input[name=theme]");

// Load saved theme from localStorage on page load
const currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);

// Set checkbox state based on saved theme
if (currentTheme === "light") {
  checkbox.checked = true;
}

// Save theme preference when changed
checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1200);
};

/////Contact Form Handler
const contactForm = document.getElementById("contactForm");
const successModal = document.getElementById("successModal");

if (contactForm && successModal) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the user's name from the form
    const userName = document.getElementById("name").value.trim();
    const userNameSpan = document.getElementById("userName");
    
    // Display personalized message with name
    if (userName && userNameSpan) {
      userNameSpan.textContent = ", " + userName;
    } else if (userNameSpan) {
      userNameSpan.textContent = "";
    }

    // Show success modal
    successModal.style.display = "flex";
    document.body.style.overflow = "hidden";

    // Reset form
    contactForm.reset();
  });

  // Close modal when clicking outside
  successModal.addEventListener("click", function (e) {
    if (e.target === successModal) {
      closeSuccessModal();
    }
  });
}

function closeSuccessModal() {
  const modal = document.getElementById("successModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}
