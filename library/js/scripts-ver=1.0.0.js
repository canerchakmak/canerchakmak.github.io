/* imgsizer (flexible images for fluid sites) */
var imgSizer={Config:{imgCache:[],spacer:"/path/to/your/spacer.gif"},collate:function(aScope){var isOldIE=(document.all&&!window.opera&&!window.XDomainRequest)?1:0;if(isOldIE&&document.getElementsByTagName){var c=imgSizer;var imgCache=c.Config.imgCache;var images=(aScope&&aScope.length)?aScope:document.getElementsByTagName("img");for(var i=0;i<images.length;i++){images[i].origWidth=images[i].offsetWidth;images[i].origHeight=images[i].offsetHeight;imgCache.push(images[i]);c.ieAlpha(images[i]);images[i].style.width="100%";}
if(imgCache.length){c.resize(function(){for(var i=0;i<imgCache.length;i++){var ratio=(imgCache[i].offsetWidth/imgCache[i].origWidth);imgCache[i].style.height=(imgCache[i].origHeight*ratio)+"px";}});}}},ieAlpha:function(img){var c=imgSizer;if(img.oldSrc){img.src=img.oldSrc;}
var src=img.src;img.style.width=img.offsetWidth+"px";img.style.height=img.offsetHeight+"px";img.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='scale')"
img.oldSrc=src;img.src=c.Config.spacer;},resize:function(func){var oldonresize=window.onresize;if(typeof window.onresize!='function'){window.onresize=func;}else{window.onresize=function(){if(oldonresize){oldonresize();}
func();}}}}


