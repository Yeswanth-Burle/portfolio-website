// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    offset: 100,
    once: true,
    easing: 'ease-out-cubic'
});

// Typing Effect Initialization
document.addEventListener('DOMContentLoaded', function() {
    new Typed('.typed-text', {
        strings: [
            'Software Engineer',
            'Full-Stack Developer',
            'Problem Solver',
            'Tech Enthusiast'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: '_'
    });
});

// Sticky Navbar Functionality
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when a navigation item is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Image Modal functionality
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.classList.add('show');
    modalImage.src = imageSrc;
    document.body.style.overflow = 'hidden'; // prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal on Escape key press
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
