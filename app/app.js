/*eslint-env jquery*/




$(document).ready(function(){


  $('.navbar-burger').click(function(){
    $(this).toggleClass('is-active');
    $( '#menu' ).toggleClass('is-active');
  });
/* MENUSCROLL */
  $('a[href^="#"]').each(function(){
    var url = this.hash;
    $(this).on('click', function (e) {
      e.preventDefault();
      $( '#menu, .burger' ).removeClass('is-active');
      $('a.is-active').removeClass('is-active');
      $('html,body').animate({
        'scrollTop':$(url).offset().top-$('.navbar').height()
      }, 400, 'swing');
    });

    $(url).waypoint({
      handler: function() {
        $('a.is-active').removeClass('is-active');
        $('a[href^="'+url+'"]').addClass('is-active');
      }, offset: $('.navbar').height()
    });

    $(url).waypoint({
      handler: function() {
        $('a.is-active').removeClass('is-active');
        $('a[href^="'+url+'"]').addClass('is-active');
      }, offset: -$('.navbar').height()
    });

  });



  $('[data-modal]').click(function(){
    var open = $(this).attr('data-modal');
    $(open).addClass('is-active');
    $('.carousel').slick();
  });

  $('.modal-close').click(function(){
    $(this).closest('.modal').removeClass('is-active');
    $('.carousel').slick('unslick');
  });


  $('.slider').slick({ fade: true, arrows:false, autoplay: true });


  $(".navbar").sticky({topSpacing:0});

  $('#inicio').backstretch([
    "app/img/roday-y-asociados-abogados-especialistas.jpg"
  , "app/img/roday-y-asociados-inmobiliarias.jpg"
  , "app/img/roday-y-asociados-soluciones.jpg"
], {duration: 3000, fade: 750});


$('form').submit(function(e){
  $('form button').addClass('is-loading');
  e.preventDefault();
    var data = $(this).serialize();
    $.get('https://dragonbarbudo.com/api/email.php?'+data, function(d){
      $('form').slideUp();
      $('.notification').slideDown();
    })

});



  });
