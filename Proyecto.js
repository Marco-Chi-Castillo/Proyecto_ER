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

  //Buscar variables
function variablesMostrar(){
    let txt_imprimir = "";
    let variables = new Array();
    variables = stringText.match(/[\w]+( |)=( |)[\w]+( |)[+-\/\*]( |)[\w]+( |);/g);
   for(let i =0; i < variables.length; i++){
        txt_imprimir = txt_imprimir + `${i+1} = ${String(variables[i])} <br/>`; 
    }
    var elementoMat = document.getElementById('expresiones-mat');
    elementoMat.innerHTML = txt_imprimir;
  }
  
  //let expresionBoleanos = /[\w]+( |)[=<>!|]+( |)[\w]+;/;
  function booleanosMostrar(){
    let txt_imprimir = "";
    let booleanos = new Array();
    //expresion regular que detecta expresiones booleanas de declaracion
    //y dentro de funciones como if, while, for
    booleanos = stringText.match(/(|\()[\w.]+( |)[=<>!|]+( |)[\w]+(;|\))/g);
   for(let i =0; i < booleanos.length; i++){
        txt_imprimir = txt_imprimir + `${i+1} = ${String(booleanos[i])} <br/>`; 
    }
    var elementoMat = document.getElementById('expresiones-boo');
    elementoMat.innerHTML = txt_imprimir;
  }
