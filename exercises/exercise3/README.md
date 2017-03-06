# 酷炫页面总结
### CSS样式

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
### 动画调试脚本

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
	],
	'......'
}; 

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
>开发技巧：测试模式小结

* JS小结
	* 两种遍历模式（遍历对象、遍历数组）
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

>扩展：循环动画 --帧动画和循环动画

>CSS动画小结：构建复杂动画 --工具

* 动画时间轴 以第二屏为例，自行编写动画延迟。
	* 大标题：slideDown 0s~1s 
	* 副标题：slideUp .5s~2s
	* 手机(图片)：slideUp 1.5s~2.5s
	* 高清：slideRight	2.5s~3.5s
	* 超薄：slideLeft 	3s~4s
	* 大屏：slideRight	3.5s~4.5s

```css
.screen-2__heading_animate_done{

}

```
>CSS动画小结：CSS伪类的使用以及触发动画效果

```css
.screen-3__features-item{
	transition: all .5s;
	border: 1px solid #D97173;
}
.screen-3__features-item:hover{
	transform: scale(1.05);
	border-color:#fff;
}

```

### JS动画&交互

1. 页面载入完成后，所有动画元素设置_animate_init
2. 页面滚动到哪个屏幕大纲，哪个屏幕播放动画&导航条、大纲的出现。
3. 导航条双向定位 & 大纲定位
4. 导航条滑动门特效

>基本JS知识

* 获取Dom元素
	* 获取一个Dom元素
	* 获取所有Dom元素  
* 样式
	* 获取属性 
	* 设置属性
	* 新增样式--类似jQuery封装元素
	* 删除样式
* 事件
	* 窗口载入
	* 窗口滚动
	* 点击
	* 获取滚动条高度

```javascript
//获取一个Dom元素
document.querySelector(selector);
//获取所有Dom元素
document.querySelectorAll(selector);

//获取属性
element.getAttribute('class',cls);
//设置属性
element.setAttribute('class',cls);
//自定义封装-新增样式
addCls(element,cls);
//自定义封装-删除样式
delCls(element,cls);

// 窗口载入事件
window.onload =function(){
	//...
}
//窗口滚动事件
window.onscroll =function(){
	//...
}
// 点击处理事件
elem.onclick=function(){}
// 获取滚动条高度
document.body.scrollTop

```



