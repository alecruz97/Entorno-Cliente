
 barratareas();

 function barratareas(){
  var totalAltura = screen.height;
  var conBarra = screen.availHeight;
  var ancho = screen.width;
  var anchoBarra = screen.availWidth;

  document.write("Altura de la pantalla: " + totalAltura + "<br/>");
  document.write("Altura sin la barra de tareas: " + conBarra + "<br/>");

  document.write("El tamaño de la barra de tareas es de " + (totalAltura - conBarra) + " pixeles <br/>");

  document.write("Ancho total de la pantalla: " + ancho + "<br/>");
  document.write("Ancho sin la barra de tareas: " + anchoBarra + "<br/>");


  document.write("El tamaño de la barra de tareas (a lo ancho) es de " + (ancho-anchoBarra) + " pixeles<br/>");
 }
