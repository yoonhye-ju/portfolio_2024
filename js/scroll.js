$(window).scroll(function () {
  let wb = $(this).scrollTop();
  if (wb > 0) {
    $('.txt_my').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 0) {
    $('.txt_little').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 0) {
    $('.txt_yy').css("transform", "").css("opacity", "1");
  }
  if (wb > 0) {
    $('.txt_yoon').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 50) {
    $('.txt_sentence').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 350) {
    $('.introduce').css("transform", "translateY(0px)").css("opacity", "1");
  }
  else{
    $('.introduce').css("transform", "translateY(-50px)").css("opacity", "0");
  }
//자기소개
  if (wb > 450) {
    $('.aboutMe_title').css("transform", "translateX(0px)").css("opacity", "1");
  }
  if (wb > 500) {
    $('.aboutMe_TXT p:nth-of-type(1)').css("transform", "translateX(0px)").css("opacity", "1");
  }
  if (wb > 550) {
    $('.aboutMe_TXT p:nth-of-type(2)').css("transform", "translateX(0px)").css("opacity", "1");
  }
  if (wb > 600) {
    $('.aboutMe_TXT p:nth-of-type(3)').css("transform", "translateX(0px)").css("opacity", "1");
  }
  if (wb > 650) {
    $('.aboutMe_TXT p:nth-of-type(4)').css("transform", "translateX(0px)").css("opacity", "1");
  }
  else{
    $('.aboutMe_title').css("transform", "translateX(100px)").css("opacity", "0")
    $('.aboutMe_TXT p:nth-of-type(1)').css("transform", "translateX(100px)").css("opacity", "0");
    $('.aboutMe_TXT p:nth-of-type(2)').css("transform", "translateX(100px)").css("opacity", "0");
    $('.aboutMe_TXT p:nth-of-type(3)').css("transform", "translateX(100px)").css("opacity", "0");
    $('.aboutMe_TXT p:nth-of-type(4)').css("transform", "translateX(100px)").css("opacity", "0");
    }
//경력
if (wb > 850) {
  $('.Career_TXT').css("transform", "translateX(0px)").css("opacity", "1");
}
if (wb > 900) {
  $('.Career_DD:nth-of-type(1)').css("transform", "translateX(0px)").css("opacity", "1");
}
if (wb > 950) {
  $('.Career_DD:nth-of-type(2)').css("transform", "translateX(0px)").css("opacity", "1");
}
if (wb > 1000) {
  $('.Career_DD:nth-of-type(3)').css("transform", "translateX(0px)").css("opacity", "1");
}
else{
  $('.Career_TXT').css("transform", "translateX(-100px)").css("opacity", "0")
  $('.Career_DD:nth-of-type(1)').css("transform", "translateX(-100px)").css("opacity", "0");
  $('.Career_DD:nth-of-type(2)').css("transform", "translateX(-100px)").css("opacity", "0");
  $('.Career_DD:nth-of-type(3)').css("transform", "translateX(-100px)").css("opacity", "0");
  }
//작업물
if (wb > 1300) {
  $('.workout').css("transform", "translateY(0px)").css("opacity", "1");
}
else{
  $('.workout').css("transform", "translateY(-50px)").css("opacity", "0");
}
if (wb > 1600) {
  $('.workout_list').css("transform", "translateY(0px)").css("opacity", "1");
}
else{
  $('.workout_list').css("transform", "translateY(-50px)").css("opacity", "0");
}
//역량 및 스킬
if (wb > 1900) {
  $('.skill').css("transform", "translateY(0px)").css("opacity", "1");
}
else{
  $('.skill').css("transform", "translateY(-50px)").css("opacity", "0");
}
if (wb > 2300) {
  $('.photoshopBox').css("transform", "translateX(0px)").css("opacity", "1");
}
if (wb > 2300) {
  $('.illustrationBox').css("transform", "translateX(0px)").css("opacity", "1");
}
if (wb > 2300) {
  $('.indesignBox').css("transform", "translateX(0px)").css("opacity", "1");
}
if (wb > 2300) {
  $('.uxuiBox').css("transform", "translateX(0px)").css("opacity", "1");
}
if (wb > 2300) {
  $('.figmaBox').css("transform", "translateX(0px)").css("opacity", "1");
} else{
  $('.photoshopBox').css("transform", "translateX(0px)").css("opacity", "1");
  $('.illustrationBox').css("transform", "translateX(0px)").css("opacity", "1");
  $('.indesignBox').css("transform", "translateX(0px)").css("opacity", "1");
  $('.uxuiBox').css("transform", "translateX(0px)").css("opacity", "1");
  $('.figmaBox').css("transform", "translateX(0px)").css("opacity", "1");
}

  //메일박스
if (wb > 2500) {
  $('.contact').css("transform", "translateY(0px)").css("opacity", "1");
}
else{
  $('.contact').css("transform", "translateY(-50px)").css("opacity", "0");
}
  if ( wb > 2550){
    $('.gmailBox').css("transform", "translateY(0px)").css("opacity", "1")
  }
  if ( wb > 2550){
    $('.kakaoBox').css("transform", "translateY(0px)").css("opacity", "1")
  }
  if ( wb > 2550){
    $('.naverBox').css("transform", "translateY(0px)").css("opacity", "1")
  }
  if ( wb > 2550){
    $('.phoneBox').css("transform", "translateY(0px)").css("opacity", "1")
  }
 else{
  $('.kakaoBox').css("transform", "translateY(-50px)").css("opacity", "0")
  $('.gmailBox').css("transform", "translateY(-50px)").css("opacity", "0")
  $('.naverBox').css("transform", "translateY(-50px)").css("opacity", "0")
  $('.phoneBox').css("transform", "translateY(-50px)").css("opacity", "0")
  }
});