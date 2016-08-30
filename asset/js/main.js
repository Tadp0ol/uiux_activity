function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}

function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
  
        });
}

function scrollBanner() {

    $(document).scroll(function(){
        var scrollPos = $(this).scrollTop();

        // console.log(scrollPos);
        //599
        $('.banner-text').css({
            'top' : (scrollPos/3)+'px',
            'opacity' : 1-(scrollPos/510)
        });
        $('.banners').css({
            'background-position' : 'center ' + (-scrollPos/2)+'px'
        });

        if(scrollPos <= 250){
            $('.move_up_button').css({
                'display' : 'none',
                'transition' : 'all 0.3s'
            });
        }
        else
        {
            $('.move_up_button').css({
                'display' : 'block',
                'transition' : 'all 0.3s'
            });
        }

        //slid left '.offer'
        //930
        //960
        //970
        function addSlide(location)
        {
            $('.offers').children('.container').children(location).children('ul').children('li').addClass('fadeInLeft');
            $('.offers').children('.container').children(location).children('ul').children('li').css({
                'display' : 'block',
                'visibility' : 'visible',
                'transition' : 'all 0.3s'
            });

        } 
        
        if(scrollPos >= 930){
            var location = '#offer_third';
            addSlide(location);
        }

        if(scrollPos >= 960){
            var location = '#offer_second';
            addSlide(location);
        }

       if(scrollPos >= 970){
            var location = '#offer_first';
            addSlide(location);
        }

            // if(scrollPos < 930)
            // {
                // $('.offers').children('.container').children('.offer').children('ul').children('li').css({
                //     'visibility' : 'hidden',
                //     'transition' : 'all 0.3s'
                // });

                // $('.offers').children('.container').children('.offer').children('ul').children('li').removeClass('fadeInLeft');
            // }

        //fadeIn picture
        if(scrollPos >= 1476)
        {
            $('.testimonial').children('.container').children('.testimonial_logos').children('.swiper-wrapper').children('div').css({
                'display' : 'block',
                'transition' : 'all 0.3s'
            });

            $('.testimonial').children('.container').children('.testimonial_logos').children('.swiper-wrapper').children('div').addClass('fadeIn'); 
        }
        else
        {   
            $('.testimonial').children('.container').children('.testimonial_logos').children('.swiper-wrapper').children('div').css({
                'display' : 'none',
                'transition' : 'all 0.3s'
            });

            $('.testimonial').children('.container').children('.testimonial_logos').children('.swiper-wrapper').children('div').removeClass('fadeIn');
        }

        if(scrollPos >= 1696)
        {
            // var count = $('.design_wrapper').children('.container').children('.design').children('img')
            // $$('.design_wrapper').children('.container').children('.design').filter(function(){
            //     return $(this).has('img').length > 0
            // }).each(function(){
            //     $(this).addClass('anotherclass');
            // });

            $('.design_wrapper').children('.container').children('.design').css({
                'display' : 'block',
                'transition' : 'all 0.3s'
            });

            $('.design_wrapper').children('.container').children('.design').addClass('fadeIn'); 
        }
        else
        {
            $('.design_wrapper').children('.container').children('.design').css({
                'display' : 'none',
                'transition' : 'all 0.3s'
            });

            $('.design_wrapper').children('.container').children('.design').removeClass('fadeIn');
        }

        
        // getSize();

        if(scrollPos == 0)
        {
            if($(window).resize().width() > 762)
            {
                $('#navigation_logo').css({
                    'margin-top' : '0px',
                    'transition' : 'all 0.3s'
                });

                $('#navigation_logo').children('li').children('a').children('img').css({
                    'width' : '130.422px',
                    'transition' : 'all 0.3s'
                });

                $('.dropdown').css({
                    // 'padding-bottom' : '34px',padding-bottom: 18px;
                    'padding-bottom' : '18px',
                    'transition' : 'all 0.3s'
                });

                $('.navigation').css({
                    'background-color' : 'transparent',
                    'transition' : 'all 0.3s'
                });

                $('#navigation_menu').children('li').children('a').css({
                    'color' : '#fff',
                    'transition' : 'all 0.3s'
                });

                $('#navigation_menu').css({
                    'margin-top' : '1px',
                    'transition' : 'all 0.3s'
                });
                
                $('#navigation_bar').css({
                    'padding-top' : ' 17px',
                    'transition' : 'all 0.3s'
                });

                $('#logo').css({
                    'height' : '30px',
                    'transition' : 'all 0.3s'
                });

                $('.navigation').children('.container').css({
                    'margin-bottom' : '7px',
                    'transition' : 'all 0.3s'
                }); 

                var logo = document.getElementById('logo');
                logo.src = "asset/images/logo_white.png";
            }

            $('.move_up_button').css({
                'display' : 'none',
                'transition' : 'all 0.3s'
            });
            
        }
        else{
            if($(window).resize().width() > 762)
            {
                $('#navigation_logo').children('li').children('a').children('img').css({
                    'width' : '104.344px',
                    'transition' : 'all 0.3s'
                });

                $('#navigation_menu').css({
                    'margin-top' : '0px',
                    'transition' : 'all 0.3s'
                });

                $('#navigation_logo').css({
                    'margin-top' : '3px',
                    'transition' : 'all 0.3s'
                }); 

                $('.dropdown').css({
                    'padding-bottom' : '4px',
                    'transition' : 'all 0.3s'
                });

                $('.navigation').children('.container').css({
                    'margin-bottom' : '-2px',
                    'transition' : 'all 0.3s'
                });  

                $('#navigation_bar').css({
                    'padding-top' : ' 2px',
                    'transition' : 'all 0.3s'
                });

                $('.navigation').css({
                    'background-color' : '#fff',
                    'transition' : 'all 0.3s'
                });

                $('#navigation_menu').children('li').children('a').css({
                    'color' : '#e54024',
                    'transition' : 'all 0.3s'
                });

                $('#logo').css({
                    'height' : '24px',
                    'transition' : 'all 0.3s'
                });

                var logo = document.getElementById('logo');
                logo.src = "asset/images/logo_black.png";
            }
        }
    });    
}
scrollBanner();

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(document).ready(function(){
	$('#logo1').each(function(){
		animationHover(this, 'slideOutLeft');
	});

    $(".dropdown").hover(
        function(){ $(this).addClass('open') },
        function(){ $(this).removeClass('open') }
    );

    $("#head_carousel").on('click', '.left',
        function(){ 
            
        }
    );

    $("#head_carousel").on('click', '.right',
        function(){ 
            
        }
    );

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        grabCursor: true,
        loop: true
    });

    $(".design_button").hover(
        function(){
            // $(this).children('span').css('display', 'none');
            // $(this).children('span').css('display', 'inline-block');
            // $(this).children('span').addClass('anslideInRight');
            $(this).children('i').addClass('fadeInLeft');
        },
        function(){
            // $(this).children('span').removeClass('slideInRight');
            $(this).children('i').removeClass('fadeInLeft');
        }
    );

    $(".fadeIn").hover(
        function(){
            $(this).children('i').addClass('fadeInLeft');
        },
        function(){
            $(this).children('i').removeClass('fadeInLeft');
        }
    );

    $(".jumper").on("click", function( e ) {
        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: 599
        }, 600);
        
    });

    $(".move_up").on("click", function( e ) {
        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: 0
        }, 600);
        
    });

    // $('#first_slide').addClass('zoomOut').removeClass('zoomOut');

    // setTimeout(function(){
    //   $('#first_slide').removeClass('zoomOut');
    // }, 2000);
});



$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('.z-index').css({
            'z-index' : '-999999'
        });
   }
   else{
        $('.z-index').css({
            'z-index' : '10'
        }); 
   }

    if($(window).scrollTop() + $(window).height() > $(document).height() - 490) {
         $('.move_up_button').css({
            'transition' : 'all 0.3s',
            'opacity' : '1'
        });
    }
    else{
        $('.move_up_button').css({
            'transition' : 'all 0.3s',
            'opacity' : '.5'
        });  
    }
});