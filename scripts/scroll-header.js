var header = document.querySelector(".header");

function headerFixed() {
  var viewportSize = 85 * window.innerHeight / 100;
  var currentViewportSize = window.scrollY;
  if(window.scrollY > viewportSize){
    header.style.position = "fixed";
    header.style.top = 0;
    header.style.zIndex = 999;
  }else{
    header.style.position = "static";
  }
}

window.addEventListener('scroll', headerFixed);
