$(document).ready(function(){
  $.get('file_to_read.txt', function(data) {
   alert(data);
  }, 'text');
});
