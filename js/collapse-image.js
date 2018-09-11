$(document).ready(function(){
	$(".div-collapse").click(function () {
	    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
	    $(".caixa-collapse").slideToggle(2, function () {
	        //execute this after slideToggle is done
	        //change text of header based on visibility of content div


	    });

		if ($("#img_click").attr("src") == "../../theme/escola_modelo/pix/smarts/bg_saiba_mais_header2_curso.png") {
	    	$('#img_click').attr('src','../../theme/escola_modelo/pix/smarts/bg_saiba_mais_fechado2.png');
	    }
	    else{
	    	$('#img_click').attr('src','../../theme/escola_modelo/pix/smarts/bg_saiba_mais_header2_curso.png');
	    	$(".caixa-collapse").css("margin-top", "0");

	    }

	    $header = $(this);
	    //getting the next element


	});
});