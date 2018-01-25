
operArit();

  function operArit(){

    var valores = [true, 5 , false, "hola", "adios", 2];
    var numeros = [];
    var a = 0;
    for (i = 0; i < valores.length; i++){
      if(!isNaN(parseInt(valores[i]))){
        if(!(valores[i]===true || valores[i]===false)){
        numeros[a] = parseInt(valores[i]);
        alert(numeros[a] + " es un numero.");
        a++;
      }
    }
  }
    alert(numeros[0] + " + " + numeros[1] + " = " + (numeros[0]+numeros[1]));
    alert(numeros[0] + " - " + numeros[1] + " = " + (numeros[0]-numeros[1]));
}
