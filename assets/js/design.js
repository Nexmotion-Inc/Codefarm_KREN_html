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
    slide: 'div', //슬라이드 되어야 할 태그
    infinite: true, //무한 반복 옵션     
    slidesToShow: 3, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: false, // 자동 스크롤 사용 여부
    autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    prevArrow: "<button type='button' class='slickPrev'>Previous</button>",
    nextArrow: "<button type='button' class='slickNext'>Next</button>",
    draggable: true, //드래그 가능 여부 
    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 960, //화면 사이즈 960px
        settings: {
          slidesToShow: 4
        }
          },
      {
        breakpoint: 768, //화면 사이즈 768px
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
    spaceBetween: 0,
    autoplay: { //자동슬라이드 (false-비활성화)         
      delay: 10000, // 시간 설정          
      disableOnInteraction: false,
      // false-스와이프 후 자동 재생        
    },
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
