$(document).ready(function(){
    $(".maj input[type=button").click(function(){
        let a = $(this).attr("rel");
        $(".item .plan.open").removeClass("open");
            $(`ul.maj li input`).css("background","linear-gradient(200deg, #5a67c9, #b3b3c3)");
            $(`.item .plan:nth-child(${a})`).addClass("open slidestart")
            $(`ul.maj li:nth-child(${a}) input`).css("background","linear-gradient(180deg, #59273e, #c9dd94)");
    })
    $(".animate__animated").hover(function(){
        $(this).addClass("animate__bounce");
    }, function(){
        $(this).removeClass("animate__bounce");
    })
    $(".nhanmanh").hover(function(){
        $(this).addClass("animate__animated pulse");
    }, function(){
        $(this).removeClass("animate__animated pulse");
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
        }else{
            $(".menu-scroll").fadeOut();
        }
    })
    $("#bar").click(function(){
        $("ul.menu").slideToggle();
        $(".menu-scroll").hide();
    })
});