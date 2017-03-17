import $ from 'jquery';
var slick = require('./lib/slick.js');

var loader_desc = ["－ 火曜日の夜、学術と芸術を求めんとする若者が駒場に集う －", "－ 駒場で紡がれるアートとアカデミアの共創を目撃せよ －", "－東大生の創造性を限界まで －", "－世界の深みを知る術、学と芸の融合の先で －"]
var loader_desc_num = Math.floor(Math.random() * loader_desc.length);
$('.loader__desc').html(loader_desc[loader_desc_num]);

$(function() {
  var h = $(window).height();
  $('.wrapper').css('display','none');
  $('.loader ,.loader__inner').height(h).css('display','block');
});

$(window).load(function () {
  $('.loader').delay(1000).fadeOut(800);
  $('.loader__inner').delay(1000).fadeOut(300);
  $('.wrapper').css('display', 'block');
  setTimeout('loaderNone()', 2000);
});

function stopload(){
}
$(function(){
  setTimeout(function(){
    $('.wrapper').css('display','block');
    $('.loader').delay(300).fadeOut(800);
    $('.loader__inner').delay(300).fadeOut(300);
    setTimeout('loaderNone()', 1200);
  },4000);
});

function loaderNone() {
  $('.loader, .loader__inner').css('display','none');
}

if (window.innerWidth < 768) {
  var centerPadding = '0px';
} else {
  var centerPadding = '250px';
}


$(function() {
    $('.js-slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1200,
      pauseOnHover: false,
      centerPadding: centerPadding,
    });
});

$(function() {
  $('.js_menu_sp').click(function(){
    $('header').toggleClass('js_nav_open');
  });
});
