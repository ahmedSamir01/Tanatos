/*global $, alert, console*/

$(function () {
    
    "use strict";
    
    var myHeader = $(".header"),
        left = $(".fa-chevron-left"),
        right = $(".fa-chevron-right"),
        dis = $(this).siblings(".items").children(".dis");
    
    
    // trigger niceScroll
    
    $("html").niceScroll({
        
        cursorborder: 0,
        cursorborderradius: '25px',
        cursorwidth: '7px',
        cursorcolor: '#f7600e'
        
    });
    
    
    // change header height
    
    myHeader.height($(window).height());
    
    
    // put intro in the middle of the page
    
    
    $(".intro").each(function () {
        
        $(this).css("marginTop", (myHeader.height() - $(this).height() - 60) / 2 - 28);
        
    });
    
    
    // resize 
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        $(".intro").each(function () {
            
            $(this).css("marginTop", (myHeader.height() - $(this).height() - 60) / 2 - 28);
        
        
        });
    });
    
    
    // scroll to hire us 
    
    $(".hire").on('click', function () {
        
        $("html, body").animate({
            
            scrollTop: $('.contact').offset().top + 60
            
        }, 2000);
        
    });
    
    
    // scroll to hire us 
    
    
    $(".works").on('click', function () {
        
        $("html, body").animate({
            
            scrollTop: $('.our-works').offset().top + 40
            
        }, 1200);
        
    });
    
    
    // scroll to features
    
    $(".header .arrow i").on("click", function () {
        
        $('html, body').animate({
            
            scrollTop: $(".feat").offset().top
            
        }, 1000);
        
    });
    
    
    // show more
    
    /*$(".show-more").on("click", function () {
    
        $(".our-works .items .e").toggleClass("dis", 1000, "easeInOut");
        
    });*/
    
    $(".container .show-more").on("click", function () {
    
        
        $(this).siblings(".items").children(".dis").slideToggle(1000, function () {
            
            if ($(".dis").is(":hidden")) {
           
                $('.container .show-more').text("show more");
            
            } else {
            
                $('.container .show-more').text("show less");
            
            }
            
        });
        
        
    });
    
    /*$(".show-more").on("click", function () {
        
        if ($(".dis").css("display", "none")) {
            
            $(".dis").fadeIn(1000);
            $(".show-more").text("show less");
            
        } else {
            
            $(".dis").fadeOut(1000);
            $(".show-more").text("show more");
            
        }
    });*/
    
    
    
    //check testimnials
    
    
    function checkClints() {
        
        /*
        if ($(".q:first").hasClass('active')) {
            
            left.fadeOut(500);
            
        } else {
            
            left.fadeIn(500);
            
        }*/
        
        $(".q:first").hasClass('active') ? left.hide() : left.fadeIn(500);
        $(".q:last").hasClass('active') ? right.hide() : right.fadeIn(500);
        
    }
    
    checkClints();
    
    $(".testi i").on('click', function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testi .active').fadeOut(1000, function () {
                
                $(this).removeClass('active').next('.q').addClass('active').fadeIn();
                
                checkClints();

                
            });
            
        } else {
            
            $('.testi .active').fadeOut(1000, function () {
                
                $(this).removeClass('active').prev('.q').addClass('active').fadeIn();
                
                checkClints();

                
            });
            
        }
        
    });
    
});

















