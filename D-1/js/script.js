
$(function () {
  let currentIndex = 0;
  $(".image-wrap").append($(".slider").first().clone(true));

  setInterval(() => {
    currentIndex++;
    $(".image-wrap").animate({ marginLeft: -100 * currentIndex + "%" }, 600);

    if (currentIndex == 3) {
      setTimeout(() => {
        $(".image-wrap").animate({ marginLeft: 0 }, 0);
        currentIndex = 0;
      }, 700);
    }
  }, 3000);


  // 메뉴
  $(".menu > ul > li").on("mouseover", function () {
    $(this).find(".submenu").stop().slideDown();
  });
  $(".menu > ul > li").on("mouseout", function () {
    $(this).find(".submenu").stop().slideUp();
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