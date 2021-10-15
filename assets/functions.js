//! ======================================================
//!
//! function.js
//!
//! ======================================================




$(function(){

  objectFitImages();
  $('.product_imgs').find('.product_imgs_item').matchHeight();

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



});


