
actividad18();

function actividad18(){
  var patt = new RegExp(/^\([0-9]{1,3}\,[0-9]{1,3}\)$/);
  alert(patt.test("(511,13)"));
}
