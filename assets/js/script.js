//tool tip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  
  //carousel
  $('.carousel').carousel()


 //toggle on cards
  $('.card').on('click', function(e) {
    $(this).find('.card-body').toggleClass("info-block info-hidden");
    e.preventDefault();
  });

   //smooth scrolling (navbar)
   $("a").click(function (event) {
    if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
            scrollTop: $(gato).offset().top
        }, 800, function () {
            window.location.hash = gato;
        });
    }
  });

  $('.popover-dismiss').popover({
    trigger: 'focus'
  })


//alerta en boton suscribir
  $('#enviarCorreo').on('click', function(e) {
    alert('El correo fue enviado correctamente');
    e.preventDefault();
  });