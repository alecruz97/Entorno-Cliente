

act15();
function act15(){
  var frase = prompt("Introduzca frase: ");

  var mayus = false;
  var minus = false;

  for (i = 0 ; i < frase.length; i++){
    if((Number.isNaN(parseInt(frase.charAt(i))))){
    
      if(!(frase.charAt(i) == " ")){

           if(frase.charAt(i) == frase.charAt(i).toLowerCase()){
                minus = true;
            }
            if(frase.charAt(i) == frase.charAt(i).toUpperCase()){
                mayus = true;
            }
        }else{
            continue;
        }
    }else{
        alert(frase.charAt(i) + " es un numero");
        continue;
    }
}
    if(mayus){
        document.write("La frase contiene mayusculas <br />");
    }
    if(minus){
        document.write("La frase contiene minusculas <br />");
    }

  
}
