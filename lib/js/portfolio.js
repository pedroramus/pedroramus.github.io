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
            if ($("#expand-button").html() == "Expandir") {
                // I will change the text of the button to "Ocultar"
                $("#expand-button").html("Ocultar");
            } else {
                // I will change the text of the button to "Expandir"
                $("#expand-button").html("Expandir");
            }
        });
    });
}());
