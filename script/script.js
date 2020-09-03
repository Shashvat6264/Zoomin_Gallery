
$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    $(".gal-img:nth-child(1)").css({
        transform: 'translate3d('+(-50-(scroll)/5)+'%, '+(-50-(scroll)/5)+'%,0) scale('+(0.2+(scroll/500))+')',
        opacity: 0.2 + scroll/150,
    });
    $(".gal-img:nth-child(2)").css({
        transform: 'translate3d('+(-45+(scroll-200)/5)+'%, '+(-50-(scroll-200)/5)+'%,0) scale('+(0.2+((scroll-200)/500))+')',
        opacity: 0.2 + (scroll-200)/150,
    });
    $(".gal-img:nth-child(3)").css({
        transform: 'translate3d('+(-50+(scroll-350)/5)+'%, '+(-50+(scroll-350)/2)+'%,0) scale('+(0.2+((scroll-350)/500))+')',
        opacity: 0.2 + (scroll-350)/150,
    });
    $(".gal-img:nth-child(4)").css({
        transform: 'translate3d('+(-70-(scroll-500)/2)+'%, '+(-45+(scroll-500)/5)+'%,0) scale('+(0.2+((scroll-500)/500))+')',
        opacity: 0.2 + (scroll-500)/150,
    });
    $(".gal-img:nth-child(5)").css({
        transform: 'translate3d('+(-55-(scroll-700)/5)+'%, '+(-50-(scroll-700)/3)+'%,0) scale('+(0.2+((scroll-700)/500))+')',
        opacity: 0.2 + (scroll-700)/150,
    });
    $(".gal-img:nth-child(6)").css({
        transform: 'translate3d('+(-40+(scroll-950)/2)+'%, '+(-50+(scroll-950)/5)+'%,0) scale('+(0.2+((scroll-950)/500))+')',
        opacity: 0.2 + (scroll-950)/150,
    });
    $(".gal-img:nth-child(7)").css({
        transform: 'translate3d('+(-40+(scroll-1100)/2)+'%, '+(-50-(scroll-1100)/10)+'%,0) scale('+(0.2+((scroll-1100)/500))+')',
        opacity: 0.2 + (scroll-1100)/150,
    });
    $(".gal-img:nth-child(8)").css({
        transform: 'translate3d('+(-50-(scroll-1300)/8)+'%, '+(-50-(scroll-1300)/5)+'%,0) scale('+(0.2+((scroll-1300)/500))+')',
        opacity: 0.2 + (scroll-1300)/150,
    });
    $(".gal-img:nth-child(9)").css({
        transform: 'translate3d('+(-45+(scroll-1500)/3)+'%, '+(-50+(scroll-1500)/5)+'%,0) scale('+(0.2+((scroll-1500)/500))+')',
        opacity: 0.2 + (scroll-1500)/150,
    });
    $(".gal-img:nth-child(10)").css({
        transform: 'translate3d('+(-50-(scroll-1650)/5)+'%, '+(-50+(scroll-1650)/5)+'%,0) scale('+(0.2+((scroll-1650)/500))+')',
        opacity: 0.2 + (scroll-1650)/150,
    });
    $(".gal-img:nth-child(11)").css({
        transform: 'translate3d('+(-50-(scroll-1750)/2)+'%, '+(-50+(scroll-1750)/5)+'%,0) scale('+(0.2+((scroll-1750)/500))+')',
        opacity: 0.2 + (scroll-1750)/150,
    });
    $(".gal-img:nth-child(12)").css({
        transform: 'translate3d('+(-50-(scroll-1900)/5)+'%, '+(-50-(scroll-1900)/5)+'%,0) scale('+(0.2+((scroll-1900)/500))+')',
        opacity: 0.2 + (scroll-1900)/150,
    });
    $(".gal-img:nth-child(13)").css({
        transform: 'translate3d('+(-50+(scroll-2100)/2)+'%, '+(-50-(scroll-2100)/10)+'%,0) scale('+(0.2+((scroll-2100)/500))+')',
        opacity: 0.2 + (scroll-2100)/150,
    });
    $('.gal-img:nth-child(14)').css({
        transform: 'translate3d('+(-50-(scroll-2300)/2)+'%, '+(-50+(scroll-2300)/5)+'%,0) scale('+(0.2+((scroll-2300)/500))+')', 
        opacity: 0.2 + (scroll-2300)/150,
    });
    $('.gal-img:nth-child(15)').css({
        transform: 'translate3d('+(-50+(scroll-2400)/5)+'%, '+(-50+(scroll-2400)/5)+'%,0) scale('+(0.2+((scroll-2400)/500))+')', 
        opacity: 0.2 + (scroll-2400)/150,
    });
    $('.gal-img:nth-child(16)').css({
        transform: 'translate3d('+(-50+(scroll-2450)/3)+'%, '+(-50-(scroll-2450)/3)+'%,0) scale('+(0.2+((scroll-2450)/500))+')', 
        opacity: 0.2 + (scroll-2450)/150,
    });
    $('.gal-img:nth-child(17)').css({
        transform: 'translate3d('+(-50-(scroll-2600)/3)+'%, '+(-50+(scroll-2600)/5)+'%,0) scale('+(0.2+((scroll-2600)/500))+')', 
        opacity: 0.2 + (scroll-2600)/150,
    });
    $('.gal-img:nth-child(18)').css({
        transform: 'translate3d('+(-40+(scroll-2700)/8)+'%, '+(-50-(scroll-2700)/3)+'%,0) scale('+(0.2+((scroll-2700)/500))+')', 
        opacity: 0.2 + (scroll-2700)/150,
    });
    $('.gal-img:nth-child(19)').css({
        transform: 'translate3d('+(-50-(scroll-2900)/2)+'%, '+(-50-(scroll-2900)/5)+'%,0) scale('+(0.2+((scroll-2900)/500))+')', 
        opacity: 0.2 + (scroll-2900)/150,
    });
    $('.gal-img:nth-child(20)').css({
        transform: 'translate3d('+(-50-(scroll-3100)/2)+'%, '+(-50+(scroll-3100)/8)+'%,0) scale('+(0.2+((scroll-3100)/500))+')', 
        opacity: 0.2 + (scroll-3100)/150,
    });
    $('.gal-img:nth-child(21)').css({
        transform: 'translate3d('+(-45+(scroll-3200)/2)+'%, '+(-50-(scroll-3200)/7)+'%,0) scale('+(0.2+((scroll-3200)/500))+')', 
        opacity: 0.2 + (scroll-3200)/150,
    });
    $('.gal-img:nth-child(22)').css({
        transform: 'translate3d('+(-50-(scroll-3350)/3)+'%, '+(-50-(scroll-3350)/3)+'%,0) scale('+(0.2+((scroll-3350)/500))+')', 
        opacity: 0.2 + (scroll-3350)/150,
    });
    $('.gal-img:nth-child(23)').css({
        transform: 'translate3d('+(-50-(scroll-3400)/8)+'%, '+(-50+(scroll-3400)/5)+'%,0) scale('+(0.2+((scroll-3400)/500))+')', 
        opacity: 0.2 + (scroll-3400)/150,
    });
    $('.gal-img:nth-child(24)').css({
        transform: 'translate3d('+(-50+(scroll-3500)/3)+'%, '+(-50-(scroll-3500)/5)+'%,0) scale('+(0.2+((scroll-3500)/500))+')', 
        opacity: 0.2 + (scroll-3500)/150,
    });
    $('.gal-img:nth-child(25)').css({
        transform: 'translate3d('+(-50+(scroll-3700)/3)+'%, '+(-50+(scroll-3700)/3)+'%,0) scale('+(0.2+((scroll-3700)/500))+')', 
        opacity: 0.2 + (scroll-3700)/150,
    });
    $('.gal-img:nth-child(26)').css({
        transform: 'translate3d('+(-50-(scroll-3800)/2)+'%, '+(-50-(scroll-3800)/7)+'%,0) scale('+(0.2+((scroll-3800)/500))+')', 
        opacity: 0.2 + (scroll-3800)/150,
    });
    $('.gal-img:nth-child(27)').css({
        transform: 'translate3d('+(-50-(scroll-3900)/8)+'%, '+(-50-(scroll-3900)/5)+'%,0) scale('+(0.2+((scroll-3900)/500))+')', 
        opacity: 0.2 + (scroll-3900)/150,
    });
    $('.gal-img:nth-child(28)').css({
        transform: 'translate3d('+(-40+(scroll-4000)/2)+'%, '+(-40+(scroll-4000)/4)+'%,0) scale('+(0.2+((scroll-4000)/500))+')', 
        opacity: 0.2 + (scroll-4000)/150,
    });
    if (scroll===0){
        $(".gal-img").css({
            opacity: 0
        });
    }
});