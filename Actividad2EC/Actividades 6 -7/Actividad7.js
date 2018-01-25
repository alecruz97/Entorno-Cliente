var numero = prompt("Introduzca un numero");
var digitos = [];

if(numero > 1000){
	alert("El numero tiene que ser menor que 1000");

	}else{
		var resta = 0;
		if(numero == 1000){
				alert(1);
				alert(0);
				alert(0);
				alert(0);
		}else{
			resta = numero;
			if(resta>=100){
			alert(Math.trunc(resta/100));
			resta = resta%100;
			}
			if(resta>=10){
			alert(Math.trunc(resta/10));
			resta = resta%10;
			}else{
				alert(0);
			}
			alert(resta);
		}
	}
