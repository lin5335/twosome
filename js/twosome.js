$(function () {
    const $header = $('header');
    const $nav = $('nav');
    const menuOpenHeight = 380;
    const menuCloseHeight = 80;

    let leaveTimer = null;

    // 메뉴에 들어오면 열기
    $nav.on('mouseenter', function () {
        clearTimeout(leaveTimer);
        $header.stop(true, true).animate({ height: menuOpenHeight + 'px' }, 300);
    });

    // nav 바깥으로 나갈 때 닫기 (딜레이 주기)
    $nav.on('mouseleave', function () {
        leaveTimer = setTimeout(function () {
            $header.stop(true, true).animate({ height: menuCloseHeight + 'px' }, 300);
        }, 200); // 0.2초 안에 다시 들어오면 닫히지 않음
    });
});
