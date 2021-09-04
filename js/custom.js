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
  

// Magnify Pop Up

$('#portfolio').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true
    }
    // other options
});

$('.fimages').magnificPopup({
    delegate: 'img', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true
    }
    // other options
});