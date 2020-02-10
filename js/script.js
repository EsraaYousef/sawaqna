$(document).ready(function () {
    'use strict';

    
    new WOW().init();

    // mobile menu
    $('.menu-wrapper').on('click', function () {
        $('.menu-wrapper').toggleClass('open');
        $('.hamburger-menu').toggleClass('animate');
        $('.navbar-nav').toggleClass('open');
        $('html').toggleClass('noscroll');
        $('.navbar-brand img.only-mobile').toggleClass('hidden');
    });

    $('.icon.fav').on('click', function () {
        $(this).toggleClass('liked');
    });
    $('.ch-grid').on('click', function () {
        $('.grid-cols').toggleClass('flex-column');
    });

    $('.add-reply').on('click', function () {
        $(this).parent().next().toggleClass('visible');
    });


    // item slider
    $('.item-for').slick({
        rtl: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.item-nav'
    });
    $('.item-nav').slick({
        rtl: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.item-for',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                dots: false,
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                dots: false,
            }
        }
        ]
    });

});

// upload single image
$(".btn-inputfile").change(function () {
    var previewImageID = $(this).parent().find("img").attr("id");
    previewFile(this,previewImageID);
});

function previewFile(input,image) {
  var preview = document.getElementById(image);
  var file    = input.files[0];
  var reader  = new FileReader();
  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);
//   $('.upload-text').fadeOut();
  if (file) {
    reader.readAsDataURL(file);
  }
}

//form validtion
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
  })();


// loading window
$(window).on("load", function() {
    $("body").css("overflow", "hidden");
    $(".loading-window")
      .delay(1000)
      .fadeOut("slow", function() {
        $(".loading-window").fadeOut();
        $("body").css("overflow-y", "auto");
      });
  });
