(function() {
    "use strict";


    var index = 0,
        timer = null,
        pics = byId("banner").getElementsByTagName("div"),
        dots = byId("dots").getElementsByTagName("span"),
        prev = byId("prev"),
        next = byId("next"),
        len = pics.length,
        menu = byId("menu-content"),
        menuItems = menu.getElementsByClassName("menu-item"),
        subMenu = byId("sub-menu"),
        subMenuItems = subMenu.getElementsByClassName("inner-box");


    //封装Byid
    init();

    function init() {
        slideImg();
        navBarActive();
    }

    function byId(id) {
        return typeof(id) === "string" ? document.getElementById(id) : id;
    }

    function changeImg() {
        //遍历 banner
        for (var i = 0; i < len; i++) {
            pics[i].style.display = "none";
            dots[i].className = "";
        };

        pics[index].style.display = "block";
        dots[index].className = "dots-active";
    };

    function stopAutoplay() {
        if (timer) clearInterval(timer);
    }

    function startAutoplay() {
        timer = setInterval(function() {
            index++;
            if (index >= len) {
                index = 0;
            };
            //切换图片
            changeImg();
        }, 3000);
    }

    function slideImg() {
        var main = byId("main");
        main.onmouseover = function() { stopAutoplay(); };
        main.onmouseout = function() { startAutoplay(); };
        main.onmouseout();
        // main.addEventListener("mouseover", stopAutoplay);
        // main.addEventListener("mouseout", startAutoplay);
        // startAutoplay
        //自动在main上触发调用一次
        //点击小圆点切换
        for (var d = 0; d < len; d++) {
            dots[d].setAttribute('data-id', d);

            dots[d].onclick = function() {
                //index = d;则致命错误。点哪个都是3！！！回调函数的错误陷阱                
                index = this.getAttribute('data-id');
                changeImg();
            }
        };

        next.onclick = function() {
            index++;
            if (index >= len) {
                index = 0;
            };
            changeImg();
        };

        prev.onclick = function() {
            index--;
            if (index < 0) {
                index = len - 1;
            }
            changeImg();
        };

    }

    function navBarActive() {
        //导航菜单
        var banner = byId("banner");
        var menuContent = byId("menu-content");
        for (var m = 0; m < menuItems.length; m++) {
            menuItems[m].setAttribute('data-index', m);
            menuItems[m].onmouseover = function() {
                var item = this.getAttribute('data-index');
                subMenu.className = "sub-menu";
                for (var j = 0, jlen = subMenuItems.length; j < jlen; j++) {
                    subMenuItems[j].style.display = "none";
                    menuItems[j].style.background = "none";
                };
                subMenuItems[item].style.display = "block";
                menuItems[item].style.background = "rgba(0,0,0,0.1)";
            };
        };


        subMenu.onmouseover = function() {
            this.className = "sub-menu";
        }

        subMenu.onmouseout = function() {
            this.className = "sub-menu hide";              
        }

        banner.onmouseout = function() {
            subMenu.className = "sub-menu hide";              
        }

        menuContent.onmouseoverout = function() {
            subMenu.className = "sub-menu hide";            
        }
    }


})()
