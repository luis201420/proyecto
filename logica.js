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
  var info = "";
  for(var i=0; i<data.length;i++){
    if(data[i]!='\n'){
      info=info+data[i];
    }
    else{
      $("#contenido").append("<p>"+info+"</p>");
      info = "";
    }
  }
}

$(document).ready(function(){
  //escribir();
  $.get('data.txt', function(data) {
   mostrar(data);
  }, 'text');
});
