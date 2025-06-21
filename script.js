// Script para inicializar o carrossel Bootstrap
document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = document.querySelector('#carouselExampleIndicators');
  if (myCarousel) {
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000,
      wrap: true
    });
  }
});
