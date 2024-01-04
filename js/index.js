$(document).ready(function () {

  var serviceSlide1 = 0;
  var serviceSlide2 = 1;
  var serviceSlide3 = 2;

  $(".nav-dropdown").on("click", function () {
    $(".page-header .nav-menu").toggleClass("active");
  })

  $(window).scroll(function () {
    var value = $(this).scrollTop();
    if (value > 120) {
      $("#header").css("transform", "translateY(-100%)");
      $("#page-header").css("transform", "translateY(0)");
    } else {
      $("#header").css("transform", "translateY(0)");
      $(".page-header .nav-menu").removeClass("active");
      $("#page-header").css("transform", "translateY(-100%)");
    }
  });

  var serviceSwiper = new Swiper(".block-service .field-slide", {
    pagination: {
      el: ".block-service-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    direction: "vertical",
    spaceBetween: 0,
    mousewheel: true,
    loop: true,
    speed: 800,
  });

  serviceSwiper.on("slideChange", function () {
    $(".block-service .field-slide-detail .slide-detail").removeClass("active");
    var index_currentSlide = serviceSwiper.realIndex;

    if (index_currentSlide == serviceSlide1) {
      $(".block-service .field-slide-detail .slide-detail-1").addClass("active");
    } else if (index_currentSlide == serviceSlide2) {
      $(".block-service .field-slide-detail .slide-detail-2").addClass("active");
    } else {
      $(".block-service .field-slide-detail .slide-detail-3").addClass("active");
    }
  })

  // var fixedSectionObserver = new IntersectionObserver(
  //   (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         $('#block-service').css("position", "sticky")
  //       } else {
  //         $("#block-service").css("position", "");
  //       }
  //     });
  //   },
  //   { rootMargin: "0px 0px -100% 0px" }
  // );
  // fixedSectionObserver.observe($(".block-service")[0]);

  $('.service-list > li > .service-item-detail').hide();

  $('.service-list > li').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".service-item-detail").slideUp();
    } else {
      $(".service-list > li.active .service-item-detail").slideUp();
      $(".service-list > li.active").removeClass("active");
      $(this).addClass("active").find(".service-item-detail").slideDown();
    }
    return false;
  });
});