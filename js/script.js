
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

    //input code
    $(".input-code input").keyup(function () {
        if (this.value.length == this.maxLength) {
          $(this)
                .parent()
                .next()
                .find("input")
                .focus();
        }
    });
    

    // item slider
    var dir = $("html").attr("dir");
    if (dir == "rtl") {
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
    } else {
        $('.item-for').slick({
            rtl: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.item-nav'
        });
        $('.item-nav').slick({
            rtl: false,
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
    }

});
// upload img avatar
// upload img
$(document).ready(function() {
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          $("#imagePreview").css(
            "background-image",
            "url(" + e.target.result + ")"
          );
          $("#imagePreview").hide();
          $("#imagePreview").fadeIn(650);
          $('.btn-hidden').css({"display":"block"});
        //   $('.upload-text').css('display', 'none');
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
    $("#imageUpload").change(function() {
      readURL(this);
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