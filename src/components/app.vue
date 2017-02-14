<template>
	<div class="app">
		<com-head></com-head>
		<com-nav></com-nav>
		<h2>{{message}}</h2>
		<input type="text" v-model="message" />
	</div>	
</template>
<script>
	import Head from './head/head'
	import Nav from './nav/nav'
	export default{
		components:{
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
