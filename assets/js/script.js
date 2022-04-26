$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

  $('.js-close-menu').on('click', function() {

    $('#toggle').removeClass('active');
    
    $('#overlay').removeClass('open');
    
    });