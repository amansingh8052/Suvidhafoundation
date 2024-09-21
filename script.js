


function loadComponent(id, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => (document.getElementById(id).innerHTML = data))
    .catch((error) => console.error("Error loading component:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");
  loadComponent("reviews", "testimonial.html");
});

function toggleDropdown() {
  const dropdown = document.getElementById("dropdownContent");

  // Toggle the 'open' class to show/hide the dropdown content
  if (dropdown.classList.contains("open")) {
    dropdown.classList.remove("open");
  } else {
    dropdown.classList.add("open");
  }
}



// Scroll to Top functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the button based on the scroll position
window.onscroll = function () {
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = "flex"; // Show button when scrolled down
  } else {
    scrollToTopBtn.style.display = "none"; // Hide button when at the top
  }
};

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
});


// Home page slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 10000); // Change slide every 5 seconds
}

// Manual slide navigation
function plusSlides(n) {
  slideIndex += n;
  let slides = document.getElementsByClassName("slides");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

// Function to open the specific slide when a heading is clicked
function openSlide(slideNumber, element) {
  let tabs = document.getElementsByClassName("tab");
  let tabLinks = document.getElementsByClassName("tab-link");

  // Hide all tabs
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Remove the activeTab class from all tab links
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("activeTab");
  }

  // Show the selected slide
  document.getElementById(`tab${slideNumber}`).style.display = "block";

  // Add activeTab class to the clicked tab link
  element.classList.add("activeTab");
}


function showAndPlayVideo(e) {
  // Prevent default behavior of the link
  e.preventDefault();

  // Get the video container and video elements
  var videoContainer = document.getElementById("videoContainer");
  var video = document.getElementById("myVideo");

  // Make the video container visible
  videoContainer.style.display = "flex";

  // Play the video automatically
  video.play();
}

function closeVideo() {
  // Get the video container and video elements
  var videoContainer = document.getElementById("videoContainer");
  var video = document.getElementById("myVideo");

  // Pause the video and hide the container
  video.pause();
  video.currentTime = 0; // Reset the video to the start
  videoContainer.style.display = "none";
}


var swiper = new Swiper(".review-slide-content", {
  slidesPerView: 3, // Default number of slides visible on large screens
  spaceBetween: 30, // Default space between slides
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // When window width is >= 1024px (large screens)
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // When window width is >= 768px (medium screens, tablets)
    660: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // When window width is >= 330px (small screens, mobile phones)
    330: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

// Function to load the loader HTML and CSS dynamically
function loadLoader() {
  // Load the loader HTML
  fetch('loader.html')
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML('afterbegin', data);

      // Load the loader CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'loader.css';
      document.head.appendChild(link);
    });

  // Hide the loader once the page is fully loaded
  window.onload = function () {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'none';
    }
  };
}

// Call the loadLoader function
loadLoader();
