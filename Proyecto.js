let stringText; //variable global

function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function (e) {
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
function variablesMostrar() {
  let txt_imprimir = "";
  let variables = new Array();
  variables = stringText.match(/[\w]+( |)=( |)[\w]+( |)[+-\/\*]( |)[\w]+( |);/g);
  for (let i = 0; i < variables.length; i++) {
    txt_imprimir = txt_imprimir + `${i + 1} = ${String(variables[i])} <br/>`;
  }
  var elementoMat = document.getElementById('expresiones-mat');
  elementoMat.innerHTML = txt_imprimir;
}

//let expresionBoleanos = /[\w]+( |)[=<>!|]+( |)[\w]+;/;
function booleanosMostrar() {
  let txt_imprimir = "";
  let booleanos = new Array();
  //expresion regular que detecta expresiones booleanas de declaracion
  //y dentro de funciones como if, while, for
  booleanos = stringText.match(/(|\()[\w.]+( |)(\={2}|\<[=]|\>[=]|\![=]|\|)( |)[\w]+(;|\))/g);
  for (let i = 0; i < booleanos.length; i++) {
    txt_imprimir = txt_imprimir + `${i + 1} = ${String(booleanos[i])} <br/>`;
  }
  var elementoMat = document.getElementById('expresiones-boo');
  elementoMat.innerHTML = txt_imprimir;
}

//Encriptacion
function encriptarMostrar() {
  let txt_imprimir = "";
  let texto = stringText;
  let en1, en2, en3, en4, en5;
  var palabrasEn = new Array();
  let comillas = texto.match(/(".*?"|'.*?')/g);
  for (let i = 0; i < comillas.length; i++) {
    en1 = comillas[i].replace(/(a)/gim, "1");
    en2 = en1.replace(/(e)/gim, "2");
    en3 = en2.replace(/(i)/gim, "3");
    en4 = en3.replace(/(o)/gim, "4");
    en5 = en4.replace(/(u)/gim, "5");
    en6 = en5.replace(/(l)/gim, "szs");
    en7 = en6.replace(/(n)/gim, "Q==");
    en8 = en7.replace(/(s)/gim, "ZzaA");
    palabrasEn[i] = en8;
  }

  for (let i = 0; i < palabrasEn.length; i++) {
    txt_imprimir = txt_imprimir + `${i + 1} = ${String(palabrasEn[i])} <br/>`;
  }

  var elementoMat = document.getElementById('expresiones-enc');
  elementoMat.innerHTML = txt_imprimir;
}
//Eliminar comentarios del codigo
function eliminarComentarios() {

  let eliminar = stringText.replace(/\/[\*|][\S\s]+?[\*]\/|\/[\/].*/g, "");
  var elementoMat = document.getElementById('contenido-archivo');
  elementoMat.innerHTML = eliminar;

}
