window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    var header = document.querySelector('header');
    
    // Cambia el color de fondo del encabezado en función del desplazamiento
    if (scrollPos > 100) {
        header.style.backgroundColor = '#555';
    } else {
        header.style.backgroundColor = '#333';
    }
});
