  operacionesBool();

function operacionesBool(){
  var valores = [true, 5 , false, "hola", "adios", 2];
  var bools = [];
  var a = 0;
  for(i = 0; i < valores.length ; i++){

    if(valores[i] == true || valores[i] == false ){
      bools[a] = valores[i];
      //alert(valores[i] + " => " + bools[a]);
      a++;
    }
  }
    alert("true || false = " + bools[0] || bools[1]);
      var op = new Boolean(bools[0]&&bools[1]);
    alert("true && false = " + op);
}
