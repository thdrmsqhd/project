//<!--    제이쿼리 함수 클릭시 메뉴 숨김 보이기 -->
$(function() {
    $(".e-nav").hide();
    $(".e-etc>a").click(function() {

        $(".e-nav").each(function() {
            console.log($(this).css("display"));
            if ($(this).css("display") == "block") {
                $(this).stop().hide(250);
            }

        }); // sub each end
        $(this).next().stop().show(550);

    });
}); // jQuery end
