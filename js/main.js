

// длябургера анимация


(function() {

  "use strict";

  var toggles = document.querySelectorAll(".toggle-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();


// появление меню по нажатии на кнопку

$(document).ready(function(){
 $(".toggle-hamburger").click(function(){
    $(".burger_wrap").toggleClass("visib");
  });

});

$(document).ready(function(){
 $(".fot").click(function(){
    $(".burger_test").click("burger_test");
  });

});




$(document).ready(function(){
  $('[data-submit]').on('click', function(e){
      e.preventDefault();
    $(this).parent('form').submit();
  })
  $.validator.addMethod(
          "regex",
          function(value, element, regexp) {
              var re = new RegExp(regexp);
              return this.optional(element) || re.test(value);
          },
          "Please check your input."
      );
  function valEl(el){
     
          el.validate({
        rules:{
          tel:{
            required:true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name:{
            required:true
          },
          email:{
            required:true,
            email:true
          }
        },
          messages:{
            tel:{
                required:'Надо заполнить',
                regex:'Телефон может содержать символы + - ()'
            },
            name:{
                required:'Надо заполнить',
            },
            email:{
              required:'Надо заполнить', 
              email:'Неверный формат E-mail'
            }
        },            
        submitHandler: function (form) {
          $('#loader').fadeIn();
          var $form = $(form);
          var $formId = $(form).attr('id');
          switch($formId){
            case'goToNewPage':
              $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize(),
                  })
                  .always(function (response) {  
                      //ссылка на страницу "спасибо" - редирект
                      location.href='https://wayup.in/lm/landing-page-marathon/success';
                      //отправка целей в Я.Метрику и Google Analytics
                      ga('send', 'event', 'masterklass7', 'register');
          yaCounter27714603.reachGoal('lm17lead');
              });
          break;        
          case'popupResult':
            $.ajax({
                  type: 'POST',
                  url: $form.attr('action'),
                  data: $form.serialize(),
                })
                .always(function (response) {                    
                setTimeout(function (){

                 $(".js-form").trigger('reset'); 
                   $('#overlay').fadeOut();
                },2100);
                setTimeout(function (){
                  $('#overlay').fadeIn();
                },100);
                $('#overlay').on('click', function(e) {
        $('#overlay').fadeOut();
    });
                    
            });
        break;          
        }       
return false; 
    }                           
  })
 }                        
     
              $('.js-form').each(function() {
                valEl($(this)); 
              });
    $('[data-scroll]').on('click', function(){
      $('html, body').animate({
            scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
        }, 2000);
        event.preventDefault();
    })             
   });




// таймер

   jQuery(function($){
   $("#phone").mask("+7(999) 999-9999");
   });


  jQuery(function($){
   $("#phone_modal").mask("+7(999) 999-9999");
   });




  


  

 // $(".menu_hidden").click(function(){
 //    $(".menu_menu").toggleClass("mobileMenu");
 //  });





// слайдер оффера


$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
   arrows: true,

  // asNavFor: '.slider-nav',
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// плавная прокрутка



$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 2000, 'swing', function () {
 window.location.hash = target;
 });
 });





