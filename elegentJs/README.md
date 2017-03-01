##优雅的JS ——_JAVASCRIPT WITHOUT LOOPS_

>“ ...循环是个不可避免的结构，而且不好复用，同时循环还很难加入其它操作中。更麻烦的是，使用循环就意味着在每一个新的迭代中有更多变化需要响应 ”————Luis Atencio

#### 循环

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

#### 映射（Mapping）

>* 如果有两个数组都需要调用oodlify

```javascript
const fellowship=[
	'frodo',
	'sam',
	'gandalf',
	'boromir',
	'legoas',
	'gimli',
];

const band =[
	'John',
	'Paul',
	'George',
	'Ringo',
];

```
>* 让两组数都使用循环  ——_但是循环重复使用多次_

```javascript
let bandoodle = [];
for (let item of input) {
	let newItem = oodlify(item);
	bandoodle.push(newItem);
}
let floodleship = [];
for (let item of input) {
	let newItem = oodlify(item);
	floodleship.push(newItem);
}
```

>* 进行重构，写进函数 

```javascript
function oodlifyArray(input){
	let output = [];
	for (let item of input) {
		let newItem = oodlify(item);
		output.push(newItem);
	}
	return output;
}

let bandoodle = oodlifyArray(band);
let floodleship = oodlifyArray(fellowship);
```

>* 如果我们还有想要的函数怎么办？

```javascript
function izzlify(s){
	return s.replace(/[aeiou]+/g,'izzle');
}

//我们只载能再创建一个izzlifyArray()的函数

function izzlifyArray(input){
	let output = [];
	for (let item of input) {
		let newItem = izzlifys(item);
		output.push(newItem);
	}
	return output;
}

```

>* 引入映射模式  _——给出的数组和函数，将数组中的每个元素映射到新的数组中_

```javascript
function map(f,a){
	let output = [];
	for(let item of a){
		output.push(f(item));
	}
	return output;
}

```

>* 用递归来摆脱循环

```javascript
function map(f,a){
	if(a.length === 0){ return [];}
	return [f(a[0])].concat(map(f, a.slice(1)));
}
//但递归损失了性能
```

>* JavaScript中的映射函数map _--映射非常常见_

```javascript
let bandoodle = band.map(oodlify);
let floodleship = fellowship.map(oddlify);
let bandizzle = band.map(izzlify);
let fellowship = fellowship.map(izzlify);
```

#### 精简(Reducing)

>* map这个函数非常便利，但它没办法覆盖我们需要的所有循环。
现在有下面的例子，假如我们有一个英雄对象的数组

```javascript
const heroes = [
	{name:'Hulk',strength: 90000},
	{name:'Spider-Man',strength: 25000},
	{name:'Hawk Eye',strength: 136},
	{name:'Thor',strength: 100000},
	{name:'Black Widow',strength: 136},
	{name:'Vision',strength: 5000},
	{name:'Scarlet Witch',strength: 60},
	{name:'Mystique',strength: 120},
	{name:'Namora',strength: 75000},
]

//如果想找到最强壮的英雄使用for循环
let strongest ={strength: 0};
for(hero of heroes){
	if(hero.strength > strongest.strength){
		strongest = hero;
	}
}
//想知道所有英雄加起来有多强
let combinedStrength = 0;
for(hero of heroes){
	combinedStrength +=hero.strength;
}
```
>* 提取因子使用函数

```javascript
function greaterStrength(champion,contender){
	return (contender.strength > champion.strength) ? contender:champion;
}

function addStrength(tally,hero){
	return tally + hero.strength; 
}
//初始化值并调用函数
const initialStrongest ={strength: 0};
let working = initialStrongest;
for (hero of heroes){
	working = greaterStrength(working,hero);
}
const strongest = working;

const initialCombinedStrength = 0;
working = initialCombinedStrength;
for (hero of heroes){
	working = addStrength(working,hero);
}
const combinedStrength = working;

```

>* reduce函数来压缩模式

```javascript
function reduce(f,initialVal,a){
	let working = initialVal;
	for(item of a){
		working = f(working,item);
	}
	return working;
}
```
>* JavaScript中的reduce函数

