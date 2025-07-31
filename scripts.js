const hamburgerMenu = document.querySelector('.hamburger-menu');
const navUl = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
    navUl.classList.toggle('active');
});
