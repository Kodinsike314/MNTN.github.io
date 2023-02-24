const navBtn = document.querySelector('.nav-burger-menu');
const mobileNav = document.querySelector('.mobile-nav');


navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile-nav-active')
    navBtn.classList.toggle('nav-burger-menu-close')
})