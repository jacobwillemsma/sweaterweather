jQuery(function () {
    $(window).resize(function () {
        if ($(window).height() > 600) {
            var sH = $(window).height();
        } else {
            var sH = 600;
        }
        $('.header-10-sub').css('height', sH + 'px');
    });
});

Weather.getCurrent("Kansas City", function(current) {
  console.log(
    ["currently:",current.temperature(),"and",current.conditions()].join(" ")
  );
});