$(function(){
//popup-01이벤트 페이지
  $('.workout_button01').click(function(){
    $('.popWrap_event').stop().fadeIn();    
  });
  
  $('.close').click(function(){
    $('.popWrap_event').stop().fadeOut(); 
  });

  //popup-02 sns
  $('.workout_button02').click(function(){
    $('.popWrap_sns').stop().fadeIn();    
  });
  
  $('.close').click(function(){
    $('.popWrap_sns').stop().fadeOut(); 
  });

    //popup-03 news
    $('.workout_button03').click(function(){
      $('.popWrap_news').stop().fadeIn();    
    });
    
    $('.close').click(function(){
      $('.popWrap_news').stop().fadeOut(); 
    });

    //popup-03 ad
    $('.workout_button04').click(function(){
      $('.popWrap_ad').stop().fadeIn();    
    });
    
    $('.close').click(function(){
      $('.popWrap_ad').stop().fadeOut(); 
    });

  //popup-04웹페이지
$('.workout_button05').click(function(){
  $('.popWrap').stop().fadeIn();    
});

$('.close').click(function(){
  $('.popWrap').stop().fadeOut(); 
});
  
});

