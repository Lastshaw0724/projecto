// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    // Obtén el elemento <body>
    const body = document.querySelector('body');

    // Define una función para cambiar el color de fondo
    function cambiarColorFondo() {
        // Genera un color aleatorio en formato hexadecimal
        const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // Cambia el color de fondo del <body>
        body.style.backgroundColor = colorAleatorio;
    }

    // Añade un event listener para el clic en el <body>
    body.addEventListener('click', cambiarColorFondo);
});

