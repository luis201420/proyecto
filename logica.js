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
  var fecha = ""; // guardar la fecha de la pagina guardada
  var val = 0; // mira si se tiene que guardar el nombre o la url

  for(var i=0; i<data.length;i++){ //recorremos la cadena (archivo)
    if(data[i]!='\n'){ // hasta que acabe la linea
      if(data[i]=='-' && data[i+1]==' '){val=val+1;} // cambia la validacion para que lea ahora la URL
      else{
        if(val==0){nombre=nombre+data[i];} // si la validacion esta en 0 leera el nombre
        else if(val==1){link=link+data[i];} // si es 1 leera  la URL
        else{fecha=fecha+data[i];} // o en caso contrario leera la fecha
      }
    }
    else{
      // mostrara los datos recolectados del archivo para poder acceder a ellos
      $("#info").append("<tr><td>"+nombre+"</td><td>"+"<a href=\""+link+"\">"+link+"</a>"+"</td><td>"+fecha+"</td></tr>");
      nombre = link = fecha = ""; //receteamos los valores para la nueva linea
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
