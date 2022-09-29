$('.slider-container').slick({
  arrows: false,
  autoplay: true,
  centerMode: true,
  centerPadding: '100px',
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        variableWidth: false
      }
    }
  ]
});