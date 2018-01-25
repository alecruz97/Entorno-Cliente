var intro;

do{
    console.log("Pulse 1 para sumar");
    console.log("Pulse 2 para restar");
    console.log("Pulse 3 para multiplicar");
    console.log("Pulse 4 para dividir");
    console.log("Pulse 5 para obtener el modulo");
    console.log("Pulse 6 para salir");

    intro = parseInt(prompt("Introduzca opcion: "));

    switch (intro) {
      case (1):sumar();
               break;
      case (2):restar();
               break;
      case (3):multiplicar();
               break;
      case (4):dividir();
               break;
      case (5):modulo();
               break;
      case (6):salir();
               break;
      default:console.log("Opcion no valida");
              break;
    }

}while(intro != 6);


function sumar(){
  var n1 = prompt("Introduzca primer valor");
  var n2 ;
    if(!isNaN(n1)){
      n2 = prompt("Introduzca segundo numero");
      if(!isNaN(n2)){
        alert("La suma es " + (parseInt(n1)+parseInt(n2)));
      }else{
        alert(n2 + " no es un numero");
      }
    }else{
      alert(n1 + " no es un numero.");
    }
}
function restar(){
  var n1 = prompt("Introduzca primer valor");
  var n2 ;
    if(!isNaN(n1)){
      n2 = prompt("Introduzca segundo numero");
      if(!isNaN(n2)){
        alert("La resta es " + (parseInt(n1)-parseInt(n2)));
      }else{
        alert(n2 + " no es un numero");
      }
    }else{
      alert(n1 + " no es un numero.");
    }

}
function multiplicar(){
  var n1 = prompt("Introduzca primer valor");
  var n2 ;
    if(!isNaN(n1)){
      n2 = prompt("Introduzca segundo numero");
      if(!isNaN(n2)){
        alert("La multiplicacion es " + (parseInt(n1)*parseInt(n2)));
      }else{
        alert(n2 + " no es un numero");
      }
    }else{
      alert(n1 + " no es un numero.");
    }

}
function dividir(){
  var n1 = prompt("Introduzca primer valor");
  var n2 ;
    if(!isNaN(n1)){
      n2 = prompt("Introduzca segundo numero");
      if(!isNaN(n2)){
        alert("La division es " + (parseInt(n1)/parseInt(n2)));
      }else{
        alert(n2 + " no es un numero");
      }
    }else{
      alert(n1 + " no es un numero.");
    }
}
function modulo(){
  var n1 = prompt("Introduzca primer valor");
  var n2 ;
    if(!isNaN(n1)){
      n2 = prompt("Introduzca segundo numero");
      if(!isNaN(n2)){
        alert("El modulo es " + (parseInt(n1)%parseInt(n2)));
      }else{
        alert(n2 + " no es un numero");
      }
    }else{
      alert(n1 + " no es un numero.");
    }
}
function salir(){
  confirm("¿De verdad quieres salir?")
}
