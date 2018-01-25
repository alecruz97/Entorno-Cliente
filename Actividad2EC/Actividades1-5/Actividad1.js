	var nota = parseInt(prompt('Introduce la nota'));
	if (nota >=0 && nota <=10){
		if(nota<5){
			alert("Estas suspenso");
		}else if(nota >= 5 && nota < 7){
			alert("Estas aprobado");
		}else if(nota >=7 && nota < 9){
			alert("Tienes un notable")
		}else if (nota >=9 && nota <=10){
			alert("Tienes un sobresaliente");
		}
	}else
		alert("Nota no valida");
