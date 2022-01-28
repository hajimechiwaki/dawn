//! ======================================================
//!
//! function.js
//!
//! ======================================================


$(function(){

  var confirm = $.cookie('mitosaya_confirmination');
  if(!confirm){
    $('#modal_confirmination').addClass('-show');
  }


  objectFitImages();

  var disableBodyScroll = bodyScrollLock.disableBodyScroll;
  var enableBodyScroll = bodyScrollLock.enableBodyScroll;

  var urlHash = location.hash;

  var body = $('body');
  var menu = $('#menu');
  var nav = $('#nav');
  var header = $('#header');

  checkbp();

  $('.product_imgs').slick({
    fade: true,
    arrows: false
  })

  $(window).on('resize orientalchange',function(){
    checkbp();
  }).on('scroll',function(){
    checkbp();
  })

  $('[data-tile]').each(function(){
    $(this).masonry({
      itemSelector: '.tile_item'
    })
  })


  function checkbp(){
      if($(window).width() > 480) {
        unslick($('[data-spslide]'));
      } else {
        slickinit($('[data-spslide]'));
      }
  }

  function slickinit(tgt){
    tgt.each(function(){
      $(this).slick({
        arrows: true,
        dots: true,
        fade: true,
      })
    })
  }

  function unslick(tgt){
    tgt.each(function(){
      if( $(this).hasClass('slick-initialized') ){
        $(this).slick('unslick');
      }
    })
  }


});




