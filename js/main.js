$(function(){
  // Header dropdown  
  $(".header-nav__item").hover(function(){
      $(this).addClass("hover");
      $('.header-nav__submenu', this).css('visibility', 'visible');
  }, function(){
      $(this).removeClass("hover");
      $('.header-nav__submenu', this).css('visibility', 'hidden');
  });

  // Validate form
  $('#contact_form').validate({
    rules: {
      name: {
        required: true,
        minlength: 1
      },
      companyName: {
        required: true,
        minlength: 1
      },
      industry: {
        required: true,
        minlength: 1
      },
      job: {
        required: true,
        minlength: 1
      }
    },
    messages: {
      name: {
        required: "请输入您的姓名"
      },
      companyName: {
        required: "请输入您的公司名"
      },
      industry: {
        required: "请选择您的公司行业"
      },
      job: {
        required: "请输入您的职业"
      }
     }
    })
});