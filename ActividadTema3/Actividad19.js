actividad19();

function actividad19(){

 var str = "23:14:12";
 var patt = new RegExp(/^([0-1][0-9]|[0-2][0-3]):([0-6][0-9]|[0-6][0-9](:[0-6][0-9])?)$/)
 alert(patt.test(str));
 }
