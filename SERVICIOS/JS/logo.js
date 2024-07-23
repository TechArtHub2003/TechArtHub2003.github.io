// JS/logo.js
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
});

// logos

function openModal(imgSrc, title, url) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-button').onclick = function() { goToPage(url); };
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function goToPage(url) {
    window.location.href = url;
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}

