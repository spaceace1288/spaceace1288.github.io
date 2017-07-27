$(document).ready(function(){
  $(".noteButton").click(function(){
    var notes = $(".note")
    notes.animate({height: 'toggle', width: 'toggle'}, "500");
  });
// $(function()  {
//   $(".pikachu").draggable({containment: document})
// } );
  $(".pikachu").draggable({containment:"#background1"})

});
