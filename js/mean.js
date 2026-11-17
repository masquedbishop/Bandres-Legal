
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("stiky_nav").style.top = "0";
  } else {
    document.getElementById("stiky_nav").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

$('.too').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:1000,
    // animateOut:'fadeOut',
    // animateIn:'fadeIn',
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        400:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
})