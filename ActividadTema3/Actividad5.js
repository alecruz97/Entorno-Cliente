
    actividad5();

function actividad5(){
  do{
    console.log("-3: Buenos Aires, Asuncion, Brasilia, Montevideo");
    console.log("-2: Atlantico Central");
    console.log("-1: Azores");
    console.log(" 0: Hora del meridiano de Greenwich, Londres, Dublin");
    console.log("+1: Paris, Madrid, Barcelona, Roma");
    console.log("+2: El Cairo");
    console.log("+3: Nairobi");
    console.log("Pulse s para salir.");

    var texto = prompt("Introduzca cadena de la zona horaria: ").trim();
    var hoy = new Date();
    var correcto = true;

      switch(texto){
      case("-3"): alert("En Buenos Aires, Asuncion, Brasilia y Montevideo son las " + horasBien(texto) + " horas y " + hoy.getMinutes(texto) + " minutos");
                  break;
      case("-2"): alert("En el Atlantico son las " + horasBien(texto) + " horas y " + hoy.getUTCMinutes(texto) + " minutos");
                  break;
      case("-1"): alert("En Azores son las " + horasBien(texto) + " horas y " + hoy.getUTCMinutes(texto) + " minutos");
                  break;
      case("0"): alert("En el merdiano de Greenwich, Londres y Dublin son las " + horasBien(texto) + " horas y " + hoy.getUTCMinutes(texto) + " minutos");
                  break;
      case("+1"): alert("En Paris, Madrid, Barcelona y Roma son las " + horasBien(texto) + " horas y " + hoy.getUTCMinutes(texto) + " minutos");
                  break;
      case("+2"): alert("En el Cairo son las " + horasBien(texto) + " horas y " + hoy.getUTCMinutes(texto) + " minutos");
                  break;
      case("+3"): alert("En Nairobi son las " + horasBien(texto) + " horas y " + hoy.getUTCMinutes(texto) + " minutos");
                  break;
       case("s"): correcto = false;
                  break;
         default: alert("Equivocado");

                  break;
    }
  }while(correcto);
}


 function horasBien(texto){

    if(parseInt(texto) === 0){
        //alert("entra en londres");
        var hora = new Date().getHours();
        hora = (parseInt(hora) - 1);
            return hora;
    }else if (parseInt(texto) === 1){
        //alert("españa");
        var hora = new Date().getHours() - 1;
        hora = (parseInt(hora) +  parseInt(texto));
            return hora;
    }else{
        var hora = new Date().getHours() - 2;
        hora = (parseInt(hora) +  parseInt(texto));
            return hora;
    }
 }
