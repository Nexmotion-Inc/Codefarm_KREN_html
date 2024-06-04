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
  var WinW = $(window).width();
  if (WinW > 1280) {
    var currentPosition = parseInt($("#quickMenu").css("top"));
    $(window).scroll(function () {
      var position = $(window).scrollTop();
      $("#quickMenu").stop().animate({
        "top": position + currentPosition + "px"
      }, 800);
    });
  }
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


//모바일 메인네비 
$(document).ready(function () {
  var mainNavClick = $('.mainNav > ul > li');
  mainNavClick.click(function () {
    $(this).find('ul').toggleClass("show");
    mainNavClick.not($(this)).find('ul').removeClass('show');
  });
});

//마켓 배너 슬라이드
//충돌로 인해 html 파일 내부 작성으로 변경
//$(document).ready(function () {
//  const swiper = document.querySelector('.carouselWrapper');
//  const prevButtons = document.querySelectorAll('.carouselPrev');
//  const nextButtons = document.querySelectorAll('.carouselNext');
//  const bullets = document.querySelectorAll('.carouselCircle');
//
//  let currentSlide = 0;
//
//  const imgWidth = $(".carouselWrapper").width();
//
//  function showSlide(slideIndex) {
//    swiper.style.transform = `translateX(-${slideIndex * imgWidth}px)`;
//    currentSlide = slideIndex;
//
//    bullets.forEach((bullet, index) => {
//      if (index === currentSlide) {
//        bullet.classList.add('active');
//      } else {
//        bullet.classList.remove('active');
//      }
//    });
//  }
//
//  prevButtons.forEach((prevButton) => {
//    prevButton.addEventListener('click', () => {
//      if (currentSlide > 0) {
//        showSlide(currentSlide - 1);
//      }
//    });
//  });
//
//  nextButtons.forEach((nextButton) => {
//    nextButton.addEventListener('click', () => {
//      if (currentSlide < 2) {
//        showSlide(currentSlide + 1);
//      }
//    });
//  });
//
//  bullets.forEach((bullet, index) => {
//    bullet.addEventListener('click', () => {
//      showSlide(index);
//    });
//  });
//  showSlide(0);
//});

//모바일 3차 메뉴 클릭했을때
$(document).ready(function () {
  var WinW = $(window).width();

  if (WinW < 800) {
    $('#quickMenu li').click(function () {
      $('#quickMenu li').removeClass('on');
      $(this).addClass('on');
    });
  }
});



//소개 접기 폈기
$(document).ready(function () {
var arrowBtn = $('.systemBox li .arrowBtn');
  arrowBtn.click(function () {
    $(this).parents('li').toggleClass("on");
    arrowBtn.not($(this)).parents('li').removeClass("on");
  });
});


//마켓 배너 슬라이드
$(document).ready(function () {
  var mySwiper = new Swiper(".bannerSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: false,
    autoplay: { //자동슬라이드 (false-비활성화)          
      delay: 4000, // 시간 설정          
      disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    navigation: false,
    pagination: {
      el: ".bannerPagination",
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    }
  })
  var sw = 0;
  $('#bannerBtn').click(function () {
    if (sw == 0) {
      $('#bannerBtn').addClass('on');
      mySwiper.autoplay.stop();
      sw = 1;
    } else {
      $('#bannerBtn').removeClass('on');
      mySwiper.autoplay.start();
      sw = 0;
    }
  });
});


//마켓 리뷰
$(document).ready(function () {
  var reviewSw = new Swiper('.reviewSwiper', {
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
    }
  });
});


//제품슬라이드
$(document).ready(function () {
  $('.sliderWrap').slick({
    slide: 'div',
    infinite: false,
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
          slidesToShow: 3
        },
        slidesToScroll: 3
        },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2
        },
        slidesToScroll: 2
        },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2.5
        },
        slidesToScroll: 2.5
        },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        },
        slidesToScroll: 2
        },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1.2
        },
        slidesToScroll: 1
        }
      ]

  });
})
