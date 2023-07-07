<script lang="ts" setup>
import AppTodoItem from './AppTodoItem.vue';
import { computed } from 'vue';
import { ITask } from '@/types/todo';
import { ITodos } from '@/types/todos';

const props = defineProps<{
  todos: ITodos;
}>();

console.log(props.todos);

let tasks = computed(() => {
  if (props.todos.activeFilter === 'Active') {
    return props.todos.tasks.filter((task: ITask) => !task.completed);
  } else if (props.todos.activeFilter === 'Done') {
    return props.todos.tasks.filter((task: ITask) => task.completed);
  } else {
    return props.todos.tasks;
  }
});

const emit = defineEmits<{
  (e: 'toggleTodo', id: number): void;
  (e: 'deleteTodo', id: number): void;
}>();
</script>

<template>
  <ul class="todo-list">
    <AppTodoItem
      @toggle-todo="emit('toggleTodo', todo.id)"
      @delete-todo="emit('deleteTodo', todo.id)"
      v-for="todo in tasks"
      :key="todo.id"
      :task="todo" />
  </ul>
</template>
