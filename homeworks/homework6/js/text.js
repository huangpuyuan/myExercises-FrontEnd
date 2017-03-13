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

function setScreenAnimation(screenCls) {
    var screen = getElem(screenCls),
        animateElements = screenAnimateElements[screenCls],
        isSetAnimateClass = false,
        isAnimateDone = false;

    screen.onclick = function() {
        //初始化样式，增加init A A_init
        if (isSetAnimateClass === false) {
            for (let e of animateElements) {
                addCls(getElem(e), e.substr(1) + '_animate_init');
            }
            isSetAnimateClass = true;
            return;
        };
        if (isAnimateDone === false) {
            for (let e of animateElements) {
                let element = getElem(e);
                setCls(element, getCls(element).replace('_animate_init', '_animate_done'));
            }
            isAnimateDone = true;
            return;
        };
        if (isAnimateDone === true) {
            for (let e of animateElements) {
                let element = getElem(e);
                setCls(element, getCls(element).replace('_animate_done', '_animate_init'));
            }
            isAnimateDone = false;
            return;
        };
    }
}

function listenScreenAnimation {
    for (k in screenAnimateElements) {
        setScreenAnimation(k);
    }
}

listenScreenAnimation();