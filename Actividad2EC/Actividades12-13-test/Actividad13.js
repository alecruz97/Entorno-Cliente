
  //compararString("alara","clara");
  stringMayor();

function stringMayor(){
  var cosas = [true, 5, false, "hola", "adios", 1];
  var str1 = [];
  var a = 0;
  for( i = 0; i < cosas.length; i++){
    if(typeof cosas[i] === "string"){
      str1[a] = cosas[i];
      alert( cosas[i] + " => " + str1[a] );
      a++;
    }
  }

  if(compararString(str1[0], str1[1])){
    alert("El string mayor es " + str1[0]);
  }else if(str1[1] > str1[0]){
    aler("El string mayor es " + str1[1]);
  }else{
    alert("Ambos string son iguales");
  }

}

function compararString(a, b){
  for(i = 0 ; i < Math.max(a.length, b.length); i++){
    alert(a.charAt(i) + " comparado con " + b.charAt(i));
    if(a.charAt(i) > b.charAt(i)){
      alert(a);
      return true;
      break;
    }else if(a.charAt(i) < b.charAt(i)){
      alert(b);
      return false;
      break;
    }
  }
}
