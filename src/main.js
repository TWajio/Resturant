// Import styles and external libraries
import './css/style.css';
import Swiper from '../node_modules/swiper/swiper-bundle.min.mjs';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Declare Swiper instances
let servicesSwiper;
let heroSwiper;

document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const scrollHeader = document.querySelector('.fix-header');
    const mainHeader = document.querySelector('.main-header');
    const menuToggle = document.querySelectorAll(".menu-button");
    const mobileNav = document.getElementById("mobile-nav");
    const menuClose = document.getElementById("menu-close");
    const mainContent = document.querySelector(".main-content");
    const overlay = document.getElementById('overlay');

   const title = document.querySelector(".hero-title");
    // Scroll behavior for hiding/showing headers
    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop && currentScroll > 50) {
            scrollHeader.classList.add('show');
            mainHeader.classList.add('hide');
        } else {
            scrollHeader.classList.remove('show');
            mainHeader.classList.remove('hide');
        }
    });

menuToggle.forEach(button => {
  button.addEventListener("click", () => {
    mobileNav.classList.add("show");
    mainContent.classList.add("main-show");
    overlay.classList.add('show'); // fade in
  });
});

menuClose.addEventListener("click", () => {
  mobileNav.classList.remove("show");
  mainContent.classList.remove("main-show");
  overlay.classList.remove('show'); // fade out
});
});

// Wait until everything (CSS/images) is loaded
window.addEventListener("load", () => {
    window.scrollTo(0, 0); // start from top
    AOS.init({
        once: false,
        offset: 200,
        duration: 800,
    });
    document.body.style.visibility = "visible";
});

// Vite Hot Module Reload support
if (import.meta.hot) {
  import.meta.hot.on('vite:afterUpdate', () => {
    AOS.refreshHard();
  });
}
