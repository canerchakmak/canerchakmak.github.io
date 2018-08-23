jQuery( document ).ready(function() {
//alert(adminAjax.ajaxurl)
/*************************************/
/* Manage look and fell of accordion */
/*************************************/
	jQuery('#cssmenu ul li  a').each(function(){
		var tempTextStore = jQuery(this).text();
		jQuery(this).text("");
		jQuery(this).html('<span>'+tempTextStore+'</span>');
		jQuery(this).attr('href', 'javascript: void(0);');
		jQuery(this).attr('data-flag',"0");
		var checkNextElement = jQuery(this).next();
		if(checkNextElement.is('ul')) {
			jQuery(this).parent('li').addClass('has-sub');
		}
	});
	/*Display Accordion when it is ready by style*/
	jQuery('#cssmenu').css('display', 'block');

/*************************************/
/*       Add functionality           */
/*************************************/	
jQuery("#loadingimage").hide();
	jQuery(document).on('click', '#cssmenu ul li a', function(e) {
	  e.preventDefault();
	  jQuery('#cssmenu li').removeClass('active');
	  jQuery(this).closest('li').addClass('active');	
	  var checkElement = jQuery(this).next();
	  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
	    jQuery(this).closest('li').removeClass('active');
	    checkElement.slideUp(400,function(){
	    	if(jQuery(window).width() > 767) {
	    	jQuery( ".category-sidebar" ).css('height',jQuery('#main').css('height'));
	    	var absHeight = jQuery('#cssmenu ul').height();
	    	var abstop = jQuery('#sidebar-inner').css('top');
	    	var total = parseInt(absHeight) + parseInt(abstop);
	    	if(total >  parseInt(jQuery( ".category-sidebar" ).css('height'))) {
	    		jQuery('#sidebar-inner').css('position', 'static');
	    		jQuery( ".category-sidebar" ).css('height','auto');
	    		var height_auto = jQuery( ".category-sidebar" ).css('height');
	    		jQuery( ".category-sidebar" ).css('height', height_auto);
	    	} else {
	    		//jQuery( ".category-sidebar" ).css('height',jQuery('#main').css('height'));
	    	}
	    	}
	    });
	  }
	  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
	    jQuery('#cssmenu ul ul:visible').slideUp(400,function(){
	    	if(jQuery(window).width() > 767) {
	    	jQuery( ".category-sidebar" ).css('height',jQuery('#main').css('height'));
	    	 var absHeight = jQuery('#cssmenu ul').height();
	    	var abstop = jQuery('#sidebar-inner').css('top');
	    	var total = parseInt(absHeight) + parseInt(abstop);
	    	if(total >  parseInt(jQuery( ".category-sidebar" ).css('height'))) {
	    		jQuery('#sidebar-inner').css('position', 'static');
	    		jQuery( ".category-sidebar" ).css('height', 'auto');
	    		var height_auto = jQuery( ".category-sidebar" ).css('height');
	    		jQuery( ".category-sidebar" ).css('height', height_auto);
	    	} else {
	    		//jQuery( ".category-sidebar" ).css('height',jQuery('#main').css('height'));
	    	}
	    	}
	    });
	    checkElement.slideDown(400,function(){
	    	jQuery(".nano").nanoScroller();
	    	if(jQuery(window).width() > 767) {
	    	jQuery( ".category-sidebar" ).css('height',jQuery('#main').css('height'));
	    	var absHeight = jQuery('#cssmenu ul').height();
	    	var abstop = jQuery('#sidebar-inner').css('top');
			var total = parseInt(absHeight) + parseInt(abstop);
	    	if(total >  parseInt(jQuery( ".category-sidebar" ).css('height'))) {
	    		jQuery('#sidebar-inner').css('position', 'static');
	    		jQuery( ".category-sidebar" ).css('height','auto');
	    		var height_auto = jQuery( ".category-sidebar" ).css('height');
	    		jQuery( ".category-sidebar" ).css('height', height_auto);
	    	} else {
	    		//jQuery( ".category-sidebar" ).css('height',jQuery('#main').css('height'));
	    	}
	    	}
	    });
	  }
	 
	  /* Ajax Implementation*/
	 if(!checkElement.is('ul')) {
		 if(jQuery(this).attr('data-flag') == "0") {
	        jQuery("#loadingimage").show();
	        jQuery.ajax({
	            type: "POST",
	            ajax: false,
	            url: adminAjax.ajaxurl,
	            data: {action: "accordion_load", id: jQuery(this).parent('li').attr('class')},
	            success: function(response) {
	                if (response) {
	                	jQuery('.page-template-template-ped-page-php #main').removeClass('span5');
	  					jQuery('.page-template-template-ped-page-php #main').addClass('span8');
	                    jQuery("#loadingimage").hide();
	                    jQuery("#accordion-load").html(response);
	                    if(jQuery(window).width() < 768) {
	                    	jQuery('.date-menu-hendler').slideUp();
	                    }
						jQuery('html, body').animate({scrollTop : 0},800);
	                }
	            }
	    	});
	    jQuery('#cssmenu ul li  a').attr('data-flag',"0");
	    jQuery(this).attr('data-flag',"1");
	    }
	   }
	 /* Ajax Implementation ends here*/
	jQuery('#cssmenu ul ul a').parent('li').parent('ul').parent('li').removeClass('current-active');
	jQuery('#cssmenu ul ul a[data-flag="1"]').parent('li').parent('ul').parent('li').addClass('current-active');
	var mainCatText = jQuery('#cssmenu ul ul a[data-flag="1"]').parent('li').parent('ul').parent('li').children('a').children('span').text();
	if(mainCatText == "") {
		mainCatText = jQuery('#cssmenu ul ul a[data-flag="1"]').children('span').text();
	}
	var primaryText = 'PLITTIONARY - DICTIONARY OF EXERCISES';
	if(mainCatText != "") {
			//jQuery('h1.page-title').text(primaryText+' - '+mainCatText);
		jQuery('h1.page-title').text(primaryText);
		}
	});
