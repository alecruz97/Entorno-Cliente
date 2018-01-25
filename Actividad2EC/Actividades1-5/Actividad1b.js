var nota = prompt("Introduzca nota");

  if(nota > 0 && nota <=10){
  nota >= 5 ? (nota >=7 ? (nota >= 9 ? alert("sobresaliente") : alert("Notable") )  : alert("Suficiente")) : alert("Suspenso");
}else{
  alert("Nota no valida");
}
