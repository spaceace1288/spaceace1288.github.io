'use strict'
$(document).ready(function(){
  myStartFunction();
  $(".noteButton").click(function(){
    var notes = $(".note")
    notes.animate({height: 'toggle', width: 'toggle'}, "500");
  // var UnrebornImg = document.getElementById("DynamicUnrebornImg").src;
  // UnrebornImg.src = "images/Unreborn TD Screen2Shop.PNG"

  });
// $(function()  {
//   $(".pikachu").draggable({containment: document})
// } );
  $(".pikachu").draggable({containment:"#background1"})
  var UnrebornImgs = ["images/UnrebornScreen1.png", "images/Unreborn TD Screen.PNG", "images/Unreborn TD Screen2Shop.PNG", "images/Unreborn TD Screen3World.PNG", "images/Unreborn AC Screen.PNG"]
  var UnrebornImg = 0;

var myVar;

function myStartFunction() {
    myVar = setInterval(function(){ UnrebornImgChange("First parameter", "Second parameter"); }, 3000);
}

function UnrebornImgChange(param1, param2) {
    //document.getElementById("demo").innerHTML += "Hello ";
    $("#DynamicUnrebornImg").attr("src", UnrebornImgs[UnrebornImg]);
      switch(UnrebornImg)  {
      case 0:
      UnrebornImg++;
      break;
      case 1:
      UnrebornImg++;
      break;
      case 2:
      UnrebornImg++;
      break;
      case 3:
      UnrebornImg++;
      break;
      case 4:
      UnrebornImg = 0;
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
//   function UnrebornImgChange() {
//   //$("#DynamicUnrebornImg").delay(3000).attr("src", UnrebornImgs[UnrebornImg]);
//   $("#DynamicUnrebornImg").delay(2000).attr("src", UnrebornImgs[UnrebornImg]);
//   switch(UnrebornImg)  {
//   case 0:
//   UnrebornImg++;
//   break;
//   case 1:
//   UnrebornImg++;
//   break;
//   case 2:
//   UnrebornImg = 0;
//   break;
//   }
//   setInterval(function(){UnrebornImgChange();}, 3000)
//   return false;
// }
// UnrebornImgChange();

  // var UnrebornImg = document.getElementById("DynamicUnrebornImg").src;
  // UnrebornImg.src = "images/Unreborn TD Screen2Shop.PNG";
});
