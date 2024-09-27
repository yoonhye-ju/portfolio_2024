/*04 뉴스레터 버튼*/
let slideIndex_news = 1;
showSlides_news(slideIndex_news);
function plusSlides_news(w) {
  showSlides_news(slideIndex_news += w);}
function currentSlide_news(w) {
  showSlides_news(slideIndex_news = w);}
function showSlides_news(w) {
  let p;
  let slides_news = document.getElementsByClassName("Portfolio_Box_news");
  let dots_news = document.getElementsByClassName("dot_news");

  if (w > slides_news.length) {slideIndex_news = 1}    
  if (w < 1) {slideIndex_news = slides_news.length}
  for (p = 0; p < slides_news.length; p++) {
      slides_news[p].style.display = "none";  
  }
  for (p = 0; p < dots_news.length; p++) {
      dots_news[p].className = dots_news[p].className.replace("active_news", "");
  }
  slides_news[slideIndex_news-1].style.display = "block";  
  dots_news[slideIndex_news-1].className += " active_news";
}