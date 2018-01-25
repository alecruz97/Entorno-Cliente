actividad13b();
//limpiarStr("a,,a,,g,as,ad,sd,,as,das");

function actividad13b(){

  var letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
                "q","r","s","t","u","v","w","x","y","z"];
  var valores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    var str = "";
    for( i = 0 ; i < 5; i++){
        str += prompt("Introduce la frase numero " + (i+1) + ": ");
    }

    var str2 = "";

    for( i = 0 ; i < str.length ; i++){
        if(str.charAt(i)  === "," || str.charAt(i) === " "){

        }else{
            str2 += str.charAt(i);
        }
    }
    alert("El string sin espacios es " + str2);
    //alert("Letras --> " + letras);
    var strAux = limpiarStr(str);

    for(i = 0; i < letras.length; i++){
        if(str2.includes(letras[i])){
          //Expresion regular aqui
          var patt = new RegExp(letras[i],"g");
          valores[i] = str2.match(patt).length;
          document.write(letras[i] + " --> " + valores[i] + "<br/>");
        }
    }
}

function limpiarStr(entra){
    strAux = "";

    for(i = 0; i < entra.length; i++){
        if(entra[i] === " " || entra[i] === ","){

        }else{
        strAux += entra[i];
        }
    }
    //alert("Lo que sale de limpiarstr es " + strAux);
    return(strAux);
}
