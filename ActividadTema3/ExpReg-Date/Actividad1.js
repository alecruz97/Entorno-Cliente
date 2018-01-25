

  actividad1();

  function actividad1(){
    var inicio = new Date();
    var finAno = new Date(2017, 11, 31);
      alert("Hay " + (finAno.getTime() - inicio.getTime()) + " milisegundos de vida");
  }
