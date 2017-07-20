$(document).ready(function(){
  $(".noteButton").click(function(){
    var notes = $(".note")
    notes.animate({height: 'toggle', width: 'toggle'}, "500");
  });
});
