##优雅的JS

>“ ...循环是个不可避免的结构，而且不好复用，同时循环还很难加入其它操作中。更麻烦的是，使用循环就意味着在每一个新的迭代中有更多变化需要响应 ”————Luis Atencio

####循环

>* 示例函数和数组  

```javascript
//oodlify ::String->String
function oodlify(s){
	return s.replace(/[aeiou]/g,'oodle');
}

const input =[
	'John',
	'Paul',
	'George',
	'Ringo',
];

```
>* 使用while循环

```javascript
let i =0;
const len = input.length;
let output = [];
while(i<len){
	let item = input[i];
	let newItem = oodlify(item);
	output.push(newItem);
	i++;
};
```

>* 使用for循环：

```javascript
const len = input.length;
let output = [];
for (let i = 0; i < len; i++) {
	let item = input[i];
	let newItem = oodlify(item);
	output.push(newItem);
}
```

>* for...of循环：   *ES2015*  --不用在意计数器的新的循环结构

```javascript
let output = [];
for (let item of input) {
	let newItem = oodlify(item);
	output.push(newItem);
}
```

