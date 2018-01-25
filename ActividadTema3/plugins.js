plugins();

function plugins(){
  var plug = navigator.plugins;
  document.write("La lista de plugins instalados son: <br/>");

  for(i = 0; i < plug.length; i++){
    for (valor in plug[i]){
      document.write(valor + " ---> " + plug[i][valor] + "<br/>");
      }
    }
  }




  /*for(i = 0; i < plug.length; i++){
    document.write("Nombre : " + plug[i].name + ", Filename: " + plug[i].Filename +  ", descricion: " + plug[i].description +  "<br/>");
  }
  document.write("Nombre: " + plug[i].name);
  if(plug[i].filename != ""){
    document.write(" , Filename: " + plug[i].filename);
  }
  if(plug[i].description != ""){
    document.write(" , Descripcion: " + plug[i].description);
  }
  document.write("<br>");

  */
