##平行四边形 parallelogram
> `tarnsform: skewX(-45deg)`

####嵌套元素方案
>对内容在应用一次反向的skew()变形，从而抵消容器的变形效果

```html
<a href="#yolo" class="button">
		<div>Click Me</div>
</a>
```
```css
.button{
	transform: skewX(45deg);
}
.button > div {
	transform: skewX(-45deg);
}	

```

####纯css解决方案
>吧所有样式颜色应用到伪元素上。对伪元素进行变形

```css
.button{
	position: relative;
}
.button::before{
	content: '';
	position: absolute;
	top:0;right: 0;bottom: 0;left: 0;
	z-index: -1;
	background: #58a;
	transform: skew(45deg);
}
```

>这种技巧不仅对skew()变形来说很有用，还适用于其他任何变形样式，当我们想变形一个元素而不想变形它的内容时就可以用到它
  
* 更多参见[Nicolas Gallagher](http://nicolasgallagher.com/css-background-image-hacks)的技巧