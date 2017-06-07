

$(document).ready(function() {

  $('section#screenshots a').on('click', function() {
    $('div#modal img').attr('src', $(this).attr('data-image-url') );
  });
  // this - refers to $('section#screenshots a') that executed the above funciton

  var nav = $('.navbar-fixed-top');
  var distance = $('.navbar-fixed-top').offset();

  // console.log(distance);

  if (distance.top >= 300) {
    nav.addClass('effect');
  }

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >=300) {
      nav.addClass('effect');
    } else {
      nav.removeClass('effect');
    }
  });

  $('#about .blue-circle').waypoint(function() {
      $('#about .blue-circle').addClass('animated fadeInUp')
    }, {
      offset: '50%'
  });

  $('#features .blue-circle').waypoint(function() {
      $(this.element).addClass('animated fadeInUp')
      // console.log(this.element);
    }, {
      offset: '50%'
  });

  $('.features-image img').waypoint(function() {
      $('.features-image img').addClass('animated flipInY')
    }, {
      offset: '50%'
  });

  $('#screenshots .col-sm-4').waypoint(function() {
      $(this.element).addClass('animated rollIn');
      $(this.element).css({'opacity':1});
    }, {
      offset: '50%'
  });

  $('#download div.phone img').waypoint(function() {
      $(this.element).addClass('animated fadeInLeft');
    }, {
      offset: '50%'
  });

  $('#download .platforms > div').waypoint(function() {
      $(this.element).addClass('animated fadeInUp');
    }, {
      offset: '50%'
  });

});


smoothScroll.init({
  speed: 700,
  offset: 50,
  easing: 'easeInOutQuad',
  updateURL: false,
  offset: 50

});
