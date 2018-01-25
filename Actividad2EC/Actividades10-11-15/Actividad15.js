var frase = prompt("Introduzca la frase");
var bool = true;
if(frase.length%2==0){
  alert("La frase no es palindroma (numero par de caracteres.)");
}else{
  for(i = 0; i < frase.length; i++){
      if(frase.charAt(i) === frase.charAt((frase.length-i-1))) {

      }else{
        bool = false;
        break;
      }
  }
  //Hace que sea capicua pero no palindroma
  if(bool){
    alert("La frase es palindroma");
  }else{
    alert("La frase no es palindroma");
  }
}
