
$(document).ready(function() {
  $('section#screenshots a').on('click', function() {
    $('div#modal img').attr('src', $(this).attr('data-image-url') );

  });
});

// this - refers to $('section#screenshots a')
//that executed the above funciton
