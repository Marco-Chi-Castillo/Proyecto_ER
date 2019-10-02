let stringText; //variable global

function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
      var contenido = e.target.result;
      mostrarContenido(contenido);
      stringText = contenido;
  
    }
    lector.readAsText(archivo);
  }
  
  function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    elemento.innerHTML = contenido;
  }
  
  document.getElementById('file-input').addEventListener('change', leerArchivo, false);
  
  //Trabajar con la variable stringText contiene todo el archivo.java



