$(function(){
  // Header dropdown
  $(".header-nav__item").hover(function(){
    $(this).addClass("hover");
    $('.header-nav__submenu', this).css('visibility', 'visible');
  }, function(){
    $(this).removeClass("hover");
    $('.header-nav__submenu', this).css('visibility', 'hidden');
  });

  $('.header__menu').on('click', function() {
    $('.header-nav').show();
  });

  $('.header__close').on('click', function() {
    $('.header-nav').hide();
  });
});