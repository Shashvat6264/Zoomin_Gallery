
$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    $(".gal-img:nth-child(1)").css({
        transform: 'translate3d('+(-50-(scroll)/5)+'%, '+(-50-(scroll)/5)+'%,0) scale('+(0.2+(scroll/500))+')',
        opacity: 0.2 + scroll/150,
    });
    $(".gal-img:nth-child(2)").css({
        transform: 'translate3d('+(-45+(scroll-200)/5)+'%, '+(-40-(scroll-200)/5)+'%,0) scale('+(0.2+((scroll-200)/500))+')',
        opacity: 0.2 + (scroll-200)/150,
    });
    $(".gal-img:nth-child(3)").css({
        transform: 'translate3d('+(-50+(scroll-350)/5)+'%, '+(-50+(scroll-350)/2)+'%,0) scale('+(0.2+((scroll-350)/500))+')',
        opacity: 0.2 + (scroll-350)/150,
    });
    $(".gal-img:nth-child(4)").css({
        transform: 'translate3d('+(-60-(scroll-500)/2)+'%, '+(-45+(scroll-500)/5)+'%,0) scale('+(0.2+((scroll-500)/500))+')',
        opacity: 0.2 + (scroll-500)/150,
    });
    $(".gal-img:nth-child(5)").css({
        transform: 'translate3d('+(-45-(scroll-700)/5)+'%, '+(-60-(scroll-700)/3)+'%,0) scale('+(0.2+((scroll-700)/500))+')',
        opacity: 0.2 + (scroll-700)/150,
    });
    $(".gal-img:nth-child(6)").css({
        transform: 'translate3d('+(-30+(scroll-950)/2)+'%, '+(-50+(scroll-950)/5)+'%,0) scale('+(0.2+((scroll-950)/500))+')',
        opacity: 0.2 + (scroll-950)/150,
    });
    $(".gal-img:nth-child(7)").css({
        transform: 'translate3d('+(-30+(scroll-1100)/2)+'%, '+(-50-(scroll-1100)/10)+'%,0) scale('+(0.2+((scroll-1100)/500))+')',
        opacity: 0.2 + (scroll-1100)/150,
    });
    if (scroll===0){
        $(".gal-img").css({
            opacity: 0
        });
    }
});