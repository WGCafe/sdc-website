$(function(){
  // Header dropdown
  $(".header-nav__item").hover(function(){
    $(this).addClass("hover");
    $('.header-nav__submenu', this).css('visibility', 'visible');
  }, function(){
    $(this).removeClass("hover");
    $('.header-nav__submenu', this).css('visibility', 'hidden');
  });
});