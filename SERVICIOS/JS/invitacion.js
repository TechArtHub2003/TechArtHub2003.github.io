document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuLinks = navMenu.querySelectorAll('a');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });

    initMap();
    countdown();
});
