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
  var nombre = ""; /* variable para almacenar el nombre o descripcion de la pagina*/
  var link = ""; // guarda la URL de la pagina
  var val = 0; // mira si se tiene que guardar el nombre o la url

  for(var i=0; i<data.length;i++){ //recorremos la cadena (archivo)
    if(data[i]!='\n'){ // hasta que acabe la linea
      if(data[i]=='-'){val=1;} // cambia la validacion para que lea ahora la URL
      else{
        if(val==0){nombre=nombre+data[i];} // si la validacion esta en 0 leera el nombre
        else{link=link+data[i];} // caso contrario leera  la URL
      }
    }
    else{
      // mostrara los datos recolectados del archivo para poder acceder a ellos
      //$("#info").append("<h1>"+nombre+"</h1><a href=\""+link+"\">"+link+"</a>");
      $("#info").append("<tr><td>"+nombre+"</td><td>"+"<a href=\""+link+"\">"+link+"</a>"+"</td><td>12/12/12</td></tr>");
      nombre = link = ""; //receteamos los valores para la nueva linea
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
