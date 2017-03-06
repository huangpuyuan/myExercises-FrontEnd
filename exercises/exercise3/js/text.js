//alert('done');
var setScreenAnimateElements = {
    '.screen-1': [
        '.screen-1__heading',
        '.screen-1__phone',
        '.screen-1__shadow'
    ]
}

function setScreenAnimation(screenCls) {
    var screen = document.querySelector(screenCls);

    var animateElements = setScreenAnimateElements[screenCls];

    var isSetAnimateClass = false; //是否有初始化子元素的样式
    var isAnimateDone = false; // 当前屏幕所有子元素的状态是done吗？

    screen.onclick = function() {
        //初始化样式，增加init A A_init
        if (isSetAnimateClass === false) {
            for (var i = 0; i < animateElements.length; i++) {
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');

                element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');
            }
            isSetAnimateClass = true;
            return;
        }
        //切换所有 animateElements 的 init -> done 	A A_done
        if (isAnimateDone === false) {
            for (var i = 0; i < animateElements.length; i++) {
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls.replace('_animate_init', '_animate_done'));
            }
            isAnimateDone = true;
            return;
        }
        //切换所有 animateElements 的 done -> init 	A A_init
        if (isAnimateDone === true) {
            for (var i = 0; i < animateElements.length; i++) {
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls.replace('_animate_done', '_animate_init'));
            }
            isAnimateDone = false;
            return;
        }
    }
}


setScreenAnimation('.screen-1');
