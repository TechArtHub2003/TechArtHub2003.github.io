document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuLinks = navMenu.querySelectorAll('a');

    // Función para abrir/cerrar el menú
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Cerrar el menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });

    // Validación del formulario
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        let valid = true;
        let errors = [];

        if (nombre === '') {
            valid = false;
            errors.push('El nombre es obligatorio.');
        }

        if (email === '') {
            valid = false;
            errors.push('El correo electrónico es obligatorio.');
        } else if (!validateEmail(email)) {
            valid = false;
            errors.push('El correo electrónico no es válido.');
        }

        if (asunto === '') {
            valid = false;
            errors.push('El asunto es obligatorio.');
        }

        if (mensaje === '') {
            valid = false;
            errors.push('El mensaje es obligatorio.');
        }

        if (!valid) {
            event.preventDefault();
            alert('Errores:\n' + errors.join('\n'));
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
