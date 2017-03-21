## 前端技术前沿

>"Make it work, Make it right, make it fast." ——kent Beck


#### 打包工具 Gulp Webpack

- -Code Splitting 代码切分
- -Dead Code Elimination 死代码消除

#### 调试开发

- -Hot Module Repalcement 模块替换 不刷新页面就能进入
- -Time-Travel Debugging  状态管理工具

#### 数据交互 

>Meteor

- -Read-Time Operations 实时操作
- -Optimistic Updates  乐观更新
- -Offline Usage w/ Service Workers	离线使用

#### 语言应用 

>TypeScript

- -Static Type System 静态类型系统   
- -Isomorphic Architecture w/ Server-Side Render 前后同构 客户端渲染

### Future --Anti-Fatigue

>" ~~you need to know everything!~~ use new and shiny only when it solves a problem!"

>JavaScript is moving in the right direction

## Angular2
>new

* SPEED(change detection、view cahce 、init)速度加快
* CROSS PLATFORM(worker、server、native)
* Mobile(Android Ios)
* Flexible弹性(TypeScipt/ES6、ES5、Dart)
* AOT(静态编译)、Tree-sharking(<50k)

#### Core 核心功能

* 组件化 Components
* 模块 __Modules__
* 指令 Directives
* 数据绑定 Data Binding
* 服务 Services
* 依赖注入 Dependency Injection
* 模板 Templates

#### TypeScipt ---Angular2推荐语言

* 是ES6的超集。
* 类型
* 装饰器@ - Decorator
* Component
	* 例： 用TypeScipt写一个Hello World
		
	```typeScript
	import{ Component } from '@angular/core';

	@Component({
		selector:'my-app',
		template:'<h1>Hello World</h1>'
	})

	export class AppComponet{};

	...

	```
* NgModule
* Bootstrap App 启动一个项目

### Tools

* Angular CLI
* Mobile Toolkit
* Material 2
* Angury
* Lint (style guide)
* Codelyzer
* ...

### Extend
* Universal
* Web Worker
* PWA
* NativerScript,Ionic 2
* ZoneJS
* RxJS
* ...

### Scaffold

lightningtnc/awesomr-ng2

书籍《揭秘Angular2 -从入门、进阶到实战》