```javascript
const strongestHero = heroes.reduce(greaterStrength,{strength:0});
const combinedStrength = heroes.reduce(addStrength,0);
//代码减少了复杂性，将代码从独立处理元素的过程之中分离

```
#### 过滤(Filtering)
>* map可以对数组的每个元素进行操作，reduce将数组减至一个元素，我们想在数组中提取元素该怎么办呢？

```javascript
	//扩充之前数组
	const heroes = [
	{name:'Hulk',strength: 90000,sex:'m'},
	{name:'Spider-Man',strength: 25000,,sex:'m'},
	{name:'Hawk Eye',strength: 136,sex:'m'},
	{name:'Thor',strength: 100000,sex:'m'},
	{name:'Black Widow',strength: 136,sex:'f'},
	{name:'Vision',strength: 5000,sex:'m'},
	{name:'Scarlet Witch',strength: 60,sex:'f'},
	{name:'Mystique',strength: 120,sex:'f'},
	{name:'Namora',strength: 75000,sex:'f'},
]
   /*两个目标
	1. 找到所有女英雄
	2. 找到那些力量值大于500的英雄
	*/
let femaleHeroes = [];
for(let hero of heroes){
	if(hero.sex === 'f'){
		femaleHeroes.push(hero);
	}
}

let superhumans = [];
for(let hero of heroes){
	if(hero.strength >= 500){
		superhumans.push(hero);
	}
}
```

>* 提取因子使用函数

```javascript
//替换if中的内容 返回ture 或者false的函数，也被称为predicate（判断）函数
function isFemaleHero(hero){
	return(hero.sex === 'f');
}

function isSuperhumans(hero){
	return (hero.strength >=500);
}

let femaleHeroes = [];
for(let hero of heroes){
	if(isFemaleHero(hero)){
		femaleHeroes.push(hero);
	}
}

let superhumans = [];
for(let hero of heroes){
	if(isSuperhumans(hero)){
		superhumans.push(hero);
	}
}
```
>* 提取，创建函数

```javascript
function filter(predicate,arr){
	let working = [];
	for (let item of arr){
		if(predicate(item)){
			working = working.concat(item);
		}
	}
}

const femaleHeroes = filter(isFemaleHero,heroes);
const superhumans = filter(isSuperhumans,heroes);
```
>* 和map、reduce一样，JavaScipt也为我们提供了数组方法的filter 。所以不用自己写那么多

```javascript
//与其他方法相比，使用filter能传递更多信息，并且使用了更少的空间。完全没必要熟悉所有循环后来实现过滤。
//只需要写一个方法调用即可。
const femaleHeroes = heroes.filter(isFemaleHero);
const superhumans = heroes.filter(isSuperhumans);

```

#### 查找(Finding)

>* 我们只想找一位英雄呢？假设要找Black Widow.如果用fiLter函数

```javascript
function isBlackWidow(hero){
	return (hero.name === 'Black Widow');
}

const blackWidow = heroes.filter(isBlackWidow)[0];
```
>* 但是这样写效率不高因为predicate函数的用法是非常灵活的 我们写一个find函数

```javascript
function find(predicate,arr){
	for(let item of arr){
		if(predicate(item)){
			return item;
		}
	}
}

const blackWidow = find(isBlackWidow,heroes);
```
>* 同样JavaScript 可以包办全部，我们不用自己创建什么复杂函数

```javascript
const blackWidow = heroes.find(isBlackWidow);
```

#### 小结：

* 从这些迭代函数中不难看出抽象思维的价值，假设我们用内嵌数组的方法处理一切问题。在每个案例中我们都完成三件事：
	* 剔除循环控制结构，增强代码可读性；
	* 用现有的方法来归纳例子中的模式；
	* 明确我们到底要对数组中的元素做什么操作。
* 在每个例子中，我们都用小而纯粹的函数将问题分解。真正重要的就是这四种模式（也有其他方法，但我推荐这四种），用它们你几乎可以淘汰JavaScript中所有的循环了。这是因为几乎JavaScript中所有的循环都是来处理数组，或创建数组的。在减少循环的过程中，我们不但减少了代码的复杂性，同时也增强了代码的可维护性。


关于本文 --摘抄by--kaitai
译者：@石嘉
作者：@James Sinclair
译文：https://github.com/Findow-team/Blog/issues/16
原文：http://jrsinclair.com/articles/2017/javascript-without-loops/
