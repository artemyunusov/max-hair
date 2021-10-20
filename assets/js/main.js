window.onload = function() { 
  $('.prod-slider-wrap').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 650,
        settings: {
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