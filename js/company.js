$(function () {
  $('.icons').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 360,
        settings: {
          centerMode: true,
          swipe: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $(function () {
    AOS.init();
    let vH = window.innerHeight;
    let scTop = $(window).scrollTop();
    let top = $("#comp-hd").offset().top - vH;
    $(window).scroll(function () {
      scTop = $(window).scrollTop();
      if (scTop > top) {
        $("#comp-hd").find(".paused").removeClass("paused");
      }
    });
  });
})         