$(document).ready(function () {
    $("#owl-demo").owlCarousel({
 
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        autoPlay : 3000,
        paginationSpeed : 500,
        singleItem:true
         
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
         
        });



    
    $("#owl-service").owlCarousel({
 
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        autoPlay : 4000,
        paginationSpeed : 500,
        singleItem:true
         
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
         
        });
    var owl = $("#owl-service");
     
      owl.owlCarousel();
     
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })


    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $(".float-header-fixed").removeClass('is-scrolling');
            // $(".logo-wrapper").removeClass('logo-float');

        } else {
            $(".float-header-fixed").addClass('is-scrolling');
            // $(".logo-wrapper").addClass('logo-float');
        }
      });

     
    });

    $("a#single_image").fancybox();
    
    /* Using custom settings */
    
    $("a#inline").fancybox({
        'hideOnContentClick': true
    });

    /* Apply fancybox to multiple items */
    
    $("a.group").fancybox({
        'transitionIn'  :   'elastic',
        'transitionOut' :   'elastic',
        'speedIn'       :   600, 
        'speedOut'      :   200, 
        'overlayShow'   :   false
    });

    // $(document).ready(function() {
    //         $('#fullpage').fullpage({
    //             anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    //             menu: '#menu',
    //             css3: true,
    //             scrollingSpeed: 500,
    //             easing: 'easeOutBounce',
    //             easingcss3: 'linear'
    //         });

    //         $('#showExamples').click(function(e){
    //             e.stopPropagation();
    //             e.preventDefault();
    //             $('#examplesList').toggle();
    //         });

    //         $('html').click(function(){
    //             $('#examplesList').hide();
    //         });
    //     });

    $(".rotate").textrotator({
      animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
      speed: 4000 // How many milliseconds until the next word show.
    });
});

// scroll function
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.menu-wrapper li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.menu-wrapper li').each(function () {
        $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-79
        }, 800, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop()+79;
    $('.menu-wrapper li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu-wrapper li a').removeClass("active");
            currLink.addClass("active");
        } else if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('.menu-wrapper li:last a').addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

