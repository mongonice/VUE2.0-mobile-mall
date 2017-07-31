# mobile-mall

> this is vue-cli+webpack+vue-router+vue-resource+vuex

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 一个菜鸟学习vue的辛酸路。。。
### 准备工作：
>你的电脑上要安装了node环境要有git命令行(没有的话可以直接用dos命令吧)

## 安装vue-cli vue项目脚手架(就像一座没有装修的房子)
``` bash
# 全局安装install vue-cli (全局安装指的是安装到了node的某个目录下面了，而局部安装是安装到你的某个项目的根目录下)
npm install vue-cli -g
# init vue-project（初始化一个基于webpack的vue项目）
vue init webpack 项目名称
$cd 项目的根目录下
# 安装依赖(你的目录下会产生一个node_modules的目录)
npm install
# 走起
npm run dev
```

### 生成的目录结构

<pre>
├── build               // webpack配置文件
├── config              // 主要的工程配置
├── node_modules        // 项目依赖
├── src                 // 生产目录
├── static              // 静态目录(我放的是模拟数据，放别的地方挂了)
│   ├── assets          // 各种资源（图片、css、js等）
|       └── ...
│   ├── components      // 零部件组件
|       └── ...
|   |—— pages           // 组装起来的页面组件
│   ├── vuex            // 复杂的逻辑要用vuex存储公共状态，方便组件之间的通信
│   ├── App.vue         // 根组件 
│   ├── main.js         // app入口文件(调动所有的js模块)
│   └── router.js       // 路由配置
├── index.html          // 项目入口文件
├── package.json        // 项目配置文件
</pre>

### 技术点

***
* vue-router进行配置路由
* vue-resource进行ajax交互
* element-ui学会引用ui框架
* 组件之间的通信
* vuex状态管理   ?????
* transition动画交互  ?????

### 底部导航图片的on与off变换（用到了[$route](https://router.vuejs.org/zh-cn/api/route-object.html)对象中path关键词 即：$route.path）

***
```html
<img class="tab-icon" :src=" tab.path == $route.path ? tab.iconUrlOn : tab.iconUrlOff " />
```
### classfy组件的左侧tab切换组件实现

***
```html
<li v-for="(item,index) in tagList" v-text="item.name" :class="{cur:item.iscur}" @click="setCur(index)"></li>
```
```javascript
methods:{
   setCur:function(index){
      this.tagList.map(function(val,i){
           // 如果i和传过来的idnex值正好相等就让此元素加上active
          if(i == index){
             val.iscur = true;
          }else{
             val.iscur = false;
          }
       })
     }
   }
```

### 通过router改变页面的的title内容
```javascript
const routes = [
    { 
      path: '/', 
      component: Home, 
      meta: {title:'环球小镇'}   // 只需要配置meta
    },
    { 
      path: '/Home', 
      component: Home, 
      meta:{title:'环球小镇'}
    },...]
    
// 在初始化router之后添加个方法（![afterEach](https://router.vuejs.org/zh-cn/advanced/navigation-guards.html)）
router.afterEach((to, from, next) => {
	document.title = to.meta.title;
});  
```
### 改变头部导航条里面的heading（用到了$route.name）
```javascript
const routes = [
    { 
      path: '/', 
      name:0,
      component: Home, 
      meta: {title:'环球小镇'}
    },
    { 
      path: '/Home',
      name:0,   // 只需要配置name关键词
      component: Home, 
      meta:{title:'环球小镇'}
    },...]
```    
```html
<!-- 将$route.name 作为headTitle存放标题内容的数组的下标 -->
<h1 class="header-title">{{ headTitle[$route.name] }}</h1>
```
## 组件之间的通信（父传子靠props，子传父靠$emit&$on,子传子（后续会添加。。。），再复杂了点就用到了vuex）
### 父传子（后续内容。。。）
> 子传父
```
<!-- 子组件 -->
<template>
  <ul class="tag-list">
    <li v-for="(item,index) in tagList" v-text="item.name" :class="{cur:item.iscur}" @click="setCur(index)">
    </li>
  </ul>
</template>
methods:{
 setCur:function(index){
     var _this = this;
     _this.tagList.map(function(val,i){
     if(i == index){
         val.iscur = true;
         _this.$emit('changeTab', i)  // 事件监听(中转站)传递给父组件一个自定义changeTab事件 并且把i索引值带过去
     }else{
         val.iscur = false;
     }
   })
 }
}
```
```
<!-- 父组件 -->
<template>
  <div id="classfy">
    <!-- 子组件传过来的自定义changeTab事件 -->
    <classfy-left-bar @changeTab="changeContent"></classfy-left-bar>
  </div>
</template>
methods:{
  changeContent:function(index){
      this.content = this.wholeCont[index].replace(/'/g,'')
  }
}
```

### 2017.07.28 解决了个人主页中消息提示的高级动画间隔循环动画效果
---
> 解决思路：前百分之20是运动的，后百分之80是静止状态，这静止状态就相当于动画间隔
```
@keyframes upandown { 
  0% { 
	transform:translateY(0.06rem);
	-webkit-transform:translateY(0.06rem);
  } 
  5% { 
	transform:translateY(-0.06rem);
	-webkit-transform:translateY(-0.06rem);
  } 
  10% { 
	transform:translateY(0.06rem);
	-webkit-transform:translateY(0.06rem);
  } 
  15% { 
	transform:translateY(-0.06rem);
	-webkit-transform:translateY(-0.06rem);
  } 
  20% { 
	transform:translateY(0.06rem);
	-webkit-transform:translateY(0.06rem);
  } 
  100% { 
	transform:translateY(0.06rem);
	-webkit-transform:translateY(0.06rem);
  } 
}

```

![test](./static/images/goods2.jpg)

### 引入公共样式 2017.07.31 

在main.js中 import './assets/css/base.css'




