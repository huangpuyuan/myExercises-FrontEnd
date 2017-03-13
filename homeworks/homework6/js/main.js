//()
//封装常用的方法
//获取一个元素
function getElem(selector) {
    return document.querySelector(selector);
}
//获取所有元素
function getAllElem(selector) {
    return document.querySelectorAll(selector);
}
//获取元素的class属性
function getCls(element) {
    return element.getAttribute('class');
}
//设置元素的class属性
function setCls(element, cls) {
    return element.setAttribute('class', cls);
}
//增加一个class属性
function addCls(element, cls) {
    var baseCls = getCls(element);
    if (baseCls.indexOf(cls) === -1) {
        setCls(element, baseCls + ' ' + cls);
    }
}
//删除一个class属性
function delCls(element, cls) {
    var baseCls = getCls(element);
    if (baseCls != -1) {
        setCls(element, baseCls.split(cls).join('').replace(/\s+/g, ' '));
    }
}

//全局对象
const screenAnimateElements = {
    '.screen-1': [
        '.header',
        '.screen-1__heading',
        '.screen-1__subheading'
    ],
    '.screen-2': [
        '.screen-2__heading',
        '.screen-2__subheading',
        '.screen-2__tip',
        '.screen-2__rocket',
        '.screen-2__man'
    ],
    '.screen-3': [
        '.screen-3__orbit',
        '.screen-3__heading',
        '.screen-3__subheading',
        '.screen-3__tip',
        '.screen-3__language'
    ],
    '.screen-4': [
        '.screen-4__heading',
        '.screen-4__subheading',
        '.screen-4__tip',
        '.screen-4__flow-item_f_1',
        '.screen-4__flow-item_f_2',
        '.screen-4__flow-item_f_3',
        '.screen-4__flow-item_f_4'
    ],
    '.screen-5': [
        '.screen-5__heading',
        '.screen-5__tip',
        '.screen-5__subheading',
        '.screen-5__bghead'
    ]
};

//全局变量
var navItems = getAllElem('.header__nav-item'), //导航条
    outlineItems = getAllElem('.outline__item'), //侧边大纲
    navTip = getElem('.header__nav-tip'); //滑动条

//动画类初始化 A -> A_animate_init
function setScreenAnimateInit(screenCls) {
    var screenElm = getElem(screenCls),
        animateElements = screenAnimateElements[screenCls];
    for (let e of animateElements) {
        addCls(getElem(e), e.substr(1) + '_animate_init');
    }
}

//动画播放事件 A_animate_init -> A_animate_done
function playScreenAnimateDone(screenCls) {
    var screenElm = getElem(screenCls),
        animateElements = screenAnimateElements[screenCls];
    for (let e of animateElements) {
        let element = getElem(e);
        setCls(element, getCls(element).replace('_animate_init', '_animate_done'));
    }
}


//导航条激活插件
function switchNavItemsActive(idx) {
    for (let element of navItems) {
        delCls(element, 'header__nav-item_status_active');
    }
    addCls(navItems[idx], 'header__nav-item_status_active');

    for (let element of outlineItems) {
        delCls(element, 'outline__item_status_active');
    }
    addCls(outlineItems[idx], 'outline__item_status_active');
}

//监听导航条和大纲联动跳转事件
function listenNavJump() {
    for (var i = 0; i < navItems.length - 1; i++) {
        setNavJump(i, navItems);
    }
    for (var i = 0; i < outlineItems.length; i++) {
        setNavJump(i, outlineItems);
    }
}
//跳转事件
function setNavJump(i, lib) {
    var item = lib[i];
    item.onclick = function() {
        document.body.scrollTop = i * 650;
    }
}


//滑动门特效监听
function listenTipLeft() {
    for (var i = 0; i < navItems.length - 1; i++) {
        setTip(i, navItems);
    }
}

//设置滑动门
function setTip(idx, lib) {
    var activeIdx = 0;
    lib[idx].onmouseover = function() {
        navTipLeft(idx);
    }
    lib[idx].onmouseout = function() {
        for (var i = 0; i < lib.length; i++) {
            if (getCls(lib[i]).indexOf('header__nav-item_status_active') != -1) {
                activeIdx = i;
                break;
            }
        }
        navTipLeft(activeIdx);
    }


}

//导航条右滑动函数
function navTipLeft(idx) {
    navTip.style.left = idx * 100 + 20 + 'px';
}

function playFirstScreenAnimate() {
    setTimeout(
        function() {
            playScreenAnimateDone('.screen-1');
        }, 500);
}

//页面载入事件
window.onload = function() {
    listenNavJump();
    listenTipLeft();
    playFirstScreenAnimate();
    for (k in screenAnimateElements) {
        if (k === '.screen1') {
            continue;
        }
        setScreenAnimateInit(k);
    }
}

//滚动条事件
window.onscroll = function() {
    var top = document.body.scrollTop, //滚动条高度
        headerElem = getElem('.header'),
        outlineElem = getElem('.outline');

    //导航条和大纲样式改变        
    if (top >= 100) {
        addCls(headerElem, 'header_status_back');
        addCls(outlineElem, 'outline_status_in');
    } else {
        delCls(headerElem, 'header_status_back');
        delCls(outlineElem, 'outline_status_in');
    }

    //动画播放，导航条激活，滚动条的滑动门特效
    if (top >= 0 && top < 640 - 100) {
        playScreenAnimateDone('.screen-1');
        switchNavItemsActive(0);
        navTipLeft(0);
    } else if (top >= 640 - 100 && top < 640 * 2 - 100) {
        playScreenAnimateDone('.screen-2');
        switchNavItemsActive(1);
        navTipLeft(1);
    } else if (top >= 640 * 2 - 100 && top < 640 * 3 - 100) {
        playScreenAnimateDone('.screen-3');
        switchNavItemsActive(2);
        navTipLeft(2);
    } else if (top >= 640 * 3 - 100 && top < 640 * 4 - 100) {
        playScreenAnimateDone('.screen-4');
        switchNavItemsActive(3);
        navTipLeft(3);
    } else if (top >= 640 * 4 - 100) {
        playScreenAnimateDone('.screen-5');
        switchNavItemsActive(4);
        navTipLeft(4);
    }

}
