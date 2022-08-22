$(document).ready(function(){
    $(".maj input[type=button").click(function(){
        let a = $(this).attr("rel");
        $(".item .plan").removeClass("open")
        $(`.item .plan:nth-child(${a})`).addClass("open slidetoleft")
        
    })
    $(".animate__animated").hover(function(){
        $(this).addClass("animate__bounce");
    }, function(){
        $(this).removeClass("animate__bounce");
    })
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(".backtop").fadeIn();
        }else{
            $(".backtop").fadeOut();
        }
    })
    $(".backtop").click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(".menu-scroll").fadeIn();
            $("#header").fadeOut();
        }else{
            $(".menu-scroll").fadeOut();
            $("#header").fadeIn();
        }
    })
});