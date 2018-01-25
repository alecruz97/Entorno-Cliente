//num = 25;
//alert("El numero " + num + " en base octal es: " + num.toString(8));
//alert("El numero " + num + " en base octal, en decimal es " + parseInt(num,8));

var pattOc = /^0\d/;
var pattHex = /^0x/;

var num = prompt("Introduzca numero: ");

if(pattOc.test(num)){
    alert("El numero " + num + " que esta en base octal, en decimal es " + parseInt(num,8));

}else if(pattHex.test(num)){
    alert("El numero " + num + " que esta en base hexadecimal, en decimal es " + parseInt(num,16));

}else{
    
    alert("(C) " + num + " en octal es " + parseInt(num).toString(8) + " y en hexadecimal es " + parseInt(num).toString(16));
   
}