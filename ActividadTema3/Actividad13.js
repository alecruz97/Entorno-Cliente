
act13();


function act13(){


  var texto1 = prompt("Introduzca una cadena sin ñ y sin tildes.");
  var texto2 = prompt("Introduzca una cadena sin ñ y sin tildes.");
  var texto3 = prompt("Introduzca una cadena sin ñ y sin tildes.");
  var texto4 = prompt("Introduzca una cadena sin ñ y sin tildes.");
  var texto5 = prompt("Introduzca una cadena sin ñ y sin tildes.");

  var textotal = texto1.split(" ") + texto2.split(" ") + texto3.split(" ") +
                 texto4.split(" ") + texto5.split(" ");

  var letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
                "q","r","s","t","u","v","w","x","y","z"];
  var valores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  alert(textotal);

  for (i = 0 ; i < textotal.length; i++){
    var num = textotal.charCodeAt(i);
    valores[num%97] = valores[num%97] + 1;
  }

  for (i = 0; i < letras.length; i++){
    if(valores[i] != 0){
      console.log(letras[i] + " -> " + valores [i]);
    }else{
      continue;
        }
  }
}
