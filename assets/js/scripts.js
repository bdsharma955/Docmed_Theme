

$(document).ready(function(){
    $('.icon-menu').click(function(){
        $('.header_menu').toggleClass('open');
    });

    $('.menubar-button1').click(function(){
        $('.menubar-button1').hide(),
        $('.menu-button2').show()
    });
    $('.menu-button2').click(function(){
        $('.menu-button2').hide(),
        $('.menubar-button1').show()
    });

    // slider 
    $("#main_slider").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
    });
    $("#testi_slider").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        loop: true,
        dots: true,
    });
    $("#doctor_sliders").owlCarousel({
        items: 4,
        dots: false,
        loop: true,
        dots: true,
        responsive : {
            0 : {
                items:1
            },
            320 : {
                items:1
            },
            480 : {
                items:1
            },
            575 : {
                items:2
            },
            767 : {
                items:2
            },
            991 : {
                items:3
            },
            1200 : {
                items:4
            },
            1199 : {
                items:4
            }
        }
    });
});

$(document).ready(function(){
    $('.bloghover').click(function(){
        $('.item_1').toggleClass('drop_menu');
    });
});

$(window).on('scroll', function(){
    if($(this).scrollTop()>50){
        $('.main_header_section').addClass("sticky")
    }
    else{
        $('.main_header_section').removeClass('sticky')
    }
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>80){
            $('.bottom_fixed').fadeIn();
        }
        else{
            $('.bottom_fixed').fadeOut();
        }
    });
    $('.bottom_fixed').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    });
});

