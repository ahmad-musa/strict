$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#home');
    var offset = startchange.offset();

     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $(".fixed-top").css('background-color', '#709dca');
        } else {
           $('.fixed-top').css('background-color', 'transparent');
        }
    });
     }
 });


// $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".navbar-fixed-top");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
//   });
  


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:3,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});



// Filterizr

$('.gallery_navs a').on('click', function (e) {
    e.preventDefault();
});

const options = {
    animationDuration: 0.5,
    callbacks: {
        onInit: function () {
            console.log('init');
        },
        onFilteringStart: function () {
            console.log('filtering start');
        },
        onFilteringEnd: function () {
            console.log('filtering end');
        },
        onShufflingStart: function () {
            console.log('filtering shuffle');
        },
        onShufflingEnd: function () {
            console.log('suffle end');
        },
        onSortingStart: function () {},
        onSortingEnd: function () {}
    },
    filterOutCss: {
        opacity: 0,
        transform: 'scale(0.5)'
    },
    filterInCss: {
        opacity: 1,
        transform: 'scale(1)'
    },
    spinner: { // Configuration for built-in spinner
        enabled: true,
        fillColor: '#2184D0',
        styles: {
            height: '75px',
            margin: '0 auto',
            width: '75px',
            'z-index': 9999,
        },
    },
}

const filterizr = new Filterizr('.gallery_item', options);
// $('.gallery_item').filterizr(options);
})