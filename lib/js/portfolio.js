(function() {
    "use strict";

    $(document).ready(function() {
        /*
        	CODE FOR SCROLLING PAGE
        */
        /*$('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });*/
        $("a.page-scroll").click(function(event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
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
            //console.log($('nav').css('display'));
            if ($('nav').css('display') == "none") {
                $('#menu-icon').attr('class', 'fa fa-times');
            } else {
                $('#menu-icon').attr('class', 'fa fa-bars');
            }
            $('#website-content').fadeToggle();
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
