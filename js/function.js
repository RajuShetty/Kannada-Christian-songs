(function($) {
  "use strict";

// Page Transitions
$(document).ready(function() {
  
  $(".animsition").animsition({
  
    inClass               :   'fade-in',
    outClass              :   'fade-out-down',
    inDuration            :    800,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :   false,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });
});

// Image Lightbox
( function( $ ) {

    $( '.swipebox' ).swipebox( {
        useCSS : true, // false will force the use of jQuery for animations
        useSVG : true, // false to force the use of png for buttons
        initialIndexOnArray : 0, // which image index to init when a array is passed
        hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
        hideBarsDelay : 0, // delay before hiding bars on desktop
        videoMaxWidth : 1140, // videos max width
        beforeOpen: function() {}, // called before opening
        afterOpen: null, // called after opening
        afterClose: function() {}, // called after closing
        loopAtEnd: false // true will return to the first image after the last image is reached
    } );

} )( jQuery );

// Accordion 

    $(function(){
      $('.mdl-collapse__content').each(function(){
        var content = $(this);
        content.css('margin-top', -content.height());
      })

      $(document.body).on('click', '.mdl-collapse__button', function(){
        $(this).parent('.mdl-collapse').toggleClass('mdl-collapse--opened');
      })
    })


// Right Sidebar
jQuery(document).ready(function($){
  //open the lateral panel
  $('.s-right-activator').on('click', function(event){
    event.preventDefault();
    $('.s-right').addClass('is-visible');
  });
  //close the lateral panel
  $('.s-right').on('click', function(event){
    if( $(event.target).is('.s-right') || $(event.target).is('.s-right-close') ) { 
      $('.s-right').removeClass('is-visible');
      event.preventDefault();
    }
  });
});

// Contact Swipe
$('.contact.swipeable ').on('click', function(e) {
    $(this).toggleClass('swipe-left');
    e.preventDefault();
})

// Smooth Scroll on Anchor
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

// Sidebar inbox
$('.inbox-message').click(function(){
  $('#slideout').toggleClass('show');
  $('.mdl-layout__obfuscator').toggleClass('isvisible');
});
$('.inbox-close').click(function(){
  $('#slideout').toggleClass('show');
  $('.mdl-layout__obfuscator').toggleClass('isvisible');
});

})(jQuery);