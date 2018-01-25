ac12();

function ac12(){
  var frase = prompt("Introduzca frase: ");
  var ej = frase.split(" ");
  console.log(ej);


  console.log("Primera palabra de la frase --> " + ej[0]);
  console.log("Ultima palabra de la frase --> " + ej[ej.length - 1]);
  console.log("Numero de palabras de la frase --> " + ej.length);
}
