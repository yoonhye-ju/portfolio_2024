/*01 이벤트 버튼*/
let slideIndex_event = 1;
showSlides_event(slideIndex_event);
function plusSlides_event(m) {
  showSlides_event(slideIndex_event += m);}
function currentSlide_event(m) {
  showSlides_event(slideIndex_event = m);}
function showSlides_event(m) {
  let e;
  let slides_event = document.getElementsByClassName("Portfolio_Box_event");
  let dots_event = document.getElementsByClassName("dot_event");

  if (m > slides_event.length) {slideIndex_event = 1}    
  if (m < 1) {slideIndex_event = slides_event.length}
  for (e = 0; e < slides_event.length; e++) {
      slides_event[e].style.display = "none";  
  }
  for (e = 0; e < dots_event.length; e++) {
      dots_event[e].className = dots_event[e].className.replace("active", "");
  }
  slides_event[slideIndex_event-1].style.display = "block";  
  dots_event[slideIndex_event-1].className += " active_event";
}