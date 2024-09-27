const staticImg="..img/close.png";
const gifImg ="..img/close.gif";

const image = document.querySelector('.close');
image.src = staticImg;

image.addEventListener("mouseenter", function() {
  image.src = gifImg;
});
image.addEventListener("mouseleave", function() {
  image.src = staticImg;
});