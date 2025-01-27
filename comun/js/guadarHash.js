// Detectar si la página está cargada
document.addEventListener('DOMContentLoaded', function () {
    // Verificar si hay un hash en la URL de la página actual
    let currentHash = window.location.hash;
  
    // Si el hash está presente en la URL, guardarlo en el localStorage
    if (currentHash) {
      localStorage.setItem('savedHash', currentHash);
    }
  
    // Capturar todos los enlaces en la página
    let links = document.querySelectorAll('a');
  
    // Añadir un event listener a cada enlace para guardar el hash al hacer clic
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Antes de navegar, capturar el hash actual y guardarlo
        let currentHash = window.location.hash;
        if (currentHash) {
          localStorage.setItem('savedHash', currentHash);
        }
      });
    });
  
    // Cuando la nueva página se cargue, agregar el hash guardado a la URL
    let savedHash = localStorage.getItem('savedHash');
    if (savedHash) {
      // Agregar el hash a la nueva página si existe un hash guardado
      window.location.hash = savedHash;
    }
  });