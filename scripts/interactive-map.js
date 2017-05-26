'use strict';
var inputMoney = document.querySelector(".range-one");
var colormap = document.querySelector(".st13");
colormap.setAttribute("fill", "#7A8417");

var changeColor = function(){
  var controlOne = inputMoney.value;
  if (controlOne < 1000){
    colormap.setAttribute("fill", "green");
  }else if (controlOne >= 1000 && controlOne < 2000){
    colormap.setAttribute("fill", "yellow");
  }else{
    colormap.setAttribute("fill", "red");
  }
};

inputMoney.addEventListener("input", changeColor);
