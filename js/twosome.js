$(function() {
    var $firstMenu = $('nav > ul > li'),
        $header = $('header'),
        menuOpenHeight = 380, // 펼쳐진 높이
        menuCloseHeight = 80; // 기본 높이

    // 마우스를 메뉴에 올리면 메뉴 열기
    $firstMenu.mouseenter(function() {
        $header.stop(true, true).animate({ height: menuOpenHeight + 'px' }, 300);
    });

    // 메뉴 영역을 벗어나면 즉시 닫힘
    $('nav').mouseleave(function() {
        $header.stop(true, true).animate({ height: menuCloseHeight + 'px' }, 300);
    });
});
