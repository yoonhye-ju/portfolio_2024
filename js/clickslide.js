$(function(){
    /*$('.leftArrow').click(function(){
        $('.sns_slide li:last').pretendTo('.sns_slide');
        $('.sns_slide').css('marginLeft', -500);
    });*/
    $('.rightArrow_01').click(function(){
        $('.sns_slide_01 li:first').appendTo('.sns_slide_01');
        $('.sns_slide_01').css('marginLeft', 0);
    });

    $('.rightArrow_02').click(function(){
        $('.sns_slide_02 li:first').appendTo('.sns_slide_02');
        $('.sns_slide_02').css('marginLeft', 0);
    });

    $('.rightArrow_04').click(function(){
        $('.sns_slide_04 li:first').appendTo('.sns_slide_04');
        $('.sns_slide_04').css('marginLeft', 0);
    });
});