;
(function() {
    "use strict";
    var wrapElem = document.querySelector(".card");
    /**
     *  dom节点
     * @type {{decrement: NodeList, increment: NodeList, number: NodeList, unitPrice: NodeList, totalPrice: NodeList, checkBoxAll: Element, checkWords: Element, checkBox: NodeList, accountPrice: Element}}
     */
    var calculatorElem = {
        decrement: wrapElem.querySelectorAll('.decrement'),
        increment: wrapElem.querySelectorAll('.increment'),
        number: wrapElem.querySelectorAll('input[type="number"]'),
        unitPrice: wrapElem.querySelectorAll('.card__unit-price > span'),
        totalPrice: wrapElem.querySelectorAll('.card__total-price > span'),
        checkBoxAll: wrapElem.querySelector('.checkbox-all'),
        checkWords: wrapElem.querySelector('.check__words'),
        checkBox: wrapElem.querySelectorAll('.card__content-checkbox > input[type="checkbox"]'),
        accountPrice: document.querySelector('.account__total-price>span')
    };

    /**
     * 封装遍历的方法
     * @param array
     * @param fn
     * @当返回 "break" 时中断循环
     */

    function each(array, fn) {
        for (var i = 0; i < array.length; i++) {
            var r = fn(i, array[i]);
            if (r === "break") {
                break;
            }
            // else(r === "continue"){
            //     continue;
            // }
        }
    }

    /**
    *验证input,只能输入正整数
    */

    function inputMustBePostiveInt() {
        if (this.value.length == 1) {
            this.value = this.value.replace(/[^1-9]/g, '')
        } else {
            this.value = this.value.replace(/\D/g, '')
        }
    }

    /**
     * 数量递增和递减事件失去焦点事件和监听键盘回车事件
     */
    each(calculatorElem.number, function(index, elem) {

        //文本框内容只能为正整数
        elem.onkeyup = function() {
            inputMustBePostiveInt.call(this);
        }

        elem.onblur = function() {
            commonOperations(index);
        }

        elem.onkeydown = function(e) {
            //如果window.event对象存在，就以此事件对象为准 
            if (window.event) { e = window.event };
            var code = e.charCode || e.keyCode;
            if (code == 13) {
                commonOperations(index);
            }
        }

    });


    each(calculatorElem.decrement, function(index, elem) {
        elem.onclick = function() {
            if (calculatorElem.number[index].value > 1) {
                calculatorElem.number[index].value--;
                commonOperations(index);
            }
        };
    });

    each(calculatorElem.increment, function(index, elem) {
        elem.onclick = function() {
            calculatorElem.number[index].value++;
            commonOperations(index);
        }
    });




    /**
     * 绑定选中事件
     */
    each(calculatorElem.checkBox, function(index, elem) {
        elem.onclick = function() {
            outputTotalResult();
            unselectedAllElem();
        }
    });
    /**绑定全选事件,默认全选事件执行
     *
     * @type {selectedAllElem}
     *
     */

    calculatorElem.checkBoxAll.onclick = selectedAllElem;
    calculatorElem.checkBoxAll.checked = 'checked';
    selectedAllElem();

    /**
     *提取公共操作输出计算
     *
     */
    function commonOperations(index) {
        outputResult(multiply(calculatorElem.unitPrice[index].innerHTML, calculatorElem.number[index].value),
            index);
        outputTotalResult();
    }

    /**
     * 单行结果输出
     * @param result
     * @param idx
     */
    function outputResult(result, idx) {
        calculatorElem.totalPrice[idx].innerHTML = result;
    }

    /**
     * 应付余额汇总  用数组进行传参 调用apply方法
     */
    function outputTotalResult() {
        var prices = [];
        each(calculatorElem.totalPrice, function(idx, elem) {
            if (isSelected(calculatorElem.checkBox[idx])) {
                prices.push(elem.innerHTML);
            }
        });
        calculatorElem.accountPrice.innerHTML = summary.apply(this, prices);
    }

    /**
     * 计算方法汇总
     * @param price
     * @param value
     * @returns {number}
     */

    function multiply(price, value) {
        return price * value;
    }

    /**
     * 价格累加
     * @return {number}
     */
    function summary() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += +arguments[i];
        }
        return sum;
    }

    /**
     * 判断元素是否选择
     */
    function isSelected(elem) {
        return elem.checked;
    }

    /**
     * 判断是否为正整数
     */
    // function isPostiveInteger(value) {
    //     if (Number.isInteger(value) && value > 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }


    /**
     * 如果只有一个多选框未选中则全选框未选中
     * 未全选中的方法
     */
    function unselectedAllElem() {
        each(calculatorElem.checkBox, function(index, elem) {
            if (isSelected(elem)) {
                calculatorElem.checkBoxAll.checked = true;
                calculatorElem.checkWords.innerHTML = '清空';
            } else {
                calculatorElem.checkBoxAll.checked = false;
                calculatorElem.checkWords.innerHTML = '全选';
                return "break";
            }
        });
    }

    /**
     * 全选和清空
     */
    function selectedAllElem() {
        each(calculatorElem.checkBox, function(index, elem) {
            if (isSelected(calculatorElem.checkBoxAll)) {
                elem.checked = true;
                calculatorElem.checkWords.innerHTML = '清空';
            } else {
                elem.checked = false;
                calculatorElem.checkWords.innerHTML = '全选';
            }
        });
        outputTotalResult();
    }



})();
