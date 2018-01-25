var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
'C', 'K', 'E', 'T']; 


	var numero = parseInt(prompt("Introduzca numero del dni"));

	if(!isNaN(numero)){
		if(numero < 0 || numero >= 99999999){
	
		alert("El numero tiene que estar comprendido entre 0 y 99999999");


		}else{
		
			var letra = prompt("Introduzca letra del dni");
			if(isNaN(letra)){
				var letra2 = letras[numero%23];

				if(letra2 == letra){
					alert("DNI introducido correctamente");
				}else{	
					alert("Error: La letra que tenia que haber introducido es " + letra2 + " y no " + letra);
				}	
			}else{
				alert("Tienes que meter una letra");
			}				
		
		}
	}else{
		alert("Tiene que introducir un numero");
	}
	