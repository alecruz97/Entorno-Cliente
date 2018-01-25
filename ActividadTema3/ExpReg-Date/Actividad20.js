actividad20();

function actividad20(){

    var matri = prompt("Inserte matricula: ");
    var patt = new RegExp(/^[0-9]{4}\s[^AEIOU0-9]{3}/);
    alert(matri + " --> " + patt.test(matri));
}