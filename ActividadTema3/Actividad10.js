var intro;


do{
    console.log("Pulse 1 para sumar");
    console.log("Pulse 2 para restar");
    console.log("Pulse 3 para multiplicar");
    console.log("Pulse 4 para dividir");
    console.log("Pulse 5 para obtener el modulo");
    console.log("Pulse 6 para elevar un numero");
    console.log("Pulse 7 para hacer raiz cuadrada");
    console.log("Pulse 8 para pasar a base octal");
    console.log("Pulse 9 para pasar a base hexadecimal");
    console.log("Pulse 10 para de binario a decimal");
    console.log("Pulse 11 para salir");

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
      case (6):elevar();
               break;
      case (7):raizCuadrada();
               break;
      case (8):baseOctal();
               break;
      case (9):baseHexa();
               break;
      case (10):octalDecimal();
                break;
      case (11):salir();
               break;
      default:console.log("Opcion no valida");
              break;
    }

}while(intro != 11);


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

function elevar(){
  var numero = prompt("Introduzca numero que quiere elevar: ");
  if(!isNaN(numero)){
    var exponente = prompt("Introduzca a cuanto lo quiere elevar: ");
    if(!isNaN(exponente)){
      alert(numero + " elevado a " + exponente + " = " + Math.pow(numero, exponente));
    }else{
      alert("El numero del exponente no es valido");
    }
  }else{
    alert("El numero a elevar no es un numero.");
  }

}

function raizCuadrada(){
  var num = prompt("Introduzca el numero del que quieres hacer la raiz cuadrada: ");
  if(!(isNaN(num))){
  alert("La raiz cuadrada de " + num + " es " + Math.sqrt(num));
}else{
  alert("Lo introducido no es un numero");
  }
}

function baseOctal(){
  var num = prompt("Introduzca el numero que quiere pasar a base octal: ");
  alert("El numero " + num + " en base octal es: " + parseInt(num, 8));
}

function baseHexa(){
    var num = prompt("Introduzca el numero que quiere pasar a base hexadecimal: ");
    alert("El numero " + num + " en base hexadecimal es: " + parseInt(num, 16));
}

function octalDecimal(){
  var num = prompt("Introduzca el numero que quieres pasar a decimal (Tiene que ser octal): ");
  var total = 0;
  for (i  = num.length ; i >= 0; i--){

  }
  alert("Metodo para pasar de octal a decimal, aun no terminada.");
}

function salir(){
  confirm("De verdad quieres salir?")
}
