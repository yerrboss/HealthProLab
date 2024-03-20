$(function () {
    let mv = $(".main-visual");
    let mvControls = $(".mv-controls");
    let mvPage = $(".mv-pagination");
    let bzc = $(".biz-item");
    //메인 비주얼 slick 실행
    mv.slick({
        fade: true,
        arrows: false,
        dots: true,
        appendDots: mvPage,
        appendArrows: mvControls,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        pauseOnHover: false,
    });
    $('.biz-area').slick({
        dots: false,
        appendDots: $(".biz-pagination"),
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: false,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              dots: true,
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 980,
            settings: {
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 2,
              variableWidth: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    $(function(){
    AOS.init();
    let vH = window.innerHeight;
    let scTop = $(window).scrollTop();
    let top = $(".comp-hd").offset().top - vH;
    $(window).scroll(function(){
        scTop = $(window).scrollTop();
        if(scTop > top) {
            $(".comp-hd").find(".paused").removeClass("paused");
      }
    });
});
});