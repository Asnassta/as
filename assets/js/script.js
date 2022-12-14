function tabs(n)
{
  $('.popup-fas .tabs-nav a').removeClass('active');
  $('.popup-fas .tabs-nav a.t'+n).addClass('active');
  $('.popup-fas .tabs-block').fadeOut(0);
  $('.popup-fas .tabs-block.tab_'+n).fadeIn(222);

};

function tabsCourt(n)
{
  $('.about__intro .tabs-nav a').removeClass('active');
  $('.about__intro .tabs-nav a.t'+n).addClass('active');
  $('.about .tabs-block').fadeOut(0);
  $('.about .tabs-block.tab_'+n).fadeIn(222);

  $('.calendar-box__inner').slick('refresh');
  reload_popup();
};

function tabsPhone(n)
{
  $('.about-block_contact .tabs-nav a').removeClass('active');
  $('.about-block_contact .tabs-nav a.t'+n).addClass('active');
  $('.about-block_contact .tabs-box').fadeOut(0);
  $('.about-block_contact .tabs-box.tab_'+n).fadeIn(222);
  
};

function tabsWork(n)
{
  $('.about-block_work .tabs-nav a').removeClass('active');
  $('.about-block_work .tabs-nav a.t'+n).addClass('active');
  $('.about-block_work .tabs-box').fadeOut(0);
  $('.about-block_work .tabs-box.tab_'+n).fadeIn(222);
};

function tabsMenu(n)
{
  $('.menu-list .menu-list-nav a').removeClass('active');
  $('.menu-list .menu-list-nav a.t'+n).addClass('active');
  $('.menu-list .tabs-block').fadeOut(0);
  $('.menu-list .tabs-block.tab_'+n).fadeIn(222);
  $('.menu-list__search').addClass('show');
};

function tabsInfo(n)
{
  $('.info-page-nav__options a').removeClass('active');
  $('.info-page-nav__options a.t'+n).addClass('active');
  $('.info-page__tabs').fadeOut(0);
  $('.info-page__tabs.tab_'+n).fadeIn(222);
};

$(document).ready(function() {
  reload_popup();
  /*======Lang (dropdown)=============*/
      $(".lang__select").on("click", function() {
        $(this).toggleClass('active');
        $(".lang__dropdown").slideToggle(333);
      });
  /*==========/lang (dropdown)=========*/

  /*======Footer-menu (dropdown)=============*/
      $(".footer-menu__title").on("click", function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle(333);
      });
  /*==========/footer-menu (dropdown)=========*/

   /*======about-block__content (dropdown)=============*/
      $(".about-block__title").on("click", function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle(333);
        $('.calendar-box__inner').slick('refresh');
        reload_popup();
      });
  /*==========/about-block__content (dropdown)=========*/

  /*======menu-list=============*/
      $(".menu-list__close").on("click", function() {
        $(".menu-list__search").removeClass('show');
        $(".menu-list-nav a").removeClass('active');
      });
  /*==========/menu-list=========*/

  

  /*======info-page-nav=============*/
  $(".info-page-nav").on("click", function(event) {
    if($(window).width() <= 546)
      {
        event.preventDefault();
        $(this).find('.info-page-nav__options').slideToggle(222);
        $(this).find('.info-page-nav__select').toggleClass('active');
    }
  });


  $(".info-page-nav__options a").on("click", function(event) {
    if($(window).width() <= 546)
      {
        event.preventDefault();
        $('.info-page-nav__select').html($(this).html());
    }
  });
  /*==========/info-page-nav=========*/

  /*==========Sliders========*/
   $('.notify-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.notify .slider-arrow_prev'),
    nextArrow: $('.notify .slider-arrow_next'),
    responsive: [
      {
        breakpoint: 1201,
          settings: {
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
      },
    ]
  });

   $('.tab_1 .calendar-box__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.tab_1 .calendar-box .slider-arrow_prev'),
    nextArrow: $('.tab_1 .calendar-box .slider-arrow_next'),
  });

   $('.tab_2 .calendar-box__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.tab_2 .calendar-box .slider-arrow_prev'),
    nextArrow: $('.tab_2 .calendar-box .slider-arrow_next'),
  });

   $('.info-page__slider').slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.info-page__arrow_prev'),
    nextArrow: $('.info-page__arrow_next'),
    responsive: [
      {
        breakpoint: 415,
          settings: {
            dots: true,
        }
      },
    ]
  });
  /*==========/sliders========*/
});

/*=========MenuScroll=========*/
  window.onload = function () {
          var scr = $(".links");
          scr.mousedown(function () {
              var startX = this.scrollLeft + event.pageX;
              var startY = this.scrollTop + event.pageY;

              scr.mousemove(function () {

                  this.scrollLeft = startX - event.pageX;

                  this.scrollTop = startY - event.pageY;

                  return false;

              });

          });

          $(window).mouseup(function () {
              scr.off("mousemove");
          });
      }
/*=========/menuScroll=========*/


/*===============Popup=================*/
function reload_popup()
{
  $(".open-popup").on("click", function (event) {
      name_pop = $(this).attr('data-popup');
      event.preventDefault();
      $(".popup."+name_pop).fadeIn(333);
      $(".popup."+name_pop+" .popup__inner").fadeIn(333);
      $(".popup").not(".popup."+name_pop).hide();
      $('body').addClass("hidden");
  });
  $(".popup__close,  .closex").on("click", function (event) {
      event.preventDefault();
      $(".popup").fadeOut('333');
      $(".popup__inner").fadeOut(333);
      $('body').removeClass("hidden");
  });
}
/*==============/popup=================*/