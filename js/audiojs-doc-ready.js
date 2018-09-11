// initialise plugins
jQuery(document).ready(function($){ 
	//alert('is running');
    // Audio js
    audiojs.events.ready(function() {
    	var as = audiojs.createAll();
	});
  
});

jQuery(window).load(function($){ 
    jQuery(".audiojs").each(function() {
        var wi = jQuery(this).width();
        if (wi <= 310){
            jQuery(this).addClass('audioResize');
        }else {
            jQuery(this).removeClass('audioResize');
        }
    });
  
});



/*
$(window).on("resize load", function () {
    var wi = $('#audiojs_wrapper0').width();
    if (wi <= 267){
        $('#audiojs_wrapper0').addClass('audioResize');
        }
    else {
        $('#audiojs_wrapper0').removeClass('audioResize');
        }
}); 
*/