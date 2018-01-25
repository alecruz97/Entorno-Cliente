
areaCirculo();

function areaCirculo(){
  var radio = prompt("Introduzca la longitud del radio");
    if(!isNaN(radio)){
      alert("El area del circulo es " + Math.PI*Math.pow(radio,2) + " cm2");
    }else{
      alert("Lo introducido no es un numero");
    }
}
