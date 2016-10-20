
$(window).on('load resize', function () {
    var width = $(window).width();
    if(width >= 992) {
      //alert('wohoo');
      $('#js-bcde-header__navigation-container').removeClass('collapse');
    } else {
      $('#js-bcde-header__navigation-container').addClass('collapse');
    }
});
