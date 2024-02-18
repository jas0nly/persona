
jQuery(function ($) {
    $(document).ready(function () {
  
      $('.team-col').owlCarousel({
        loop:true,
        autoplay: true,
        margin:30,
        nav:true,
        dots:false,
        items:4,
        responsive: {
          0: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1025: {
            items: 4,
          }
        },
      })
  
  
      var sneak_owl = $(".sneak-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        stagePadding: 150,
        responsive: {
          0: {
            items: 1,
            stagePadding: 100,
            margin: 10,
          },
          768: {
            items: 1,
            margin: 30,
          },
          1025: {
            items: 3,
          },
          1500: {
            items: 5,
          },
        },
      });
  
      // Go to the previous item
      $(".sneak-arrows .customPrevBtn").click(function (e) {
        e.preventDefault();
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        sneak_owl.trigger("prev.owl.carousel", [300]);
      });
      // Go to the next item
      $(".sneak-arrows .customNextBtn").click(function (e) {
        e.preventDefault();
        sneak_owl.trigger("next.owl.carousel");
      });
  
      sneak_owl.on("changed.owl.carousel", function (e) {
        $(".sneak-carousel .owl-item").removeClass("item-prev-prev-prev");
        $(".sneak-carousel .owl-item").removeClass("item-prev-prev");
        $(".sneak-carousel .owl-item").removeClass("item-prev");
        $(".sneak-carousel .owl-item").removeClass("item-center");
        $(".sneak-carousel .owl-item").removeClass("item-next");
        $(".sneak-carousel .owl-item").removeClass("item-next-next");
        $(".sneak-carousel .owl-item").removeClass("item-next-next-next");
  
        idx = e.item.index;
        var visibleItems = $(".sneak-carousel .owl-item.active").length;
        var halfVisible = visibleItems / 2;
        halfVisible = Math.round(halfVisible);
        idx = idx + halfVisible - 1;
        $(".sneak-carousel .owl-item")
          .eq(idx - 3)
          .addClass("item-prev-prev-prev");
        $(".sneak-carousel .owl-item")
          .eq(idx - 2)
          .addClass("item-prev-prev");
        $(".sneak-carousel .owl-item")
          .eq(idx - 1)
          .addClass("item-prev");
        $(".sneak-carousel .owl-item").eq(idx).addClass("item-center");
        $(".sneak-carousel .owl-item")
          .eq(idx + 1)
          .addClass("item-next");
        $(".sneak-carousel .owl-item")
          .eq(idx + 2)
          .addClass("item-next-next");
        $(".sneak-carousel .owl-item")
          .eq(idx + 3)
          .addClass("item-next-next-next");
      });
      sneak_owl.trigger("next.owl.carousel");
  
      var logos_owl = $(".logos-carousel").owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        responsive: {
          0: {
            items: 1,
            stagePadding: 100,
          },
          768: {
            items: 4,
          },
          1025: {
            items: 5,
          },
          1500: {
            items: 5,
          },
        },
      });
      $(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 400 // fade out at 400px from top
        });
        $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
    });
    
    // video controls
    $('#state').on('click', function () {
        var video = $('#hero-vid').get(0);
        var icons = $('#state > span');
        $('#overlay').toggleClass('fade');
        if (video.paused) {
            video.play();
            icons.removeClass('fa-play').addClass('fa-pause');
        } else {
            video.pause();
            icons.removeClass('fa-pause').addClass('fa-play');
        }
    });
    });
  });