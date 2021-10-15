//! ======================================================
//!
//! function.js
//!
//! ======================================================




$(function(){

  objectFitImages();

  var disableBodyScroll = bodyScrollLock.disableBodyScroll;
  var enableBodyScroll = bodyScrollLock.enableBodyScroll;

  var urlHash = location.hash;

  var body = $('body');
  var menu = $('#menu');
  var nav = $('#nav');
  var header = $('#header');

  $('.product_imgs').on('init',function(){
    heightmatch($('.product_imgs').find('.product_imgs_item'));
  })
  $('.product_imgs').slick({
    fade: true,
    arrows: false
  })


});

function heightmatch(tgt){
  var tgt = tgt;
  var height = 0;
  tgt.each(function(){
    var thisheight = $(this).outerHeight();
    height = ( height < thisheight )? thisheight : height;
  })
  $(this).css({
    'height': height
  })
}


