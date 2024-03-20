$(function(){
    //AOS.init();
    var hd, gnbWhBg, pcGnb, moGnb, moBtn, moD1, moD2, speed;
    hd = $("#hl-header");
    gnbWhBg = $(".hd-wh-bg");
    pcGnb = $("#hl-gnb");
    moGnb = $("#hl-mo-gnb");
    moBtn = $(".mo-gnb-btn");
    moD1 = $("#hl-mo-gnb .depth1 > a");
    moD2 = ".depth2";
    const depth1 = $("#hl-gnb .depth1");
    const depth2 = $("#hl-gnb .depth2");
    speed = 300;
    // PC Gnb
    pcGnb.on('mouseenter focusin', function(){
        hd.addClass("active");
        gnbWhBg.stop().slideDown(speed);
        depth2.stop().slideDown(speed);
    });
    pcGnb.mouseleave(function(){
        hd.removeClass("active");
        gnbWhBg.stop().slideUp(speed);
        depth2.stop().slideUp(speed);
    });
    gnbWhBg.mouseenter(function(){
        $(this).stop().slideDown(speed);
        depth2.stop().slideDown(speed);
    });
    gnbWhBg.mouseleave(function(){
        $(this).stop().slideUp(speed);
        depth2.stop().slideUp(speed);
    });
    depth1.on("mouseenter focusin", function(){
        $(this).addClass("active");
    });
    depth1.on("mouseleave focusout", function(){
        $(this).removeClass("active");
    });

    //MO Gnb
    moBtn.click(function(){
        $(this).next().toggleClass("active");
        $("#hl-mo-gnb .depth1").removeClass("active");
        $("#hl-mo-gnb .depth2").stop().slideUp(speed);
        $(this).toggleClass("close");
    });
    moD1.click(function(){
        $(this).parent().toggleClass("active");
        $(this).next(speed).stop().slideToggle(speed);
        $(this).parent().siblings().removeClass("active");
        $(this).parent().siblings().find(moD2).stop().slideUp(speed);
    });

    //다크 라이트 모드 제어
    const body = $("body");
    const btnDark = $(".btn-dark");
    const logo = $(".hl-logo img");
    var darkChk = 0;
    btnDark.click(function(){
        body.toggleClass("dark");
        darkChk++
        darkChk %= 2;//나머지는 0과1로 반복
        if(darkChk){//Dark Mode 일때
            logo.attr("src", "images/logo_h_drkmode.png");
            var darkTxt = $(".btn-dark").text("Light Mode");

        } else {//Light Mode
            logo.attr("src", "images/logo_h.png");
            var darkTxt = btnDark.text("Dark Mode");
        }
    });

    //헤더 높이만큼 스크롤했을 때 고정
    let vW = window.innerWidth; //뷰포트 너비
    let scTop = $(window).scrollTop(); //문서가 스크롤 된 양
    let hdHeight = hd.offset().top + hd.outerHeight();
    //화면사이즈가 조절 될 때마다
    $(window).resize(function(){
        hdHeight = hd.offset().top + hd.outerHeight();
        //해상도 검사
        vW = window.innerWidth;
        if(vW < 768) {
            body.removeClass("tb pc").addClass("mo");
        } else if(vW >= 768 && vW < 1280) {
            body.removeClass("mo pc").addClass("tb");
        } else {
            body.removeClass("mo tb").addClass("pc");
        }
    });
    //헤더 높이만큼 문서가 스크롤 됐을 때 헤더 고정(.fixed)
    $(window).scroll(function(){
        scTop = $(window).scrollTop();
        if(scTop > hdHeight){
            hd.addClass("fixed");
        } else {
            hd.removeClass("fixed");
        }
    });
    
    
});