$(function(){
  //이벤트 페이지-01
   $('.event_Monitor_01').mouseover(function(){
    $('.event_EV_01').css('transform', 'translateY(-2450px)')
   });
   $('.event_Monitor_01').mouseout(function(){
    $('.event_EV_01').css('transform', 'translateY(0px)')
   });

   //이벤트 페이지-02
    $('.event_Monitor_02').mouseover(function(){
     $('.event_EV_02').css('transform', 'translateY(-2010px)')
    });
    $('.event_Monitor_02').mouseout(function(){
     $('.event_EV_02').css('transform', 'translateY(0px)')
    });

   //이벤트 페이지-03
   $('.event_Monitor_03').mouseover(function(){
    $('.event_EV_03').css('transform', 'translateY(-2875px)')
   });
   $('.event_Monitor_03').mouseout(function(){
    $('.event_EV_03').css('transform', 'translateY(0px)')
   });

   //이벤트 페이지-04
   $('.event_Monitor_04').mouseover(function(){
    $('.event_EV_04').css('transform', 'translateY(-2450px)')
   });
   $('.event_Monitor_04').mouseout(function(){
    $('.event_EV_04').css('transform', 'translateY(0px)')
   });

   //이벤트 페이지-05
   $('.event_Monitor_05').mouseover(function(){
    $('.event_EV_05').css('transform', 'translateY(-2380px)')
   });
   $('.event_Monitor_05').mouseout(function(){
    $('.event_EV_05').css('transform', 'translateY(0px)')
   });


      //sns 페이지-03
      $('.sns_Monitor').mouseover(function(){
        $('.sns_EV').css('transform', 'translateY(-450px)')
       });
       $('.sns_Monitor').mouseout(function(){
        $('.sns_EV').css('transform', 'translateY(0px)')
       });


  //뉴스레터 페이지-01
  $('.news_Monitor_01').mouseover(function(){
    $('.news_EV_01').css('transform', 'translateY(-1420px)')
   });
   $('.news_Monitor_01').mouseout(function(){
    $('.news_EV_01').css('transform', 'translateY(0px)')
   });
     //뉴스레터 페이지-02
  $('.news_Monitor_02').mouseover(function(){
    $('.news_EV_02').css('transform', 'translateY(-1420px)')
   });
   $('.news_Monitor_02').mouseout(function(){
    $('.news_EV_02').css('transform', 'translateY(0px)')
   });
      //뉴스레터 페이지-03
  $('.news_Monitor_03').mouseover(function(){
    $('.news_EV_03').css('transform', 'translateY(-1520px)')
   });
   $('.news_Monitor_03').mouseout(function(){
    $('.news_EV_03').css('transform', 'translateY(0px)')
   });
      //뉴스레터 페이지-04
      $('.news_Monitor_04').mouseover(function(){
        $('.news_EV_04').css('transform', 'translateY(-1375px)')
       });
       $('.news_Monitor_04').mouseout(function(){
        $('.news_EV_04').css('transform', 'translateY(0px)')
       });

//외부광고 페이지
$('.ad_Monitor_01').mouseover(function(){
$('.ad_EV_01').css('transform', 'translateY(-3380px)')
  });
$('.ad_Monitor_01').mouseout(function(){
 $('.ad_EV_01').css('transform', 'translateY(0px)')
  });


    //온라인서점
    $('.library_Monitor').mouseover(function(){
      $('.library').css('transform','translateY(-1230px)')
    });
    $('.library_Monitor').mouseout(function(){
      $('.library').css('transform','translateY(0px)')
    });
    $('.subPage').click(function () {
      $('.library').css('display', 'none');
      $('.librarySub').css('display', 'block');
      $('.subPage').hide();
      $('.mainPage').show();
  
      $('.library_Monitor').mouseover(function () {
        $('.librarySub').css('transform', 'translateY(-1100px)')
      });
      $('.library_Monitor').mouseout(function () {
        $('.librarySub').css('transform', 'translateY(0px)')
      });
    });
    $('.mainPage').click(function () {
      $('.library').css('display', 'block');
      $('.librarySub').css('display', 'none');
      $('.mainPage').hide();
      $('.subPage').show();
    });

    //WWF
    $('.WWF_Monitor').mouseover(function(){
      $('.WWF').css('transform','translateY(-1190px)')
    });
    $('.WWF_Monitor').mouseout(function(){
      $('.WWF').css('transform','translateY(0px)')
    });
    $('.WWF_tablet').mouseover(function(){
      $('.WWFtablet').css('transform','translateY(-1495px)')
    });
    $('.WWF_tablet').mouseout(function(){
      $('.WWFtablet').css('transform','translateY(0px)')
    });
    $('.WWF_mobile').mouseover(function(){
      $('.WWFmobile').css('transform','translateY(-1489px)')
    });
    $('.WWF_mobile').mouseout(function(){
      $('.WWFmobile').css('transform','translateY(0px)')
    });

    $('.subPage').click(function () {
      $('.WWF').css('display', 'none');
      $('.WWFsubPC').css('display', 'block');
      $('.WWFtablet').css('display', 'none');
      $('.WWFsubTablet').css('display', 'block');
      $('.WWFmobile').css('display', 'none');
      $('.WWFsubMobile').css('display', 'block');
      $('.subPage').hide();
      $('.mainPage').show();
  
      $('.WWF_Monitor').mouseover(function () {
        $('.WWFsubPC').css('transform', 'translateY(-433px)')
      });
      $('.WWF_Monitor').mouseout(function () {
        $('.WWFsubPC').css('transform', 'translateY(0px)')
      });
      $('.WWF_tablet').mouseover(function () {
        $('.WWFsubTablet').css('transform', 'translateY(-365px)')
      });
      $('.WWF_tablet').mouseout(function () {
        $('.WWFsubTablet').css('transform', 'translateY(0px)')
      });
      $('.WWF_mobile').mouseover(function () {
        $('.WWFsubMobile').css('transform', 'translateY(-380px)')
      });
      $('.WWF_mobile').mouseout(function () {
        $('.WWFsubMobile').css('transform', 'translateY(0px)')
      });
    });
    $('.mainPage').click(function () {
      $('.WWF').css('display', 'block');
      $('.WWFsubPC').css('display', 'none');
      $('.WWFtablet').css('display', 'block');
      $('.WWFsubTablet').css('display', 'none');
      $('.WWFmobile').css('display', 'block');
      $('.WWFsubMobile').css('display', 'none');
      $('.subPage').show();
      $('.mainPage').hide();
    });


    //만개의레시피
    $('.tenThousand_Monitor').mouseover(function(){
      $('.recipe').css('transform','translateY(-847px)')
    });
    $('.tenThousand_Monitor').mouseout(function(){
      $('.recipe').css('transform','translateY(0px)')
    });
  
    $('.tenThousand_tablet').mouseover(function(){
      $('.recipetablet').css('transform','translateY(-1110px)')
    });
    $('.tenThousand_tablet').mouseout(function(){
      $('.recipetablet').css('transform','translateY(0px)')
    });
  
    $('.tenThousand_mobile').mouseover(function(){
      $('.recipemobile').css('transform','translateY(-1310px)')
    });
    $('.tenThousand_mobile').mouseout(function(){
      $('.recipemobile').css('transform','translateY(0px)')
    });

  $('.subPage').click(function () {
    $('.recipe').css('display', 'none');
    $('.recipeSub').css('display', 'block');
    $('.recipetablet').css('display', 'none');
    $('.recipetabletSub').css('display', 'block');
    $('.recipemobile').css('display', 'none');
    $('.recipemobileSub').css('display', 'block');
    $('.subPage').hide();
    $('.mainPage').show();

    $('.tenThousand_Monitor').mouseover(function () {
      $('.recipeSub').css('transform', 'translateY(-666px)')
    });
    $('.tenThousand_Monitor').mouseout(function () {
      $('.recipeSub').css('transform', 'translateY(0px)')
    });
    $('.tenThousand_tablet').mouseover(function () {
      $('.recipetabletSub').css('transform', 'translateY(-689px)')
    });
    $('.tenThousand_tablet').mouseout(function () {
      $('.recipetabletSub').css('transform', 'translateY(0px)')
    });
    $('.tenThousand_mobile').mouseover(function () {
      $('.recipemobileSub').css('transform', 'translateY(-724px)')
    });
    $('.tenThousand_mobile').mouseout(function () {
      $('.recipemobileSub').css('transform', 'translateY(0px)')
    });
  });
  $('.mainPage').click(function () {
    $('.recipe').css('display', 'block');
    $('.recipeSub').css('display', 'none');
    $('.recipetablet').css('display', 'block');
    $('.recipetabletSub').css('display', 'none');
    $('.recipemobile').css('display', 'block');
    $('.recipemobileSub').css('display', 'none');
    $('.subPage').show();
    $('.mainPage').hide();
  });

//경복궁
$('.korea_Monitor').mouseover(function(){
  $('.korea').css('transform','translateY(-1160px)')
});
$('.korea_Monitor').mouseout(function(){
  $('.korea').css('transform','translateY(0px)')
});

  //조말론
  $('.perfume_Monitor').mouseover(function () {
    $('.perfume').css('transform', 'translateY(-466px)')
  });
  $('.perfume_Monitor').mouseout(function () {
    $('.perfume').css('transform', 'translateY(0px)')
  });
  $('.subPage').click(function () {
    $('.perfume').css('display', 'none');
    $('.perfumeSub').css('display', 'block');
    $('.subPage').hide();
    $('.mainPage').show();

    $('.perfume_Monitor').mouseover(function () {
      $('.perfumeSub').css('transform', 'translateY(-1500px)')
    });
    $('.perfume_Monitor').mouseout(function () {
      $('.perfumeSub').css('transform', 'translateY(0px)')
    });
  });
  $('.mainPage').click(function () {
    $('.perfume').css('display', 'block');
    $('.perfumeSub').css('display', 'none');
    $('.mainPage').hide();
    $('.subPage').show();
  });
});