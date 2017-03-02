## let 变量
>描述：let允许你声明一个作用域被限制在块级中的变量、语句或者表达式。与var关键字不同的是，var声明的变量只能是全局或者整个函数块的。

* 简化内部函数代码：当用到内部函数的时候,let会让你的代码更加简单

```javascript

var list = document.getElementById("list");

for (let i = 1; i <= 5; i++) {
  var item = document.createElement("LI");
  item.appendChild(document.createTextNode("Item " + i));

  let j = i;
  item.onclick = function (ev) {
    console.log("Item " + j + " is clicked.");
  };
  list.appendChild(item);
}

```

* 在程序或者函数的顶层，let并不会像var一样在全局对象上创造一个属性，比如

```javascript
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```
