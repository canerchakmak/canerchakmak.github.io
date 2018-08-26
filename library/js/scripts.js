 jQuery(document).ready(function($) {
     jQuery('#bottom-checkout-button').click(function() {
         jQuery('.woocommerce-page.woocommerce-cart .checkout-button').trigger('click');
     });
     jQuery('#menu-main-menu-new li a').click(function() {
         //window.location = $(this).attr('href');
     });
     jQuery('a.dropdown-toggle').click(function() {
         jQuery('ul.dropdown-menu').stop().slideUp();
         jQuery(this).next('ul.dropdown-menu').stop().slideToggle();
     });
     jQuery('#date-menu-hendler').click(function() {
         jQuery('.date-menu-hendler').slideToggle();
     });
     $('[placeholder]').focus(function() {
         var input = $(this);
         if (input.val() == input.attr('placeholder')) {
             input.val('');
             input.removeClass('placeholder');
         }
     }).blur(function() {
         var input = $(this);
         if (input.val() == '' || input.val() == input.attr('placeholder')) {
             input.addClass('placeholder');
             input.val(input.attr('placeholder'));
         }
     }).blur();
     Shadowbox.init();
     $('#before-after-wrapper ul').cycle({
         fx: 'scrollHorz',
         slides: '.item',
         timeout: 0,
         log: false,
         pager: '#before-after-pagination ul',
         pagerActiveClass: 'activeSlide',
         pagerTemplate: "",
         caption: '#caption-wrapper .caption',
         captionTemplate: "{{cycleCaption}} <div class='name'>{{cycleName}}</div>"
     });
     $('#home-slider').on('cycle-pre-initialize', function(event, opts) {});
     $('#before-after-wrapper ul').on('cycle-before', function(event, optionHash) {
         var caption = optionHash.caption;
         var name = optionHash.name;
         var link = optionHash.title;
     });
     /* Mobile Nav */
     var pagebody = $("#wrapper");
     var themenu = $("#mobile-nav-menu");
     var topbar = $("#mobile-nav");
     var viewport = {
         width: $(window).width(),
         height: $(window).height()
     };
     $('#menu-btn').click(function(e) {
         e.preventDefault();
         var leftval = $("#wrapper").css('left');
     });
     jQuery(window).scroll(function() {
         if (jQuery("html, body").scrollTop() > 100) {
             jQuery(".scroll-to-top").fadeIn()
         } else {
             jQuery(".scroll-to-top").fadeOut()
         }
     });
     jQuery(".scroll-to-top").click(function() {
         jQuery("html, body").animate({
             scrollTop: 0
         }, 800);
         return false
     });
     var hHeight = jQuery('#mobile-nav-menu header').outerHeight();
     var tHeight = jQuery(window).height();
     jQuery('#mobile-nav-menu .mobile-menu-wrapper').css('height', tHeight - hHeight - 10);
 }); /* end of as page load scripts */
 $(window).load(function() {});
 jQuery(window).resize(function($) {
     var hHeight = jQuery('#mobile-nav-menu header').outerHeight();
     var tHeight = jQuery(window).height();
     jQuery('#mobile-nav-menu .mobile-menu-wrapper').css('height', tHeight - hHeight - 10);
 });