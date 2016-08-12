(function() {
    "use strict";

    $(document).ready(function() {
        /*
        	GENERAL FUNCTIONS
        */

        // when open menu, this code is executed
        var openMenu = function() {
            //$('#website-content').fadeToggle();
            if ($('nav').css('display') == "none") {
                $('#menu-icon').attr('class', 'fa fa-times');
            } else {
                $('#menu-icon').attr('class', 'fa fa-bars');
            }
            $('nav').slideToggle('slow');
        }

        /*
        	CODE FOR SCROLLING PAGE
        */
        $("a.page-scroll").click(function(event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                //event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });

        $("a.page-scroll-menu").click(function(event) {
        	openMenu();
            var target = $(this.getAttribute('href'));
            if (target.length) {
                //event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });

        /*
	    	NAVBAR SECTION
	    */
        $('#menu-button').click(function(event) {
            event.preventDefault();
            openMenu();
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
