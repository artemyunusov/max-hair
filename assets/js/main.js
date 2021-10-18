window.onload = function() { 
  $('.prod-slider-wrap').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.people-slider-wrap').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
}