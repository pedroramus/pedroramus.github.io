(function() {
    "use strict";
    /*
    	SOBRE SECTION FUNCTIONALITIES
    */
    $(document).ready(function() {
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
