//상단 메뉴 스크롤시 헤더 바탕색 변환
$(window).scroll(function(){
  var windowST = $(this).scrollTop();
  if(windowST === 0) {
      $(".header").removeClass("on");      
  } else {
      $(".header").addClass("on");      
  }
});

$(function(){
  //탭메뉴(웹표준을 준수하면서 만든 탭메뉴)

  var $tab_list = $(".tab-list");         

  $tab_list.find(".list-wrap").hide();
  $tab_list.find("li.active > .list-wrap").show();   

  function tabMenu(e){
      e.preventDefault();
      var $this = $(this);

      $this.next(".list-wrap").css({'display':'flex'}).parent("li").addClass("active").siblings("li").removeClass("active").find(">.list-wrap").hide();
  }
  
  $tab_list.find("ul > li > a").click(tabMenu).focus(tabMenu);

});


window.addEventListener('DOMContentLoaded', (event) => {
  //스크롤 애니메이션 스크립트 시작
  AOS.init();
});
