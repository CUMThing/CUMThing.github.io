// You can also use "$(window).load(function() {"
        $(function () {
          // Slideshow 3
          $("#slider3").responsiveSlides({
            auto:false,
            pager: true,
            nav: false,
            speed: 500,
            namespace: "callbacks",
            before: function () {
              $('.events').append("<li>before event fired.</li>");
            },
            after: function () {
              $('.events').append("<li>after event fired.</li>");
            }
          });
    
        });