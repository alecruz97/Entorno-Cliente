actividadExpReg();

function actividadExpReg(){
  var url = prompt("Introduzca url: ");
  var patt = /(http|https):\/\/(www\.)?[A-Za-z]+\.[A-Za-z]{2,3}/;

  alert(patt.test(url));
}


/*var patron1= new RegExp(/[http,https{1}]:\/\/[www?]\.[.*]\.[.*]/,i);
  http,https{1} deberia tener un pipe para que funcione
  /,i esa coma no se que hace ahi
  [www?]\. Eso permite que ocurra un caso parecido a este https://.algo.es lo cual no deberia ser valida

var patron = /^http[s]?\:\/\/\d+\.\d.\d+$/
  \d son digitos y que pinta digitos aqui?

var patt = /^(http\:\/\/)([w]{3})?[\.]?\w*[\.]\w*$/;
  no comprueba el https

var patron = /^http\:\/\/(.+)?\..+\..+$/;
  no comprueba el https

var patron = /http[s]?\:\/\/[w]*\.?[a-z]+\.[es]?[com]?/;
  es y com pueden estar en la misma url
  w puede estar una o mas veces, no 3 exactamente

var patron =/^(http:\/\/ | https:\/\/)[A-Za-z]* \.(com|es)$/;
  no comprueba www
  * --> +
var regurl = new RegExp("^((https|http)://www\.[a-z]+\.[a-z]+)$");+
  faltan las //

var patron = /^(http|https)\:\/\/(www\.)?[a-z0-9]+\.[a-z]$/;
  Esta es la que esta bien

var reg = /^http(s)?\:\/\/w{3}\.[a-z0-9]+\.(es|com)$/;
  El punto (tras las www) indica que el punto esta de forma obligatoria

var patUrl = /^(http|https):\/\/(w{3}\.|)[a-zA-Z0-9]+\.[a-z]{3}$/;
  El pipe despues de las w{3}\.| no esta de estar

var pat = /^(http|https)\:\/\/(www\.)?[a-zA-Z]*\.(es|com)$/;
  El * es 0 o mas por lo tanto puede tener 0 y la url no tenga el nombre del dominio

*/
