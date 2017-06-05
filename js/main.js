
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

});
