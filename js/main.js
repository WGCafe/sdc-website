// jQuery.validator.addMethod("isCellphone", function(value, element) {
//     var length = value.length;
//     var mobile = /^1[34578]\d{9}$/;/*/^1(3|4|5|7|8)\d{9}$/*/
//     return this.optional(element) || (length == 11 && mobile.test(value));
// }, "请正确填写您的手机号码");

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
      },
      email: {
        required: true,
        email:true
      },
      cellphone: {
        required: true,
        isCellphone: true
      },
      wechat: {
        required: false
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
      },
      email: {
        required: "请输入您的邮箱",
        email: "请正确填写您的邮箱地址"
      },
      cellphone: {
        required: "请输入您的手机号"
      }
     }
    })
});