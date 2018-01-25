
actividad2();

function actividad2(){
  var hoy = new Date(1993,2,3);
  var ini = new Date().getTime();
    
  hoy = ini - hoy;

  var anos = Math.trunc(hoy/31556900000);
  alert("Anios --> " + anos);
  
  hoy = hoy%31556900000;
    
  //var meses = Math.trunc(hoy/2629750000);
  //alert("Meses --> " + meses);
    
    
    
}
