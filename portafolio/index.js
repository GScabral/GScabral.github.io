fetch('porfolio.html')
  .then(response => response.text())
  .then(html => {
    // Utiliza el HTML obtenido y haz algo con él, como agregarlo al DOM
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = html;

    
  })
  .catch(error => {
    // Maneja cualquier error que pueda ocurrir durante la carga
    console.error('Error al cargar el archivo HTML:', error);
  });