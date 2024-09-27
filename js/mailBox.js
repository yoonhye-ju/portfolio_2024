$(function () {
  /*지메일 버튼*/
  $('.gmailBox').click(function () {
    $('.gmail').css('margin-left', '300px');
    $('.gmailBox').css('width', '400px');
    $('.gmailBox').css('transition', 'all 0.5s ease-in-out');
    $('.gmail_ID').show(1000);

    $('.kakao').css('margin-left', '0px');
    $('.kakaoBox').css('width', '65px');
    $('.kakaoBox').css('transition', 'all 0.5s ease-in-out');
    $('.kakao_ID').hide(1000);

    $('.naver').css('margin-left', '0px');
    $('.naverBox').css('width', '64px');
    $('.naverBox').css('transition', 'all 0.5s ease-in-out');
    $('.naver_ID').hide(1000);

    $('.phone').css('margin-left', '0px');
    $('.phoneBox').css('width', '65px');
    $('.phoneBox').css('transition', 'all 0.5s ease-in-out');
    $('.phoneNumber').hide(1000);
  });

  /*카카오 버튼*/
  $('.kakaoBox').click(function () {
    $('.kakao').css('margin-left', '300px');
    $('.kakaoBox').css('width', '400px');
    $('.kakaoBox').css('transition', 'all 0.5s ease-in-out');
    $('.kakao_ID').show(1000);

    $('.gmail').css('margin-left', '0px');
    $('.gmailBox').css('width', '65px');
    $('.gmailBox').css('transition', 'all 0.5s ease-in-out');
    $('.gmail_ID').hide(1000);

    $('.naver').css('margin-left', '0px');
    $('.naverBox').css('width', '64px');
    $('.naverBox').css('transition', 'all 0.5s ease-in-out');
    $('.naver_ID').hide(1000);

    $('.phone').css('margin-left', '0px');
    $('.phoneBox').css('width', '65px');
    $('.phoneBox').css('transition', 'all 0.5s ease-in-out');
    $('.phoneNumber').hide(1000);
  });

  /*네이버 버튼*/
  $('.naverBox').click(function () {
    $('.naver').css('margin-left', '300px');
    $('.naverBox').css('width', '400px');
    $('.naverBox').css('transition', 'all 0.5s ease-in-out');
    $('.naver_ID').show(1000);

    $('.kakao').css('margin-left', '0px');
    $('.kakaoBox').css('width', '65px');
    $('.kakaoBox').css('transition', 'all 0.5s ease-in-out');
    $('.kakao_ID').hide(1000);

    $('.gmail').css('margin-left', '0px');
    $('.gmailBox').css('width', '65px');
    $('.gmailBox').css('transition', 'all 0.5s ease-in-out');
    $('.gmail_ID').hide(1000);

    $('.phone').css('margin-left', '0px');
    $('.phoneBox').css('width', '65px');
    $('.phoneBox').css('transition', 'all 0.5s ease-in-out');
    $('.phoneNumber').hide(1000);
  });

  /*핸드폰 버튼*/
  $('.phoneBox').click(function () {
    $('.phone').css('margin-left', '300px');
    $('.phoneBox').css('width', '400px');
    $('.phoneBox').css('transition', 'all 0.5s ease-in-out');
    $('.phoneNumber').show(1000);

    $('.kakao').css('margin-left', '0px');
    $('.kakaoBox').css('width', '65px');
    $('.kakaoBox').css('transition', 'all 0.5s ease-in-out');
    $('.kakao_ID').hide(1000);

    $('.gmail').css('margin-left', '0px');
    $('.gmailBox').css('width', '65px');
    $('.gmailBox').css('transition', 'all 0.5s ease-in-out');
    $('.gmail_ID').hide(1000);

    $('.naver').css('margin-left', '0px');
    $('.naverBox').css('width', '65px');
    $('.naverBox').css('transition', 'all 0.5s ease-in-out');
    $('.naver_ID').hide(1000);
  });
});