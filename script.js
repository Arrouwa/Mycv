(function ($) {
    'use strict';

    //Check if jquery exist or not
    if (typeof jQuery === "undefined") {
        throw new Error("jQuery plugins need to be before this file");
    }

    $.sp = {};

    /* Options =================================================================================================================
    *  You can manage the page options */
    $.sp.options = {
        pages: {
            "#home": { title: "Home", in: null, out: null },
            "#about": { title: "About Me", in: "animated fadeInDown", out: "animated fadeOutDown" },
            "#resume": { title: "Resume", in: "animated fadeInDown", out: "animated fadeOutDown" },
            "#portfolio": { title: "Portfolio", in: "animated fadeInDown", out: "animated fadeOutDown" },
            "#blog": { title: "Blog", in: "animated fadeInDown", out: "animated fadeOutDown" },
            "#contacts": { title: "Contacts", in: "animated fadeInDown", out: "animated fadeOutDown" }
        }
    };

    /* Helpers =================================================================================================================
    *  You can manage the helpers */
    $.sp.helpers = {
        setDocumentTitle: function (hash) {
            document.title = $.sp.options.pages[hash].title + ' | Adam ';
        },
        checkMobileDevice: function () {
            var md = new MobileDetect(window.navigator.userAgent);
            if (md.mobile()) {
                $('body').addClass('mobile-device');
            }
        }
    };

    /* Left Sidebar ============================================================================================================
    *  You can manage the left sidebar menu options */
    $.sp.leftSidebar = {
        activate: function () {
            var $header = $("header");
            var $this = this;

            $header.find(".expand-area .expand-collapse").on("click", function () {
                $this.toggleExpand();
            });

            $('.btn-menu-toggle').on('click', function () {
                $header.toggleClass('open');
            });

            if ($(window).width() < 1024) {
                $('body').removeClass('left-side-menu-expand');
            }
            $(window).on('resize', function () {
                if ($(window).width() < 1024) {
                    $('body').removeClass('left-side-menu-expand');
                }
            });

            $this.setActive();
            $this.setActiveOnLoad();
        },
        setActive: function () {
            var $header = $("header");
            var $linksArea = $header.find('.links-area');
            var $logoArea = $header.find('.logo-area');

            $linksArea.find("ul li").on("click", function () {
                $linksArea.find("ul li").removeClass("active");
                $(this).addClass("active");

                var page = $(this).find('a').attr("href");
                $header.removeClass('open');
                $.sp.pages.loadPage(page);
            });

            $logoArea.find("a").on("click", function () {
                $linksArea.find("ul li").removeClass("active");
                var page = $(this).attr("href");

                $linksArea.find('ul li a[href="' + page + '"]').parent().addClass("active");
                $.sp.pages.loadPage(page);
            });
        },
        setActiveOnLoad: function () {
            var hash = window.location.hash;
            hash = hash === undefined || hash === '' ? '#home' : hash;

            $('header .links-area ul li a[href="' + hash + '"]').parent().addClass("active");
            $.sp.pages.loadPage(hash);
        },
        toggleExpand: function () {
            var $this = this;

            if ($('body').hasClass('left-side-menu-expand')) {
                $this.collapse();
            } else {
                $this.expand();
            }
        },
        expand: function () {
            var $header = $("header");
            var $body = $("body");

            $header.addClass("menufade");

            setTimeout(function () {
                $body.addClass("left-side-menu-expand");
            }, 300);

            setTimeout(function () {
                $header.removeClass("menufade");
            }, 1200);
        },
        collapse: function () {
            var $header = $("header");
            var $body = $("body");

            $header.addClass("menufade");

            setTimeout(function () {
                $body.removeClass("left-side-menu-expand");
            }, 300);

            setTimeout(function () {
                $header.removeClass("menufade");
            }, 1200);
        }
    };

    /* Left Pages ==============================================================================================================
    *  You can manage the page options */
    var loadedPage = [];
    var previousPage = "#home";
    $.sp.pages = {
        activate: function () {
            var $this = this;

            $this.home(true);
            loadedPage.push('#home');

            $this.about();
            $this.portfolio();
        },
        loadPage: function (page) {
            var $this = this;
            var firstTime = $.inArray(page, loadedPage) === -1;
            if (firstTime) loadedPage.push(page);

            if (page === "#home") {
                $this.home(firstTime);
            }

            $this.makePageAnimation(page);
            $.sp.helpers.setDocumentTitle(page);
        },
        home: function (firstTime) {
            if (firstTime) {
                var typed = new Typed('.pages #home .subtitle .typed', {
                    strings: ["FRONTEND DEVELOPER", "UX/UI DESIGNER", "WEB DEVELOPER", "GRAPHIC DESIGNER"],
                    typeSpeed: 50,
                    backDelay: 5000,
                    loop: true
                });
            }
        },
        about: function () {
            $('.testimonials-container').owlCarousel({
                dots: true,
                items: 2,
                loop: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    760: {
                        items: 2
                    }
                }
            });
        },
        portfolio: function () {
            var $container = $('#portfolio .grid-items');
            var $filterBtnGroup = $('.filter-button-group');

            $container.imagesLoaded(function () {
                setTimeout(function () {
                    if ($filterBtnGroup.find('input[type="radio"]:checked').length === 0) {
                        $filterBtnGroup.find('input[type="radio"]:first').prop('checked', true).trigger('change');
                    }

                    $container.multipleFilterMasonry({
                        itemSelector: '.col',
                        filtersGroupSelector: '.filter-button-group',
                        percentPosition: true,
                        gutter: 0
                    });
                }, 1200);
            });

            $filterBtnGroup.on('change', 'input[type="radio"]', function () {
                if ($(this).is(':checked')) {
                    $('.f_btn').removeClass('active');
                    $(this).closest('.f_btn').addClass('active');
                }

                $('.popup-type-image').magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    preloader: true,
                    mainClass: 'popup-box',
                    image: {
                        verticalFit: true
                    }
                });

                $('.popup-type-video, .popup-type-music').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    removalDelay: 160,
                    preloader: false,
                    mainClass: 'popup-box',
                    fixedContentPos: false
                });

                $('.popup-type-content').magnificPopup({
                    type: 'inline',
                    overflowY: 'auto',
                    closeBtnInside: true,
                    mainClass: 'popup-box-inline',
                    callbacks: {
                        open: function () {
                            var $popupBox = $('.popup-box').css('height', $(document).height() - 100);

                            $(window).on('resize', function () {
                                $popupBox.css('height', $(document).height() - 100);
                            });
                        }
                    }
                });
            });
        },
        makePageAnimation: function (page) {
            var $pageContainer = $('.pages');
            var $homeContent = $('#home .center .vertical-middle');
            var inEffectClass = $.sp.options.pages[page].in;

            if (page === '#home') {
                $homeContent.addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).addClass('active').removeClass('animated fadeIn');
                });
            } else if (previousPage === '#home') {
                $homeContent.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('active animated fadeOut');
                });
            }

            if (previousPage !== page) {
                if (previousPage !== '#home') {
                    var outEffectClass = $.sp.options.pages[previousPage].out;
                    $pageContainer.find(previousPage).addClass(outEffectClass).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).removeClass(outEffectClass).removeClass('active');
                    });
                }

                previousPage = page;
                $pageContainer.find(page).addClass(inEffectClass).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass(inEffectClass);
                    $(this).addClass('active');
                });
            }
        }
    };

    /* Loading =================================================================================================================
    *  You can manage the fullscreen loading options */
    $.sp.loading = {
        activate: function () {
            setTimeout(function () {
                $('.loading-container').fadeOut(500);
            }, 500);
        }
    };


    /* Page Load - Function ====================================================================================================
    *  You can manage the function when page loaded */
    $(function () {
        $.sp.helpers.checkMobileDevice();
        $.sp.pages.activate();
        $.sp.leftSidebar.activate();
        $.sp.loading.activate();
    });
}(jQuery));