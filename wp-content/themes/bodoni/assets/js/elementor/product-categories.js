(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {
        elementorFrontend.hooks.addAction('frontend/element_ready/bodoni-product-categories.default', ($scope) => {
            let $carousel = $('.bodoni-carousel', $scope);
            if ($carousel.length > 0) {
                if ($carousel.hasClass('layout-1')) {
                    let data = $carousel.data('settings');
                    $carousel.slick(
                        {
                            dots: data.navigation == 'both' || data.navigation == 'dots' ? true : false,
                            arrows: data.navigation == 'both' || data.navigation == 'arrows' ? true : false,
                            infinite: data.loop,
                            speed: 300,
                            slidesToShow: parseInt(data.items),
                            autoplay: data.autoplay,
                            autoplaySpeed: data.autoplaySpeed,
                            slidesToScroll: 1,
                            lazyLoad: 'ondemand',
                            rtl: data.rtl,
                            centerMode: true,
                            centerPadding: '280px',
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: parseInt(data.items_tablet),
                                        centerPadding: '140px',
                                    }
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: parseInt(data.items_mobile),
                                        centerMode: false,
                                        centerPadding: '0px',
                                    }
                                }
                            ]
                        }
                    );
                } else {
                    let data = $carousel.data('settings');
                    $carousel.slick(
                        {
                            dots: data.navigation == 'both' || data.navigation == 'dots' ? true : false,
                            arrows: data.navigation == 'both' || data.navigation == 'arrows' ? true : false,
                            infinite: data.loop,
                            speed: 300,
                            slidesToShow: parseInt(data.items),
                            autoplay: data.autoplay,
                            autoplaySpeed: data.autoplaySpeed,
                            slidesToScroll: 1,
                            lazyLoad: 'ondemand',
                            rtl: data.rtl,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: parseInt(data.items_tablet),
                                    }
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: parseInt(data.items_mobile),
                                    }
                                }
                            ]
                        }
                    );
                }
            }
        });
    });
})(jQuery);


