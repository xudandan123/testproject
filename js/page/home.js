!function () {
    $(function () {
        $(".searchNameInput").focus(function () {
            $(this).css("borderColor","#c40000");
        }).blur(function () {
            $(this).css("borderColor","#c2cad8");
        });
        $(".tabPage li a").click(function () {
            $(".tabPage li a").css({
                "backgroundColor": "#fff",
                "color": "#34495e"
            });
            $(this).css({
                "backgroundColor": "#c40000",
                "color": "#fff"
            })
        });









    });
}();