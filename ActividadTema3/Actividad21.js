
actividad21();

function actividad21(){

    var str = prompt("Introduzca dia de la semana y numero: ");
    var patt = /[lunes|martes|miercoles|jueves|viernes|sabado|domingo]\s([0-2][0-9])|([3][0-1])/;
    alert(str + " --> " + patt.test(str));

}
