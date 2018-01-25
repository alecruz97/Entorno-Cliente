var numero = parseInt(prompt("Inserte numero"));

	if(numero>=0 && numero <=10){
		for( i = 0; i <= 10; i++){
			document.write( numero + " x " + i + " = " + numero*i +"<br>");
		}
	}
