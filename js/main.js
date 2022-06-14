$(function() {

  // ナビメニュー固定
  function fixedNav() {
    var $header = $('.header');
    var headerH = $(".header").outerHeight(true);
    var scroll = $(window).scrollTop();
    if(scroll >= headerH) {
      $header.addClass('fixed');
    } else {
      $header.removeClass('fixed');
    }
  }

  function fuwaAnime() {
    $('.js-scroll').each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeight = $(window).height();

      if(scroll > blockPosition - windowHeight + 300) {
        $(this).addClass('block-in');
      }
   });
  }

  // ハンバーガーメニューの動作
  var flg = false;
  var $menu = $('.header__nav');
  $('.hamburger').on('click', function() {

    $(this).toggleClass('open');
    $menu.toggleClass('open');

    if(flg == false) {
      $('body').css('overflow', 'hidden');
      flg = true;
    } else {
      $('body').css('overflow', 'auto');
      flg = false;
    }  
    console.log(flg);
  });

  //ページ内リンク
  $('a[href^="#"]').on('click', function() {
    var targetContents = $(this).attr('href');

    if(targetContents.length){
      console.log(targetContents);
      var targetContents = $(targetContents).offset().top;
      $('body,html').animate({scrollTop: targetContents}, 500);
      $('body').css('overflow', 'auto');
    }
    setTimeout(function() {
      $('.hamburger').removeClass('open');
      $('.header__nav').removeClass('open');
    },1000);
  });


  $(window).scroll(function() {
    fixedNav();
    fuwaAnime();
  });



});