// JavaScript para la página web (en este caso no se necesita ninguna interacción)
window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    var background = document.querySelector('.strix');
    
    // Modifica la opacidad del fondo en función del desplazamiento
    background.style.opacity = (scrollPos / window.innerHeight).toFixed(2);
});
