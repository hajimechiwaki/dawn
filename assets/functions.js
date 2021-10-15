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



});


