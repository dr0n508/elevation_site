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
            $('.navigation').removeClass('open-nav');
            $('header').removeClass('open-nav');
        }
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
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


    $('.list-brands li').height( $('.list-brands li').width() );














});