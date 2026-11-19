(function ($) {
    "use strict";

    //===== Prealoder

    $(window).on("load", function (event) {
        $(".preloader").delay(100).fadeOut(500);
        //===== CopyRight year
        document.getElementById("copyright").innerHTML = new Date().getFullYear();
    });

    //===== Mobile Menu

    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on("click", function () {
        $(".navbar-toggler").removeClass("active");
    });

    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on("click", function () {
        $(".navbar-collapse").removeClass("show");
    });

    //===== Sticky

    $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });

    //===== Section Menu Active

    // Parallaxmouse js

    function parallaxMouse() {
        if ($("#parallax").length) {
            var scene = document.getElementById("parallax");
            var parallax = new Parallax(scene);
        }
    }
    parallaxMouse();

    //===== Header-content
    $(window).on("scroll", function (event) {
        if ($(this).scrollTop() < 400) {
            $(".header-content").addClass("animate-left");
        } else {
            $(".header-content").removeClass("animate-left");
        }
    });

    //===== Navi active
    var navSections = $(".navbar-nav .nav-item > a.page-scroll[href^='#']")
        .map(function () {
            var target = $($(this).attr("href"));
            return target.length ? { item: $(this).parent(), target: target } : null;
        })
        .get();

    $(window).on("scroll", function (event) {
        if (!navSections.length) return;
        var scrollTop = $(this).scrollTop();
        var current = navSections[0];
        if (scrollTop + $(window).height() >= $(document).height() - 2) {
            current = navSections[navSections.length - 1];
        } else {
            $.each(navSections, function (_, section) {
                if (scrollTop + 200 >= section.target.offset().top) current = section;
            });
        }
        $.each(navSections, function (_, section) {
            section.item.removeClass("active");
        });
        current.item.addClass("active");
    });

    //===== Counter Up

    $(".counter").counterUp({
        delay: 10,
        time: 100,
    });

    //===== Magnific Popup

    $(".image-popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    $(".job-gallery").each(function () {
        $(this).magnificPopup({
            delegate: "a.job-shot-image",
            type: "image",
            gallery: {
                enabled: true,
            },
        });
    });

    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on("scroll", function (event) {
        if ($(this).scrollTop() > 600) {
            $(".back-to-top").fadeIn(200);
        } else {
            $(".back-to-top").fadeOut(200);
        }
    });

    //Animate the scroll to top
    $(".back-to-top").on("click", function (event) {
        event.preventDefault();

        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1500
        );
    });

    //Show more
    function workMore() {
        $(".work-more").on("click", function (event) {
            $(".more").removeClass("more");
            $(".work-more-btn").css("display", "none");
        });
        $(".work-more-btn").on("click", function (event) {
            $(".more").removeClass("more");
            $(".work-more-btn").css("display", "none");
        });
    }
    workMore();
})(jQuery);
