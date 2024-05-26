
var d_mdate = "14.09.2024";
var d_bdate = "14.09.2024";

// lazyload for images
function img_loader() {
    setTimeout(function(){
        $('body').find('img[data-src]').each(function(){
            var src = $(this).attr('data-src');
            var srcset = $(this).attr('data-srcset');
            var classes = $(this).attr('class');
            var alt = $(this).attr('alt');
            var title = $(this).attr('title');
            if (src) {
              var img = new Image();
              $(img).hide();
              $(img).on('load', function(){
                $(this).fadeIn(400);
                setTimeout(function(){
                    $(img).addClass('transition');
                },400);
              });
              $(img).attr('srcset', srcset );  
              $(img).attr('src', src );
              $(img).attr('alt', alt);
              $(img).attr('title', title);
              $(img).addClass(classes);
              $(this).replaceWith(img);
            }
        });
    }, 150);
}


function startAll(){

    document.getElementById("sm-bt").addEventListener("click", () => {
      //  Fancybox.show([{ src: "#sm-mod", type: "inline" }]);
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
        //
    });
    Fancybox.bind('[data-fancybox="gallery2"]', {
        //
    });
    Fancybox.bind('[data-fancybox="gallery3"]', {
        //
    });


    $(".js-sm-code-sliderOn").on("init reInit afterChange", function(event, slick) {
        $(".sm-slider-counterOn").html(
            slick.slickCurrentSlide() + 1 + "/" + slick.slideCount
        );
    });

    $(".js-sm-code-sliderOn").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $(".sm-slider-arrowsOn"),
        prevArrow: '<div class="sm-slider__arrow sm-slider__arrow_left"></div>',
        nextArrow: '<div class="sm-slider__arrow sm-slider__arrow_right"></div>',
        dots: false
    });


    $(".js-sm-code-sliderTw").on("init reInit afterChange", function(event, slick) {
        $(".sm-slider-counterTw").html(
            slick.slickCurrentSlide() + 1 + "/" + slick.slideCount
        );
    });

    $(".js-sm-code-sliderTw").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $(".sm-slider-arrowsTw"),
        prevArrow: '<div class="sm-slider__arrow sm-slider__arrow_left"></div>',
        nextArrow: '<div class="sm-slider__arrow sm-slider__arrow_right"></div>',
        dots: false
    });

    img_loader();


    setMonthCalendar(year,month,day)
}
