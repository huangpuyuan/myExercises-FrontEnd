;(function () {
    "use strict";
    var wrapElem = document.querySelector(".card");

    var calculatorElem = {
        decrement: wrapElem.querySelectorAll('.decrement'),
        increment: wrapElem.querySelectorAll('.increment'),
        number: wrapElem.querySelectorAll('input[type="number"]'),
        unitPrice: wrapElem.querySelectorAll('.card__unit-price>span'),
        totalPrice: wrapElem.querySelectorAll('.card__total-price>span'),
        checkBoxAll: wrapElem.querySelector('.checkbox-all'),
        checkWords: wrapElem.querySelector('.check__words'),
        checkBox: wrapElem.querySelectorAll('.card__content-checkbox > input[type="checkbox"]'),
        accountPrice: document.querySelector('.account__total-price>span')
    };


    function each(array, fn) {
        for (var i = 0; i < array.length; i++) {
            fn(i, array[i]);
        }
    }


    each(calculatorElem.decrement, function (index, elem) {
        elem.onclick = function () {
            if (calculatorElem.number[index].value > 1) {
                calculatorElem.number[index].value--;
                outputResult(
                    multiply(calculatorElem.unitPrice[index].innerHTML, calculatorElem.number[index].value)
                    , index);
                outputTotalResult();
            }
        };

    });

    each(calculatorElem.increment, function (index, elem) {
        elem.onclick = function () {
            calculatorElem.number[index].value++;
            outputResult(multiply(calculatorElem.unitPrice[index].innerHTML, calculatorElem.number[index].value),
                index);
            outputTotalResult();
        }
    });

    (function listenSelectedAllElem() {
        calculatorElem.checkBoxAll.onclick = selectedAllElem;
        each(calculatorElem.checkBox, function (index, elem) {
            elem.onclick = function () {
                outputTotalResult();
            }
        });

        outputTotalResult();
    })();

    function outputResult(result, idx) {
        calculatorElem.totalPrice[idx].innerHTML = result;
        return result;
    }

    function outputTotalResult() {
        var prices = [];
        each(calculatorElem.totalPrice, function (idx, elem) {
            if (isSelected(calculatorElem.checkBox[idx])) {
                prices.push(elem.innerHTML);
            }
        });
        calculatorElem.accountPrice.innerHTML = add.apply(this, prices);
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

    function add() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += parseInt(arguments[i]);
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
     * 全选和反选
     */
    function selectedAllElem() {
        each(calculatorElem.checkBox, function (index, elem) {
            if (isSelected(calculatorElem.checkBoxAll)) {
                elem.checked = true;
                calculatorElem.checkWords.innerHTML = '反选';
            } else {
                elem.checked = false;
                calculatorElem.checkWords.innerHTML = '全选';
            }
        });
        outputTotalResult();
    }



})();