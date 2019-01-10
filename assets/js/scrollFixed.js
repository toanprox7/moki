$(window).scroll(function(){
    if ($(this).scrollTop() > 135) {
        $('nav.header').addClass('fixed');
        $('.search').css("display","none");
        $('.menu-nav').css("padding","0px");
        $('nav.header').css("padding","0px");
        $('.logo img').attr("src","/img/devWeb/home/logo_small.png");
        $('.logo').css("padding","10px");
    } else {
        $('nav.header').removeClass('fixed');
        $('.search').removeAttr("style");
        $('.menu-nav').removeAttr("style");
        $('nav.header').removeAttr("style");
            $('.logo img').attr("src","/img/devWeb/home/logo_medium.png");
        $('.logo').removeAttr("style");
    }
});