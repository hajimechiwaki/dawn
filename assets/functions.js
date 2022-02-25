//! ======================================================
//!
//! function.js
//!
//! ======================================================


$(function(){

  var confirm = $.cookie('mitosaya_confirmination');
  $(window).on('load',function(){
    $('#modal_confirmination').addClass('-init');
    if(!confirm){
      $('#modal_confirmination').addClass('-show');
    }
  })


  $('#modal_confirmination_btn_true').on('click',function(){
    $.cookie('mitosaya_confirmination', '1', { expires: 365 });
    $('#modal_confirmination').removeClass('-show');
  });


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
    arrows: false,
    dots: true
  })

  $(window).on('resize orientalchange',function(){
    checkbp();
  }).on('scroll',function(){
    checkbp();
  })

  $('[data-tile]').each(function(){
    var media_num = 0;
    $(this).imagesLoaded().done( function( instance ) {
      media_num = media_num + $(this).find('img').length;
      alert(media_num);
      $(instance.elements[0]).masonry({
        itemSelector: '.tile_item'
      })
    })
  })

  // $('[data-tile]').each(function(){
  //   $(this).masonry({
  //     itemSelector: '.tile_item'
  //   })
  // })


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




