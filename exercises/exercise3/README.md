# 酷炫页面总结

### css居中法小结
	
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
