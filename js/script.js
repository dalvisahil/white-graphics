/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
 */

$(window).on('load', function () {
    $('#preloader').delay(150).fadeOut('slow');
});


$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<i class="lni-chevron-left-circle"></i>', '<i class="lni-chevron-right-circle"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });

    $("#progress-elements").waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + "%"
            }, 800);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

    //SERVICES SECTION
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

    $("#isotope-container").isotope({});
    $('#isotope-filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter: filterValue
        });

        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $("#portfolio").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true
        },
//        overflowY: 'scroll'
        callbacks: {
            open: function(){
                $("html").css('margin-right','0');
            },
        }
    });

});
