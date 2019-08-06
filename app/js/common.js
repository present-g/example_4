$(".toggle-menu").click(function() {
    $(this).toggleClass("on");
    $(".main-menu").toggleClass('visibility');
    return false;
});

$('#first-slider').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        650: {
            items: 2
        },
        860: {
            items: 3
        },
        1124: {
            items: 4
        }
    }
});
//1225 830
$('#respond-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        830: {
            dots: true,
            items: 2
        },
        1225: {
            dots: true,
            items: 3
        }
    }
});


$('.slider').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
    // other options
});

$('.first-screen__link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});

// WOW.js 

new WOW().init();