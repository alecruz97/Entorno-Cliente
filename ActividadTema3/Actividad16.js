
actividad16();

function actividad16(){
  var frase = prompt("Introduzca frase: ");

  var palabra = prompt("Introduzca la palabra: ");

  if(frase.includes(palabra)){
    alert("La palabra esta en la frase y se encuentra en la posicion " +
          frase.indexOf(palabra));

    alert("La palabra esta formada por " + palabra.length + " caracteres.");
    frase = frase.replace(palabra, "dwecl");
    alert(frase);
  }else{
    alert("Error: La palabra " + palabra + " no se encuentra en la frase.")
  }
}
