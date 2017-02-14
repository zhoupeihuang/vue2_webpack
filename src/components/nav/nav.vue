<template>
	<div class="nav">
		<h2>{{message}}</h2>
		<ul v-for="todo in todos">
			<li>{{todo.text}}</li>
		</ul>
	</div>	
</template>
<script>
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
