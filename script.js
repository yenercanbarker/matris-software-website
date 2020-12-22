$(function () {
    var header = $(".navbar");
    // var nav = $(".navbar #1");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        // nav.removeClass("active");
        if (scroll >= 50) {
            header.addClass("scrolled");
            document.getElementById("logo").display = "inline";
        } else {
            header.removeClass("scrolled");
        }
    });
});

$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.wrapper section').each(function (i) {
            if ($(this).position().top <= windscroll + 150) {
                $('nav li.active').removeClass('active');
                $('nav li').eq(i).addClass('active');
            }
        });

    } else {

        $('nav li.active').removeClass('active');
        $('nav li:first').addClass('active');
    }

}).scroll();