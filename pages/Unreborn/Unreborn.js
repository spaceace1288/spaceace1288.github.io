'use strict'
$(document).ready(function(){
  myStartFunction();
  $(".noteButton").click(function(){
    var notes = $(".note")
    notes.animate({height: 'toggle', width: 'toggle'}, "500");
  // var TDImg = document.getElementById("DynamicTDImg").src;
  // TDImg.src = "images/Unreborn TD Screen2Shop.PNG"

  });
// $(function()  {
//   $(".pikachu").draggable({containment: document})
// } );
  $(".pikachu").draggable({containment:"#background1"})
  $(".mechanics").draggable({containment:"#background1"})
  var TDImgs = ["images/Unreborn TD Screen.PNG", "images/Unreborn TD Screen2Shop.PNG", "images/Unreborn TD Screen3World.PNG"]
  var TDImg = 0;

var myVar;

function myStartFunction() {
    myVar = setInterval(function(){ TDImgChange("First parameter", "Second parameter"); }, 3000);
}

function TDImgChange(param1, param2) {
    //document.getElementById("demo").innerHTML += "Hello ";
    $("#DynamicTDImg").attr("src", TDImgs[TDImg]);
      switch(TDImg)  {
      case 0:
      TDImg++;
      break;
      case 1:
      TDImg++;
      break;
      case 2:
      TDImg = 0;
      break;
      }

    // document.getElementById("demo2").innerHTML = "Parameters passed to alertFunc(): <br>"
    // + param1 + "<br>" + param2 + "<br>";
}

function myStopFunction() {
    clearInterval(myVar);
}


//Initial W3Schools example
// var myVar;
//
// function myStartFunction() {
//     myVar = setInterval(function(){ alertFunc("First parameter", "Second parameter"); }, 3000);
// }
//
// function alertFunc(param1, param2) {
//     document.getElementById("demo").innerHTML += "Hello ";
//
//     document.getElementById("demo2").innerHTML = "Parameters passed to alertFunc(): <br>"
//     + param1 + "<br>" + param2 + "<br>";
// }
//
// function myStopFunction() {
//     clearInterval(myVar);
// }
//Below function causes uncanny garbage collection...
//   function TDImgChange() {
//   //$("#DynamicTDImg").delay(3000).attr("src", TDImgs[TDImg]);
//   $("#DynamicTDImg").delay(2000).attr("src", TDImgs[TDImg]);
//   switch(TDImg)  {
//   case 0:
//   TDImg++;
//   break;
//   case 1:
//   TDImg++;
//   break;
//   case 2:
//   TDImg = 0;
//   break;
//   }
//   setInterval(function(){TDImgChange();}, 3000)
//   return false;
// }
// TDImgChange();

  // var TDImg = document.getElementById("DynamicTDImg").src;
  // TDImg.src = "images/Unreborn TD Screen2Shop.PNG";
});
