$(document).ready(function () {

    maintainSameHeight($('[data-same-height="card"]'));

    function maintainSameHeight($list) {
        var height = 0;

        $list.each(function () {
            var $this = $(this);
            if ($this.outerHeight() > height) {
                height = $this.outerHeight();
            }
        });

        $list.css("height", height);
    }

// Mobile Navigation
    $('.mobile-toggle').click(function() {
        if ($('header').hasClass('open-nav')) {
            $('header').removeClass('open-nav');
        } else {
            $('header').addClass('open-nav');
        }
    });

    $('.main_h li a').click(function() {
        if ($('header').hasClass('open-nav')) {
            $('header').removeClass('open-nav');
        }
    });

//carousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

//language

    $('.dropbtn').click(function() {
            $('.dropdown-content').toggle();
    });

    $('#en').click(function() {
        $('.dropbtn').removeClass('ru eng').addClass('eng').text( 'ENG');
        $('.dropdown-content').toggle();
    });

    $('#ru').click(function() {
        console.log('click');
        $('.dropbtn').removeClass('ru eng').addClass('ru').text( 'RU');
        $('.dropdown-content').toggle();
    });


//clocks
    $(document).ready(function($) {
        setInterval( function() {
            var seconds = new Date().getSeconds();
            var sdegree = seconds * 6;
            var srotate = 'rotate(' + sdegree + 'deg)';

            $('#second').css({'-moz-transform' : srotate, '-webkit-transform' : srotate, '-o-transform' : srotate});

        }, 1000 );

        setInterval( function() {
            var hours = new Date().getHours();
            var mins = new Date().getMinutes();
            var hdegree = hours * 30 + (mins / 2);
            var hrotate = 'rotate(' + hdegree + 'deg)';

            $('#hour').css({'-moz-transform' : hrotate, '-webkit-transform' : hrotate, '-o-transform' : hrotate});

        }, 1000 );

        setInterval( function() {
            var mins = new Date().getMinutes();
            var mdegree = mins * 6;
            var mrotate = 'rotate(' + mdegree + 'deg)';

            $('#minute').css({'-moz-transform' : mrotate, '-webkit-transform' : mrotate, '-o-transform' : mrotate});

        }, 1000 );

        for (i=1;i<=6;i++) {
            $('#center').before('<div id="l'+i+'"></div>');
        }
        for (i=1;i<=30;i++) {
            $('#center').before('<div id="ln'+i+'"></div>');
            $('#ln'+i).css({
                "-moz-transform" : "rotate(" + i*6 + "deg)",
                "-webkit-transform" : "rotate(" + i*6 + "deg)",
                "-o-transform" : "rotate(" + i*6 + "deg)",
                "padding" : "60px 1px 60px 0",
                "left" : "60px",
                "position" : "absolute",
                "display" : "block",
                "content" : "",
            });
        }
    });







});