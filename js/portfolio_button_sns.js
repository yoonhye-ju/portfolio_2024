/*02 sns 버튼*/
let slideIndex_sns = 1;
showSlides_sns(slideIndex_sns);
function plusSlides_sns(s) {
  showSlides_sns(slideIndex_sns += s);}
function currentSlide_sns(s) {
  showSlides_sns(slideIndex_sns = s);}
function showSlides_sns(s) {
  let c;
  let slides_sns = document.getElementsByClassName("Portfolio_Box_sns");
  let dots_sns = document.getElementsByClassName("dot_sns");

  if (s > slides_sns.length) {slideIndex_sns = 1}    
  if (s < 1) {slideIndex_sns = slides_sns.length}
  for (c = 0; c < slides_sns.length; c++) {
      slides_sns[c].style.display = "none";  
  }
  for (c = 0; c < dots_sns.length; c++) {
      dots_sns[c].className = dots_sns[c].className.replace("active", "");
  }
  slides_sns[slideIndex_sns-1].style.display = "block";  
  dots_sns[slideIndex_sns-1].className += " active_sns";
}