// $('.drop-downlinks.dropdown-menu').click();

// $(document).ready(function ($) {
/* 
  //meanmenu
  $("#navbar nav").meanmenu();
  
new wow.init();
  }
  // AOS Animation
  if ($("[data-aos]").length) {
    AOS.init({
      duration: 1000,
      mirror: true,
    });
  }
 
/**
*
******Hero section and  best - sellers - carousel
*
*/

let owl = $(".hero-section,.best-sellers-carousel").owlCarousel({
  autoWidth: false,
  autoHeight: false,
  items: 1,
  loop: true,
  nav: false,
  dots: true,
  mouseDrag: false,
  animateIn: 'fadeInRight',
  animateOut: 'fadeOut',
  autoplay: true,
  autoplayTimeout: 3000,
});

$(".hero-section").on('change.owl.carousel', function (event) {
  var el = event.target;
  var hero_section = $('.hero-section');
  const siblings = $('.hero-section  .owl-item.active').siblings();
  $('.hero-section  .owl-item.active h1').addClass('fadeInUpBig');
  $('.hero-section  .owl-item.active h5').addClass('fadeInRight');
  $('.hero-section  .owl-item.active h6').addClass('fadeIn');
  $('.hero-section  .owl-item.active a').addClass('fadeIn');
});
/**
*
******recent-products-carousel
*
*/
$(".recent-products-carousel").owlCarousel({
  autoWidth: false,
  items: 6,
  loop: false,
  nav: true,
  dots: true,
  autoplay: false,
  margin: 10,
  /*  responsive: {
       0: {
           items: 1,
       },
       767: {
           items: 1,
       },
       1024: {
           items: 1,
       },
   }, */
});
/**
*
******brand-carousels
*
*/
$(".brand-carousel").owlCarousel({
  autoWidth: true,
  items: 6,
  loop: true,
  nav: true,
  dots: true,
  autoplay: true,
  margin: 15,
  /*  responsive: {
       0: {
           items: 1,
       },
       767: {
           items: 1,
       },
       1024: {
           items: 1,
       },
   }, */
});

//   /*Magnific image */
//   var imaggepoppup = $(".image-popup");
//   if (imaggepoppup.length) {
//     $(".image-popup").magnificPopup({
//       delegate: "a",
//       type: "image",
//       callbacks: {
//         beforeOpen: function () {
//           this.st.image.markup = this.st.image.markup.replace(
//             "mfp-figure",
//             "mfp-figure animated zoomInDown"
//           );
//         },
//       },
//       gallery: {
//         enabled: true,
//         preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
//       },
//       image: {
//         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
//         titleSrc: function (item) {
//           return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
//         },
//       },
//     });
//   }
//   /*Magnific video */
//   $(".popup-youtube").magnificPopup({
//     type: "iframe",
//     iframe: {
//       markup:
//         '<div class="mfp-iframe-scaler">' +
//         '<div class="mfp-close"></div>' +
//         '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
//         "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button
//       patterns: {
//         youtube: {
//           index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

//           id: "v=",

//           src: "https://www.youtube.com/embed/%id%?autoplay=1",
//         },

//         // you may add here more sources
//       },
//       srcAction: "iframe_src", // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
//     },
//   });
//   // jQuery counterUp
//   $('[data-toggle="counter-up"]').counterUp({
//     delay: 10,
//     time: 1000,
//   });
//   /*For Partner Section */
//   $(".logo").owlCarousel({
//     items: 5,
//     loop: true,
//     margin: 60,
//     nav: false,
//     dots: false,
//     autoplay: true,
//     autoplayTimeout: 1000,
//     autoplayHoverPause: true,
//     mouseDrag: false,
//   });
//   // Preloader JS
//   function preloader() {
//     if ($("#preloader").length) {
//       $(window).on("load", function () {
//         $("#preloader").fadeOut();
//         $("#preloader").delay(50).fadeOut("slow");
//       });
//     }
//   }
//   /*Iso Tope */
//   $(".project-titles li").on("click", function () {
//     var selector = $(this).attr("data-filter");
//     //alert(selector);
//     $(".project-list").isotope({
//       filter: selector,
//     });
//   });
//   $(".project-list").isotope();

//   // project Filter
//   var projectTitle = $(".project-titles li");
//   if (projectTitle.length) {
//     $(".project-titles li").on("click", function (event) {
//       $(this).siblings(".active").removeClass("active");
//       $(this).addClass("active");
//       event.preventDefault();
//     });
//   }
//   //jQuery Sticky Area
//   $(".sticky-area").sticky({
//     topSpacing: 0,
//   });
//   // SCROLLTO THE TOP

//   // Show or hide the sticky footer button
//   $(window).on("scroll", function () {
//     if ($(this).scrollTop() > 1000) {
//       $(".scroll-top").fadeIn(100);
//     } else {
//       $(".scroll-top").fadeOut(100);
//     }
//   });

//   // Animate the scroll to top
//   $(".scroll-top").on("click", function (event) {
//     event.preventDefault();

//     $("html, body").animate(
//       {
//         scrollTop: 0,
//       },
//       200
//     );
//   });
//   /*$(".meanmenu-reveal").on("click", function () {
//     $(".sticky-wrapper").css("height", "0");
//     var color = $(".sticky-wrapper").css("height");
//     console.log(color);
//   });*/
//   /*Function Calls*/
//   preloader();
// });
// wow js 

new WOW().init();
  // Elements Animation

// })