//jQuery('#cssmenu ul li').first().children('a').next("ul").children('li').first().children('a').trigger('click');

	/*jx(".scroll-container").stickyColumn();*/
	jQuery('#sidebar-inner').scrollToFixed({
            marginTop: jQuery('#main-header').outerHeight(true) + 60,
            limit: function() {
                var limit = jQuery('#footer').offset().top - jQuery('#sidebar-inner').outerHeight(true) - 10;
                return limit;
            },
            minWidth: 500,
            zIndex: 999,
            fixed: function() {  },
            dontCheckForPositionFixedSupport: true
    });

/*
 * 
 * js for date menu
 * 
 */

	jQuery('.date-menu ul li  a').each(function(){
		var checkElements = jQuery(this).next();
		if(checkElements.is('ul')) {
			jQuery(this).parent('li').addClass('has-sub');
		}
		if(jQuery(this).parent('li').hasClass('current')) {
			jQuery(this).parent('li').parent('has-sub').addClass('active');;
		}
	});
	jQuery('.date-menu ul li  a').each(function(){
		if(jQuery(this).parent('li').hasClass('current')) {
			jQuery(this).parent('li').parent('ul').parent('li.has-sub').addClass('current-parent');;
		}
	});
	jQuery(document).on('click', '.date-menu ul li a', function() {
		  jQuery('.date-menu li').removeClass('active');
		  jQuery(this).closest('li').addClass('active');	
		  var checkElement = jQuery(this).next();
		  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		    jQuery(this).closest('li').removeClass('active');
		    checkElement.slideUp('normal');
		  }
		  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		    jQuery('.date-menu ul ul:visible').slideUp('normal');
		    checkElement.slideDown('normal',function() {
		    	jQuery(".nano").nanoScroller();
		    });
		  }
		
	});
	jQuery('.wod-popup-link').click(function(e) {
		var id = jQuery(this).attr('id');
		jQuery(this).parent('strong').next('div.wod-popup').fadeIn('normal');
		jQuery('.popup-background').fadeIn('normal');
                
                
                 if(jQuery(window).width() < 768) {
                    jQuery('body, html').animate({ scrollTop: 0 }, 300);
                }
                
                
		// jQuery('.wod-popup').each(function() {
			// if(id == jQuery(this).attr('data-id')) {
				// jQuery(this).fadeIn('normal');
				// jQuery('.popup-background').fadeIn('normal');
			// }
		// });

	});
	jQuery('.popup-background, .close-it').click(function(){
		jQuery('.wod-popup').fadeOut('normal');
		jQuery('.popup-background').fadeOut('normal');
	});
	
	
	
	jQuery('ul.nano').each(function(){
		var htmlstring = jQuery(this).html();
		jQuery(this).html('<div class="nano-content">'+htmlstring+'<div>');
	});
	jQuery(".nano").nanoScroller();
	
	jQuery('.page-template-template-workout-videos-new-php .date-menu > ul > li.has-sub > a').trigger('click');	

});

