// sticky nav
var navBar = $("nav");
var hdrHeight = $("nav").height();
var sectionFeatures = $('.section-features').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdrHeight + 100) {
    navBar.addClass("sticky");
  } else {
    navBar.removeClass("sticky");
  }
  // Animation on scroll
  if($(this).scrollTop() > sectionFeatures + 300){
    $('.js--wp-1').addClass('animated fadeIn');
  }
});

// buttons scroll
$('.js--scroll-to-plans').click(function() {
  $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 100)
})
$('.js--scroll-top-start').click(function() {
  $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 100)
})


//  Navigation Scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        },500);
        return false;
      }
    }
  });
});


//mobile nav
var icon = $('.js--nav-icon')
var icon_x = $('.icon-x')

icon.click(function(){
icon_x.click(function(){
  icon.attr('style', 'display:block;');
  icon_x.attr('style','display:none');
})
})

icon.click(function(){
  icon.attr('style', 'display:none;');
  icon_x.attr('style','display:block');
})
$('.js--nav-icon').click(function() {
  var nav = $('.js--main-nav')

  nav.slideToggle(400)
})