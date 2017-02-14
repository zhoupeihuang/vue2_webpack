
**webpack与vue组件的应用**
=============
----------

vue2-webpackDemo
---------------

主要记录的是vue2的component的使用
每个项目中只有一个app.vue入口文件
app.vue内 引入 两个component
head.vue and nav.vue


----------
main.js

> new Vue({
	el:'#app',//主程序入口只有一个
		render: h => h(App)//ES6语法 
		/*
		等于以下代码
		(function(h){
			return h(App)
		})
	 * */
})


----------
app.vue


    `<template>
	 <div class="app">
		 <com-head></com-head><!--组件head-->
		 <com-nav></com-nav><!--组件 nav-->
		 <h2>{{message}}</h2>
		 <input type="text" v-model="message" />
	  </div>
	 </template>
	 <script>`
    //head会自动补全为head.vue
		import Head from './head/head'  
		//ES6 引入  如 ES5 var Head = require(./head/head.vue) 
		import Nav from './nav/nav'
		export default{ //默认输出
			components:{//组件
				comHead:Head,
				comNav:Nav
			},
			data(){
				return {
					message:'我是入口的App文件入口'
				}
			}
		}
		</script>


    
nav.vue

    `<template>
	<div class="nav">
		<h2>{{message}}</h2>
		<ul v-for="todo in todos">
			<li>{{todo.text}}</li>
		</ul>
	</div>
	</template>
	<script>`
	export default{
		data(){
			return {
				message:'我是导航条',
				todos: [
			      { text: 'Learn JavaScript' },
			      { text: 'Learn Vue' },
			      { text: 'Build something awesome' }
    			]
			}
		}
	}
	</script>
    

head.vue

  

    <template>
	<div class="head">
		<h2>{{message}}</h2>
	</div>
	</template>
	<script>
	export default{
		data(){
			return {
				message:'我是头部',
			}
		}
	}
	</script>

--------------------------
有必要说的是 import Head from './head/head'
【./】 代表的是当前层的目录

下面是 项目的目录
![项目的根目录](https://github.com/zhoupeihuang/vue2_webpack/blob/master/mulu.png)





 