function launchVideoListone(theTags,theContainer,theTitle,theText){
	 $.ajax({
	         url: stylesheet_directory_path.adminAjax, 
	         // url: location+'/wp-admin/admin-ajax.php',
	         async: true,
	         data:{
	              'action':'do_ajax',
	              'fn':'get_videos_tagged',
	              'tags':theTags
	              },
	         dataType: 'json'
	         }).done(function(data){
	         	//alert('2');
	         	
	         	console.log(data.results[0]);
	         	var video_list="";
	         	
	         	$('body.page-id-159').addClass('opened');
	         	
	         	var videoContent = "<div id='video-playlist' class='overlay-videos-pagination'></div>";
	         	
	         	Shadowbox.open({
	         	       content:    videoContent,
	         	       player:     "html",
	         	       title:     "<h2>"+theTitle+"</h2>",
	         	       overlayOpacity: 0.99,
	         	       height:     450,
	         	       width:      900,
	         	       options: { 
	         	       	onClose: function(){ 
	         	       	     $('body.page-id-159').removeClass('opened');
	         	       	     $('#interactive_body_map').removeClass('active');
	         	       	},
						onFinish: function(){
								$('#video-playlist').html('<p>'+theText+'</p><p>Video Workouts</p><ul></ul>');
								$.each(data.results[0], function(index) {
									var thumbnail = data.results[0][index].thumbnail_url;
									var permalink = data.results[0][index].permalink;
									var duration = data.results[0][index].duration;
									var title = data.results[0][index].title;										
										$('#video-playlist ul').append('<li><a href="'+permalink+'" class="bm-video-wrapper"><i class="icon-play-circle"></i><div class="video-duration">'+duration+'</div><div style="width:188px;height:107px;display:block;float:left"><img src="'+thumbnail+'"/></div></a><a href="'+permalink+'">'+title+'</a></li>');
								});
								$('#video-playlist').append('<p style="float: right;margin-top: -30px;padding: 0; width: 20%;">Written Workouts</p><ul class="wod"></ul>');
								$.each(data.results[1], function(index) {
									var date = data.results[1][index].date;
									var datepermalink = data.results[1][index].datePermalink;
									var filter = data.results[1][index].filter;
									//$('#video-playlist ul.wod').append('<li><a href="'+datepermalink+'?filter='+filter+'" class="bm-video-wrapper">'+date+'</a></li>');
									$('#video-playlist ul.wod').append('<li><a href="'+datepermalink+'" class="bm-video-wrapper">'+date+'</a></li>');
								});
								
							} 
						} 
	         	   });
	         	
	         	});
}



jQuery('.list-body-map a').click(function(event){
	event.preventDefault();
		var theTitle = $(this).data('title');
		var theText = $(this).data('description');
		var theTags = $(this).data('tag');
		var theContainer = $(this);
		launchVideoListone(theTags,theContainer,theTitle,theText);
});

