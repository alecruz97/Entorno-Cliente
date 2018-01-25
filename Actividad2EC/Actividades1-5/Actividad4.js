var inicio = parseInt(prompt("Introduzca INICIO"));
var fin = parseInt(prompt("Introduzca FINAL"));



	if(inicio < fin){
		for(i = inicio; i <= fin; i++){
			if(i%8==0){
				document.write(i + ", ");
			}
		}
	}else if(fin < inicio){
		/*var aux = inicio;
		inicio = fin;
		fin = aux;*/
		for(i = fin; i <= inicio; i++){
			if(i%8==0){
				document.write(i + ", ");
			}
		}
	}else{
		alert("Ambos numeros son identicos");
		if(inicio%8==0){
			document.write(inicio);
		}
}
