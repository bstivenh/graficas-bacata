$(document).ready(function () {
  //Creamos un evento click para el enlace
  $(".ancla").click(function (evento) {
    //Anulamos la funcionalidad por defecto del evento
    evento.preventDefault();
    //Creamos el string del enlace ancla
    var codigo = "#" + $(this).data("ancla");
    //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
    $("html,body").animate({ scrollTop: $(codigo).offset().top }, 3000);
  });
  // Evento cambio de color menú superior
  if ($("#navbar-main").offset().top > 550) {
    $("#navbar-main").addClass("bg-gradient-yellow-icode");
  }
  $(window).scroll(function () {
    if ($("#navbar-main").offset().top > 550) {
      $("#navbar-main").addClass("bg-gradient-yellow-icode");
    } else {
      $("#navbar-main").removeClass("bg-gradient-yellow-icode");
    }
  });
  $("#carouselEquipoIcode").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  $("#carouselFrases").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $("#icode-clients").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});