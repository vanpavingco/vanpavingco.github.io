jQuery(document).ready(function ($) {    
    var $window = $(window),
    $topback = $('.back-to-top'),
    $bodyhtml = $('html, body'),
    $isotops = $('.isotopeFilters');
    //isotop effect portfolio 
    var myTheme = window.myTheme || {},
            $win = $window;

    myTheme.Isotope = function () {

        // 4 column layout
        var isotopeContainer = $('.isotopeContainer');
        if (!isotopeContainer.length || !jQuery().isotope)
            return;
        $win.load(function () {
            isotopeContainer.isotope({
                itemSelector: '.isotopeSelector'
            });
            $isotops.on('click', 'a', function (e) {
                $isotops.find('.active').removeClass('active');
                $(this).parent().addClass('active');
                var filterValue = $(this).attr('data-filter');
                isotopeContainer.isotope({filter: filterValue});
                e.preventDefault();
            });
        });

    };

    myTheme.Isotope();

    //jQuery for page scrolling feature - requires jQuery Easing plugin

    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $bodyhtml.stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $(".navbar-nav li a").bind('click',function (event) {
        $(".navbar-collapse").collapse('hide');
    });

    $topback.bind('click',function (event) {
        event.preventDefault();
        $bodyhtml.animate({scrollTop: 0}, duration);
        return false;
    });

    if ($window.width() >= 768) {
        equalheight = function (container) {

            var currentTallest = 0,
                    currentRowStart = 0,
                    rowDivs = new Array(),
                    $el,
                    topPosition = 0;
            $(container).each(function () {

                $el = $(this);
                $($el).height('auto')
                topPostion = $el.position().top;

                if (currentRowStart != topPostion) {
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].height(currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPostion;
                    currentTallest = $el.height();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
                }
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
            });
        }
        $window.on('load',function () {
            equalheight('.set-equal-height');
        });
        $window.on('resize',function () {
            equalheight('.set-equal-height');
        });
    }

});

var $window = $(window),    
    $topback = $('.back-to-top'),
    $navfixed = $(".navbar-fixed-top"),    
    $topbar = $(".top-bar");
    $text = $('.page-scroll');
    $icons = $('.social-icon li a');

// Back-To-Top
var offset = 220,duration = 500;
$window.on('scroll',function () {
    if ($(this).scrollTop() > offset) {
        $topback.fadeIn(duration);
    } else {
        $topback.fadeOut(duration);
    }
    //jQuery to collapse the navbar on scroll
    if ($(this).scrollTop() > 50) {
        $navfixed.addClass("top-nav-collapse");
        $topbar.addClass("top-nav-margin");
        $text.css('color', '#000000');
        $icons.css('color', '#000000');

    } else {
        $navfixed.removeClass("top-nav-collapse");
        $topbar.removeClass("top-nav-margin");
        $text.css('color', '#ffffff');
        $icons.css('color', '#ffffff');
    }
});
//Hide Loader when Window loaded
$window.on('load',function () {
    $(".loader").fadeOut("slow");
});
