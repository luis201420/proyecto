/*function escribir(){
  var txtFile = "data.txt";
  var file = new File([""],txtFile);
  var str = "bien y tu?";

  file.open("w"); // open file with write access
  file.writeln("First line of text");
  file.writeln("Second line of text " + str);
  file.write(str);
  file.close();
}*/

function mostrar(data){
  for(var i=0; i<data.length;i++){
    $("#contenido").append("<p>Algo</p>");
  }
}

$(document).ready(function(){
  //escribir();
  $.get('data.txt', function(data) {
   alert(data);
  }, 'text');
});
