function toggleText(element) {
    // Obtener el elemento padre del <h4>
    var section = element.parentNode;
  
    // Encontrar el elemento <div> con la clase "content" dentro del section
    var content = section.querySelector('.content');
  
    // Alternar la visibilidad del contenido
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }
  