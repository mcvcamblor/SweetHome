'use strict';

//Lo que ocurre cuando haces click en el botón de Madrid o Barcelona

var buttonMadrid = document.querySelector(".btn-madrid");
var buttonBarcelona = document.querySelector(".btn-barcelona");
var mapMadrid = document.querySelector(".map-madrid");
var mapBarcelona = document.querySelector(".map-barcelona");

function changeMapMadrid(){
  buttonMadrid.classList.add("btn-focus");
  buttonBarcelona.classList.remove("btn-focus");
  mapMadrid.classList.add("on");
  mapBarcelona.classList.add("off");
  mapMadrid.classList.remove("off");
  mapBarcelona.classList.remove("on");
}

function changeMapBarcelona(){
  buttonBarcelona.classList.add("btn-focus");
  buttonMadrid.classList.remove("btn-focus");
  mapMadrid.classList.add("off");
  mapBarcelona.classList.add("on");
  mapMadrid.classList.remove("on");
  mapBarcelona.classList.remove("off");
}

buttonMadrid.addEventListener("click", changeMapMadrid);
buttonBarcelona.addEventListener("click", changeMapBarcelona);


//Lo que ocurre cuando cambias el dinero
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
