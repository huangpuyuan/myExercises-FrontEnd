
var index = 0,
    timer = null,
    banner = byId("banner"),
    pics = banner.getElementsByTagName("div"),
    dots = byId("dots").getElementsByTagName("a"),
    len = pics.length
    ;

//封装byId
function byId(id) {
    return typeof(id) === "string" ? document.getElementById(id) : id;
}
//开始定时器
function startAutoplay() {
    timer = setInterval(function() {
        index++;
        if (index >= len) index = 0;
        changeImg();
    }, 1000);
}
//停止自动播放事件
function stopAutoplay() {
    if (timer) {
        clearInterval(timer);
    }
}
//图片改变
function changeImg() {
    for (var i = 0; i < len; i++) {
        pics[i].style.display = "none";
        dots[i].className = "";
    }
    pics[index].style.display = "block";
    dots[index].className = "current";
}

//图片轮播主函数
function slideImg() {

	var main=byId("main");

    main.onmouseout = function() { startAutoplay(); };
    main.onmouseover = function() { stopAutoplay(); };
    main.onmouseout();

    for (var i = 0; i < len; i++) {
        dots[i].setAttribute("data-id", i);
        dots[i].onclick = function() {
            index = this.getAttribute("data-id");
            changeImg();
        }
    }
}


slideImg();
