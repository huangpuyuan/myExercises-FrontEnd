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
function delCls(element,cls){
	var baseCls = getCls(element);
	if(baseCls != -1 ){
		setCls(element,baseCls.split(cls).join('').replace(/\s+/g,' '));
	}
}

