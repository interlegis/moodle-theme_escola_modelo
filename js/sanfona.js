$( document ).ready(function() {

	var acc = document.getElementsByClassName("sanfona");
	var i;

	for (i = 0; i < acc.length; i++) {
	    acc[i].addEventListener("click", function() {
	        this.classList.toggle("active-sanfona");
	        var painel = this.nextElementSibling;
	        if (painel.style.display === "block") {
	            painel.style.display = "none";
	        } else {
	            painel.style.display = "block";
	        }
	    });
	}
});
