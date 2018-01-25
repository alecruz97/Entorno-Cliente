actividad3();

function actividad3(){
    var nac = new Date(1993, 2, 3);
    var hoy = new Date(2017, 9, 7);
    
    alert(nac);
    alert(hoy);
 
    var anioTotal = hoy.getFullYear() - nac.getFullYear();
    var mesTotal = hoy.getMonth() - nac.getMonth();
    var diasTotal = hoy.getDay() - nac.getDay();
    alert("Total anios "+ anioTotal + " total de meses " + mesTotal + " y total de dias " + diasTotal);
}