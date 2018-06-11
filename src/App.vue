<template>

	<div id="app" class="container">
		
		<TodoField
			title="Add a Todo:"
			@addTodo="addItem"
		></TodoField>

		<TodoList v-if="todos.length > 0"
			title="Todos:"
		>

			<TodoItem v-for="(item, index) in todos"
				:key="index"
				:title="item"
				@deleteTodo="deleteItem(index)"
			/>

		</TodoList>

	</div>

</template>





<script>

	import TodoField from './components/TodoField';
	import TodoList from './components/TodoList';
	import TodoItem from './components/TodoItem';

	export default {
		name: 'app',
		components: {
			TodoField,
			TodoList,
			TodoItem
		},
		computed: {

			todos() {

				return this.$store.state.todos;

			}

		},
		methods: {

			addItem(value) {

				console.log(value);

				this.$store.dispatch('addTodoItem', value);

			},
			deleteItem(index) {

				console.log(index);

				this.$store.dispatch('deleteTodoItem', index);

			}

		}
	}

</script>





<style lang="scss">

  	@import '~bulma/bulma.sass';

</style>
