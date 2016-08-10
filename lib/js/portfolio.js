(function() {
    "use strict";

    $(document).ready(function() {
        /*
	    	NAVBAR SECTION
	    */
        $('#menu-button').click(function(event) {
            event.preventDefault();
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
