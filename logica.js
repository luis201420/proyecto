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
  var nombre = "";
  var link = "";
  var val = 0;
  for(var i=0; i<data.length;i++){
    if(data[i]!='\n'){
      if(data[i]=='-'){val=1;}
      
      if(val==0){nombre=nombre+data[i];}
      else{link=link+data[i];}
    }
    else{
      $("#contenido").append("<h1>"+nombre+"</h1><h3>"+link+"</h3>");
      info = "";
      val=0;
    }
  }
}

$(document).ready(function(){
  //escribir();
  $.get('data.txt', function(data) {
   mostrar(data);
  }, 'text');
});
