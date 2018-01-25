
actividad14();

function actividad14(){

  var frase = prompt("Introduzca una frase: ");

  var ini = prompt("Introduzca marca de inicio: ");
  var fin = prompt("Introduzca marca de final: ");

  /*if(ini === fin){
    alert("La marca de inicio y del final son iguales.");


  }else{
    alert("Las marcas no son iguales, proceda.");
    */
    if(frase.includes(ini) && frase.includes(fin)){

      var numIni = frase.indexOf(ini);
      var numFin = frase.lastIndexOf(fin);

      alert(frase.slice(numIni, numFin));

    }else{
      alert("La frase no contiene una (o ambas) marcas.");
    }
  //}



}
