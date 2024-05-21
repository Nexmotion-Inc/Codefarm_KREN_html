//상단메뉴
$(document).ready(function () {
  $('.topMenuLi').mouseenter(function () {
    var idx = $(this).index();
    $('.topMenuLi').find('.submenu').removeClass('on');
    $('.topMenuLi').eq(idx).find('.submenu').addClass('on');
  });
  $('.submenu').mouseleave(function () {
    $(this).removeClass('on');
  });
});

//3차 메뉴 스크롤 스크립트
$(document).ready(function () {
  var currentPosition = parseInt($("#quickMenu").css("top"));
  $(window).scroll(function () {
    var position = $(window).scrollTop();
    $("#quickMenu").stop().animate({
      "top": position + currentPosition + "px"
    }, 800);
  });
});

//햄버거버튼
$(document).on("click", ".mobMenuBtn", function () {
  $(".hBottom").toggleClass("rightNav");
  $(".mainNav").toggleClass("closedNavM");
  $(this).toggleClass("closedNavMBtn");
  $(this).toggleClass("rightNav");
});

//푸터 버튼
$(document).on("click", ".link", function () {
  $(".listWrap").toggleClass("on");
});
$(document).on("click", ".btnClose", function () {
  $(".listWrap").removeClass("on");
});


//마켓 배너 슬라이드
$(document).ready(function () {
  const swiper = document.querySelector('.carouselWrapper');
  const prevButtons = document.querySelectorAll('.carouselPrev');
  const nextButtons = document.querySelectorAll('.carouselNext');
  const bullets = document.querySelectorAll('.carouselCircle');

  let currentSlide = 0;

  function showSlide(slideIndex) {
    swiper.style.transform = `translateX(-${slideIndex * 1120}px)`;
    currentSlide = slideIndex;

    bullets.forEach((bullet, index) => {
      if (index === currentSlide) {
        bullet.classList.add('active');
      } else {
        bullet.classList.remove('active');
      }
    });
  }

  prevButtons.forEach((prevButton) => {
    prevButton.addEventListener('click', () => {
      if (currentSlide > 0) {
        showSlide(currentSlide - 1);
      }
    });
  });

  nextButtons.forEach((nextButton) => {
    nextButton.addEventListener('click', () => {
      if (currentSlide < 2) {
        showSlide(currentSlide + 1);
      }
    });
  });

  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      showSlide(index);
    });
  });

  showSlide(0);
});

//제품슬라이드
$(document).ready(function () {
  $('.sliderWrap').slick({
    slide: 'div', 
    infinite: true,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    speed: 500, 
    arrows: true, 
    dots: false, 
    autoplay: false, 
    autoplaySpeed: 2000, 
    pauseOnHover: true, 
    vertical: false, 
    prevArrow: "<button type='button' class='slickPrev'>Previous</button>",
    nextArrow: "<button type='button' class='slickNext'>Next</button>",
    draggable: true, 
    responsive: [ 
      {
        breakpoint: 960, 
        settings: {
          slidesToShow: 4
        }
          },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 5
        }
          }
        ]

  });
});

//리뷰 슬라이드
$(document).ready(function () {
  var swiper = new Swiper('.reviewSwiper', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: -180,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
