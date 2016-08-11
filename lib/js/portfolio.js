(function() {
    "use strict";

    $(document).ready(function() {
        /*
	    	NAVBAR SECTION
	    */
        $('#menu-button').click(function(event) {
            event.preventDefault();
            //console.log($('nav').css('display'));
            if($('nav').css('display') == "none") {
            	$('#menu-icon').attr('class', 'fa fa-times');
            } else {
            	$('#menu-icon').attr('class', 'fa fa-bars');
            }
            $('nav').slideToggle('slow');
        });

        /*
	    	SOBRE SECTION
	    */
        // button expand
        $("#expand-button").click(function(event) {
            // prevent the page reload
            event.preventDefault();

            // This will get the content
            if ($(this).html() == "Expandir") {
                // I will change the text of the button to "Ocultar"
                $(this).html("Ocultar");
            } else {
                // I will change the text of the button to "Expandir"
                $(this).html("Expandir");
            }
            $('#hidden-skills').fadeToggle('slow');
        });
    });
}());
