
$(function () {
  let currentIndex = 0;

  setInterval(() => {
    let nextIndex = (currentIndex + 1) % 3

    $(".slider").eq(currentIndex).fadeOut(1200);
    $(".slider").eq(nextIndex).fadeIn(1200).css("display", "flex");

    currentIndex = nextIndex;
  }, 3000);


  // 메뉴
  $(".menu > ul > li").on("mouseover", function () {
    $(".menu > ul > li > ul").stop().fadeIn();
    $(".menu-bg").addClass("on");
  });
  $(".menu > ul > li").on("mouseout", function () {
    $(".menu > ul > li > ul").stop().fadeOut();
    $(".menu-bg").removeClass("on");
  });



  // 탭
  $(".tab ul li").on("click", function () {
    $(this).addClass("on").siblings().removeClass("on");
    $(".board-content div").eq($(this).index()).show().siblings().hide();
  });


  // 팝업
  $(".popup-open").on("click", function () {
    $("#popup").css("display", "flex");
  });
  $(".popup-close").on("click", function () {
    $("#popup").css("display", "none");
  });
});