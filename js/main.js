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

    var currentTimeZone = new Date().getTimezoneOffset()/60;
    var timeZoneMoscow = 3;
    var timeZoneKiev = 3;
    var timeZoneKazahstan = 6;

    var changeHoursKiev = currentTimeZone + timeZoneKiev;
    var changeHoursKazahstan = currentTimeZone + timeZoneKazahstan;
    var changeHoursMoscow = currentTimeZone + timeZoneMoscow;

    setInterval( function() {

        var seconds = new Date().getSeconds();
        var sdegree = seconds * 6;
        var srotate = 'rotate(' + sdegree + 'deg)';

        $('.second').css({'-moz-transform' : srotate, '-webkit-transform' : srotate, '-o-transform' : srotate});

    }, 1000 );

    setInterval( function() {

        var hoursU = new Date().getHours();
        var mins = new Date().getMinutes();
        var hdegreeU = hoursU * 30 + (mins / 2);
        var hrotateU = 'rotate(' + hdegreeU + 'deg)';


        var hoursK = new Date().getHours() + changeHoursKazahstan;
        var hdegreeK = hoursK * 30 + (mins / 2);
        var hrotateK = 'rotate(' + hdegreeK + 'deg)';

        var hoursM = new Date().getHours() + changeHoursMoscow;
        var hdegreeM = hoursM * 30 + (mins / 2);
        var hrotateM = 'rotate(' + hdegreeM + 'deg)';



        $('#hourUkraine').css({'-moz-transform' : hrotateU, '-webkit-transform' : hrotateU, '-o-transform' : hrotateU});
        $('#hourKazahstan').css({'-moz-transform' : hrotateK, '-webkit-transform' : hrotateK, '-o-transform' : hrotateK});
        $('#hourMoscow').css({'-moz-transform' : hrotateM, '-webkit-transform' : hrotateM, '-o-transform' : hrotateM});

    }, 1000 );

    setInterval( function() {
        var mins = new Date().getMinutes();
        var mdegree = mins * 6;
        var mrotate = 'rotate(' + mdegree + 'deg)';

        $('.minute').css({'-moz-transform' : mrotate, '-webkit-transform' : mrotate, '-o-transform' : mrotate});

    }, 1000 );













});