// as the page loads, cal these scripts
jQuery(document).ready(function($) {

        jQuery('#bottom-checkout-button').click(function(){
            jQuery('.woocommerce-page.woocommerce-cart .checkout-button').trigger('click');
	});
	
        
	jQuery('#menu-main-menu-new li a').click(function(){
		//window.location = $(this).attr('href');
	});
	

	
	
/*
 * 
 * mobile dropdawn menu
 * 
 */
jQuery('a.dropdown-toggle').click(function(){
	jQuery('ul.dropdown-menu').stop().slideUp();
	jQuery(this).next('ul.dropdown-menu').stop().slideToggle();	
});

/*
 * 
 * Dane menu
 * 
 */
jQuery('#date-menu-hendler').click(function(){
	jQuery('.date-menu-hendler').slideToggle();
});


	var carouselSpeed = $('#magazines-wrapper .magazine-carousel').data('speed');;
	// modify tag cloud links to match up with twitter bootstrap

	// Input placeholder text fix for IE
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


	/* Tooltip */

	$('.show-tooltip').tooltip()

	/* Shadowbox */

	Shadowbox.init();





/* Testimonials SLIDERS */
	
	$('#before-after-wrapper ul').cycle({
		fx:      'scrollHorz',
		slides: '.item',
		timeout:  0,
		log:false,
		pager:  '#before-after-pagination ul',
		pagerActiveClass : 'activeSlide',
	    pagerTemplate: "",
	    caption: '#caption-wrapper .caption',
	    captionTemplate : "{{cycleCaption}} <a href='{{cycleLink}}'>[Read More]</a><div class='name'>{{cycleName}}</div>"

	});
	
	$( '#home-slider' ).on('cycle-pre-initialize', function( event, opts ) {
//		if($('#home-slider .item').first().find('.slide-video')){
//			$('#home-slider').cycle('pause');
//		
//		}
	});
	
	
	$('#before-after-wrapper ul').on ('cycle-before', function(event, optionHash) {
    	var caption = optionHash.caption;
    	var name = optionHash.name;
    	var link = optionHash.title;
		$('#caption-wrapper .caption').html(caption+'<a href="'+link+'">[...]</a>');
		$('#caption-wrapper .name').html('<a href="'+link+'">'+name+'</a>');
	});



/* FEATURED VIDEOS SLIDERS */
	
		$('#home-slider').cycle({
			fx:      'scrollHorz',
			slides: '.item',
			pager:  '#thumbnail-pager',
			pagerActiveClass : 'activeSlide',
		    pagerTemplate: "",
		    log:false,
		    swipe: true,
		    timeout:$('#home-slider').data('timeout'),
		    autoHeight: '600:400'
		});
	
	
		
	
	
			
	
	/* RESUME SLIDESHOW WHEN CLICKING ON A THUMBNAIL */
	
	$('#thumbnail-pager li a').on('click', function(){
		$('#home-slider').cycle('resume');
	});
	
	
	


	$('#featured-videos ul').cycle({
		fx:      'scrollVert',
		slides: '.item',
		timeout:  0,
		pager:  '#featured-videos-pagination ul',
		pagerActiveClass : 'activeSlide',
	    pagerTemplate: "",
	    log:false,
	    autoHeight: '600:400'
	});

	$( '#featured-videos ul' ).on( 'cycle-after', function( event, opts ) {
	    $('.play-video').show();
	    $('.video-wrapper').hide();
	    $('.grid-pattern').removeClass('playing');
	    // your event handler code here
	    // argument opts is the slideshow's option hash
	});

	$(document).on('click','.play-video', function(event){
		event.preventDefault();
		var videoID = $(this).data('videoid');
		$('#grid-pattern-'+videoID).addClass('playing');
		$('#video-wrapper-'+videoID).show();
		$(this).hide();
		jwplayer("video-"+videoID).play();
		
	});



	/* GALLERY SLIDER */

	function initSlider(){
		$('.gallery-slider').cycle({
			fx:      'scrollHorz',
			prev: '#slider-photos-prev',
			next: '#slider-photos-next',
			slides: '.item',
			timeout:  0,
			autoHeight: 'container',
			loader: 'wait',
			log:false,
			swipe: true,
//			progressive: '#progressive-images',
			allowWrap:false
		});


		$('.gallery-slider-thumbnails').cycle({
			fx:      'carousel',
			prev: '#slider-thumbnails-prev',
			next: '#slider-thumbnails-next',
			carouselVisible: 9,
			carouselFluid: true,
			allowWrap:false,
			slides: '.pager-thumbnail',
			log:false,
			swipe: true,
//			progressive: '#progressive-thumbnails',
//			loader: 'wait',
			timeout:  0
		});


		var slideshows = $('.media-slider').on('cycle-next cycle-prev', function(e, opts) {
			slideshows.not(this).cycle('goto', opts.currSlide);
		});

		$('.gallery-slider-thumbnails .cycle-slide').click(function(event){
		    var index = $('.gallery-slider-thumbnails').data('cycle.API').getSlideIndex(this);
		    slideshows.cycle('goto', index);
		});
	}

	initSlider();
	
	function showGalleryTeaser(){
		$('#gallery-teaser-wrapper').fadein();
	}


	/* Load galleries */


//	$('.gallery-link').on('click', function(event){
//		event.preventDefault();
//		var galleryID = $(this).data('galleryid');
//		var theHref = $(this).attr('href');
//		loadGallery(galleryID, theHref);
//	});

	function loadGallery(galleryID, theHref){
		$('#gallery-slider-wrapper').append('<div id="loading"></div>');
		$('#loading').spin("large", "white");
		$('.gallery-slider-inner').addClass('loading');

		$('.gallery-slider-inner').load(theHref+' #gallery-slider-inner', function() {
		  initSlider();
		  $('#loading').spin(false).remove();
		  $('.gallery-slider-inner').removeClass('loading');
		});


	}


//	$('.gallery-pagination-prev').click(function(event) {
//		event.preventDefault();
//	    $('.gallery-carousel').jcarousel('scroll', '-=1');
//	});
//
//	$('.gallery-pagination-next').click(function(event) {
//		event.preventDefault();
//	    $('.gallery-carousel').jcarousel('scroll', '+=1');
//	});



	/* Twitter Carousel */
	$('.tweet-wrapper ul').cycle({
		fx:      'fade',
		slides: 'li',
		swipe: true,
		pager:  '#tweet-pagination',
		pagerActiveClass : 'activeSlide',
		pagerTemplate: '<a href="#">&bull;</a>'


	});
	
	
	/* HOME SLIDER VIDEO */
	
//	$('.home-slider-inner').on('click', function(){
//		$('.home-slider-inner').cycle('pause');
//	});

	/* Video Teaser */

	$('.watch-preview a').on('click', function(event){
		event.preventDefault();
		var videoID = $(this).data('videoid');
		video_teaser_hide(videoID);
		jwplayer("video-"+videoID).play();
		jwplayer("video-"+videoID).onComplete(function(){$('#video-teaser-wrapper-'+videoID).fadeIn();});

	});
	
	
	function video_teaser_hide(videoID){
		$('#video-teaser-wrapper-'+videoID).fadeOut();
	};
	function video_teaser_show(videoID){
		$('#video-teaser-wrapper-'+videoID).fadeIn();
	};
	
	
//	$('.play-video').on('click', function(event){
//		event.preventDefault();
//		var videoID = $(this).data('videoid');
//		$('#grid-pattern-'+videoID).addClass('playing');
//		$('#video-wrapper-'+videoID).show();
//		$(this).hide();
//		jwplayer("video-"+videoID).play();
//	});
	

	/* MAGAZINE CAROUSEL */
	$('.magazine-carousel').cycle({
			fx:      'carousel',
			slides: '.magazine',
			prev: '.magazine-prev',
			next: '.magazine-next',
			carouselVisible: 5,
			timeout: carouselSpeed,
			pauseOnHover: true
		});
	


	/* Mobile Nav */



	/* FAQ */


	$('#questions-wrapper .question a').on('click', function(event){
		event.preventDefault();
		var theID= $(this).data('id');
		$('.answer').hide();
		$('.answer[data-id="'+theID+'"]').show();

		$('#answers-wrapper').removeClass('active').addClass('active');

	});
	
	/* Mobile Nav */
	
	var pagebody = $("#wrapper");
	var themenu = $("#mobile-nav-menu");
	var topbar  = $("#mobile-nav");
	var viewport = {
	  	width : $(window).width(),
	  	height : $(window).height()
	};
		// retrieve variables as 
		// viewport.width / viewport.height
	$('#menu-btn').click(function(e){
		e.preventDefault();
		var leftval = $("#wrapper").css('left');
		if(pagebody.hasClass('opened')){
			closeme(); 
		} else {
			openme();
		}
//		if(leftval == "0px") {
//			openme();
//		}
//		else { 
//			closeme(); 
//		}
	});
	
	function openme() { 
		var wrapperTop = pagebody.css('top');
//		topbar.css("left", "260px");
		topbar.addClass('opened');
		pagebody.addClass('opened');
//		pagebody.css({
//		"top":wrapperTop,
//		"left": "260px"
//		});
	}
	
	function closeme() {
		var wrapperTop = pagebody.css('top');
//	  	topbar.css("left", "0px");
	  	topbar.removeClass('opened');
	  	pagebody.removeClass('opened');
//	  	pagebody.css({
//	  	"top":wrapperTop,
//	  	"left": "0px"
//	  	});
	  	
	}
	

    jQuery(window).scroll(function() {
        if (jQuery("html, body").scrollTop() > 100) {
            jQuery(".scroll-to-top").fadeIn()
        } else {
            jQuery(".scroll-to-top").fadeOut()
        }
    });
    jQuery(".scroll-to-top").click(function() {
        jQuery("html, body").animate({scrollTop: 0}, 800);
        return false
    });


    var hHeight = jQuery('#mobile-nav-menu header').outerHeight();
    var tHeight = jQuery(window).height();
    jQuery('#mobile-nav-menu .mobile-menu-wrapper').css('height', tHeight-hHeight-10);




}); /* end of as page load scripts */
$( window ).load(function() {
  $('.gallery-slider-inner').css('visibility', 'visible');
  $('#gallery-loading').hide().remove();
  
  var featuredSliderElements  = $('#home-slider .video-player object, #home-slider video'),
  	    featuredPlayerIds = [];
  	
  	featuredSliderElements.each(function(i, player) {
  		featuredPlayerIds.push(player.id);
  		console.log(player.id);
  	});
  	
  	$.each(featuredPlayerIds, function(i, id) {
  		
  			jwplayer(id).onPlay(function() {
  				console.log('PAUSE');
  				$('#home-slider').cycle('pause');
  			});
  			
  			jwplayer(id).onComplete(function() {
  				//alert('cfghv');
  				$('#home-slider').cycle('resume');
  				$('#home-slider').cycle('next');
  				console.log('PLAY');
  			});
  		
  	});
  	
  	var featuredVideoElements  = $('#featured-videos .video-player object, #featured-videos video'),
  		    featuredVideosIds = [];
  		
  		featuredVideoElements.each(function(i, player) {
  			featuredVideosIds.push(player.id);
  			//alert(player.id);
  		});
  		
  		$.each(featuredVideosIds, function(i, id) {
  			jwplayer(id).onPlay(function() {
  				$('#home-slider').cycle('pause');
  			});
  			
  			jwplayer(id).onComplete(function() {
  				$('#featured-videos ul').cycle('next');
  				setTimeout(function(){
  					$('.cycle-slide-active .play-video').click();
  				}, 1000)
  			});
  		});
  		
  		
  		
  		/* Stop All Videos when one is playing */
  		
  		var elements  = $('.video-player > div, .video-player object, , .video-player video'),
  			    playerIds = [];
  			
  			elements.each(function(i, player) {
  				playerIds.push(player.id);
  			});
  			
  			$.each(playerIds, function(i, id) {
  				jwplayer(id).onPlay(function() {
  					$.each(playerIds, function(x, pid) {
  						if (id === pid)
  							return true;
  							
  						jwplayer(pid).stop();
  					});
  				});
  			});
});

jQuery(window).resize(function($){
    var hHeight = jQuery('#mobile-nav-menu header').outerHeight();
    var tHeight = jQuery(window).height();
    jQuery('#mobile-nav-menu .mobile-menu-wrapper').css('height', tHeight-hHeight-10);
});