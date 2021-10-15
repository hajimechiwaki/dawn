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

  $('.product_imgs').slick({
    fade: true,
    arrows: false
  })

  heightmatch($('.product_imgs').find('.product_imgs_item'));

});

function heightmatch(tgt){
  var tgt = tgt;
  var thisheight = $(this).outerHeight();
  var height = 0;
  tgt.each(function(){
    height = ( height < thisheight )? thisheight : height;
  })
  $(this).css({
    'height': height
  })
}


