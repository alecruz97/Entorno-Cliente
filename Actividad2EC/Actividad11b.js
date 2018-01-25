
var numero = prompt("Introduzca numero");
alert("Tiene de longitud: " + numero.length);
var aux = 0;


for (i = 0 ; i < numero.length; i++) {
  if(numero.charAt(i)==="."){
    break;
  }else{
    aux+=parseInt(numero.charAt(i));
  }
}
  alert(aux);
