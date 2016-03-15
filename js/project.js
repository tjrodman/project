//Tanya Rodman
//js file for final project
//Des 157

$(document).ready(function () {
    $('.bxslider').bxSlider();


    //Animations from "just add water animate.css"
    //hidden visibility of "First Year Seminars
    $('section.bx-wrapper h2').css('visibility', 'hidden');
    $('section.bx-wrapper p').css('visibility', 'hidden');

    //after one second, the title will fade up
    function intro() {
        $('section.bx-wrapper h2').css('visibility', 'visible').addClass('animated fadeInUp');
        $('section.bx-wrapper p').css('visibility', 'visible').addClass('animated fadeInUp');
    }

    $(function () {
        setTimeout(intro, 1000);
    });

    //ABOUT SECTION
    
    //hide the things
    $('section#about ul li').css('visibility', 'hidden');

    //fade into view
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        var topDivHeight = $(".topdiv").height();
        var viewPortSize = $(window).height();

        var triggerAt = 1000;
        var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

        //if object in view, animate it
        if ($(window).scrollTop() >= triggerHeight) {
            //about
            $('section#about ul li:nth-child(1)').css('visibility', 'visible').addClass('animated fadeInLeft').hide().fadeIn();
            $(this).off('scroll');

            $('section#about ul li:nth-child(2)').css('visibility', 'visible').addClass('animated fadeInUp').hide().fadeIn();
            $(this).off('scroll');

            $('section#about ul li:nth-child(3)').css('visibility', 'visible').addClass('animated fadeInRight').hide().fadeIn();
            $(this).off('scroll');


            $('section#benefits div#box h2').css('visibility', 'visible').addClass('animated pulse infinite').hide().fadeIn();
            $(this).off('scroll');
        }
    });

    //FEATURED
    //when hovering over the featured section, animate the h2 titles
    $('section#featured section.bx-wrapper2 ul.bxslider li h2').hover(function () {
        $(this).addClass('animated tada');
    }, function () {
        $(this).removeClass('animated tada ');

    });

    //1,2,3 JINGLE
    //target the list, then only animate the image on hover
    $('section#resources div#box2 ul li').hover(
        function () {
            $(this).children('img').addClass('animated swing ');
        },
        function () {
            $(this).children('img').removeClass('animated swing ');
        });



});