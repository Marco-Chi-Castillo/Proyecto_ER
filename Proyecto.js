//\b[a-zA-Z].+?=.[0-9a-zA-Z]...[0-9a-zA-Z];

//lee ya las variables sin espacio o espacio
//[a-zA-Z]( |).+=( |)[0-9a-zA-Z]( |).( |)[0-9a-zA-Z]( |);

//expresion casi finalizado
//[\w]*( |)=( |)[\w]*( |).( |)[\w]*( |);

//listo
//[\w]+( |)=( |)[\w]+( |)[\W]( |)[\w]+( |);

    
//Expresiones matematicas sencillas
let expresionMatematicos = /[\w]+( |)=( |)[\w]+( |)[+-\/\*]( |)[\w]+( |);/

//[\w.]+( |)[=<>!|]+( |)[\w.\][]+ expresion mejorado pero detecta todo caracter
//[\w.]+( |)[=<>!|]+( |)[\w.\][]+;  expresion definida con ; al final

//expresiones booleanas
let expresionBoleanos = /[\w]+( |)[=<>!|]+( |)[\w]+;/