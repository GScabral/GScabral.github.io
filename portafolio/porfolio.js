document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
  
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
          
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
          
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Ajusta el desplazamiento para dejar espacio al header
                behavior: 'smooth' // Efecto de desplazamiento suave
            });
        });
    });

    function mostrarSecciones() {
        const secciones = document.querySelectorAll('main > section');
        secciones.forEach(seccion => {
            seccion.style.display = 'block';
        });
    }

    // Ejecutar la función mostrarSecciones cuando se hace clic en el botón de la landing
    const exploreButton = document.querySelector('.landing a');
    exploreButton.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarSecciones();
    });


    // Mostrar/ocultar el menú al hacer clic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active'); // Agregar clase activa al menú hamburguesa
      navLinks.classList.toggle('active'); // Mostrar/ocultar la lista de enlaces
    });
});