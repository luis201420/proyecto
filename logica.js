$(document).ready(function(){
  $.get('data.txt', function(data) {
   alert(data);
  }, 'text');
});
