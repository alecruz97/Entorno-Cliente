var numero = parseInt(prompt("Introduzca el numero al que le vamos a hacer el factorial:"));
var suma = 1;


	if( numero < 0){
		alert("no es posible hacer un factorial de un numero negativo");
		}else if (numero == 0){
		alert("el factorial de 0 es 1");
		}else{

			for ( i = 1 ; i <= numero ; i++){
			var suma = suma * i;
			}

			alert("El factorial de " + numero + " es " + suma + ".");
		}
