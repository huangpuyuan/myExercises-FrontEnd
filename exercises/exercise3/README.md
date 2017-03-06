# 酷炫页面总结

> css居中法小结  

* 文字垂直居中 

```css
.header_nav-item{ height:38px;line-height:38px; }
```
* 块级元素垂直居中于父元素

```css
.header_wrap{ position:relative;height:80px; }
.header_logo{ position:absolute;top:50%;margin-top:-19;	}
```

* 块元素(容器) 水平居中

```css
.header_wrap{ margin:0 auto; }
```
>第一屏样式总结  

* 快级元素水平居中
	1. `margin:0 auto;`
	2. 负边距水平居中 `width:100px;left:50%;margin-left=-50px;`

* 背景图覆盖模式

```css 
{background-size:cover;} 
```

>CSS动画的样式

```css 
/*过渡*/
{ transition: all 1s; }
/*动画*/
{ animation:rock 2s infinite ease-in-out .5s; }
@keyframes rock{
	0%{ transform: rotate(0deg); }
	10%{ transform: rotate(3deg); }
	20%{ transform: rotate(-3deg); }
	30%{ transform: rotate(2deg); }
	40%{ transform: rotate(-2deg); }
	50%{ transform: rotate(1deg); }
	60%{ transform: rotate(-1deg); }
	70%{ transform: rotate(0deg); }
	100%{ transform: rotate(0deg); }
}

```
* 第一屏动画样式的约定

```css
/* 透明度和位置 分别定义init 和 done: ; */
.screen-1__heading_animate_init{
	opacity: 0;
	transform: translate(0,-100%);
}
.screen-1__heading_animate_done{
	opacity: 1;
	transform: translate(0,0);
}
```
> 动画调试脚本

* 动态脚本测试工具
	* static 静态界面样式
	* init 动画效果初始化样式
	* done 动画效果最终样式

```javascript
//动画测试脚本
var setScreenAnimateElements={
	'.screen-1':[
		'.screen-1__heading',
		'.screen-1__phone',
		'.screen-1__shadow'
	]
} 

function setScreenAnimation(screenCls) {
	var screen = document.querySelector(screenCls);
	var animateElements = setScreenAnimateElements[screenCls];

	screen.onclick =function(){
		//初始化样式，增加init A A_init
		//切换所有 animateElements 的 init -> done 	A A_done
		//切换所有 animateElements 的 done -> init 	A screen-1__heading_animate_init
	}
}

setScreenAnimation('screen-1');
```
>>开发技巧：测试模式小结

* JS小结
	* 两种遍历模	式（遍历对象、遍历数组）
	* 获取元素querySelector
	* 字符串截取substr和替换 replace

```javascript
//遍历对象
for(k in screenAnimateElements){
	setScreenAnimation(k);
}
//遍历数组	
for (var i = 0; i < animateElements.length; i++) {
	document.querySelector(animateElements[i]);
}
```
