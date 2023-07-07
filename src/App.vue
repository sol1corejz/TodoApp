<script lang="ts" setup>
import AppHeader from './components/AppHeader.vue';
import AppFilters from './components/AppFilters.vue';
import AppTodoList from './components/AppTodoList.vue';
import AppAddTodo from './components/AppAddTodo.vue';
import AppFooter from './components/AppFooter.vue';
import { ITask } from './types/todo';
import { reactive, watch } from 'vue';
import { FilterType } from './types/filter';
import { ITodos } from './types/todos';

const todos: ITodos = reactive({
  tasks: [
    {
      id: 0,
      text: 'Learn the basics of Vue',
      completed: true,
    },
    {
      id: 1,
      text: 'Learn the basics of TypeScript',
      completed: false,
    },
    {
      id: 2,
      text: 'Learn the basics of JavaScript',
      completed: false,
    },
  ],
  activeFilter: 'All',
});

const toggleTodo = (id: number) => {
  const targetTodo = todos.tasks.find((todo: ITask) => todo.id === id);
  if (targetTodo) {
    targetTodo.completed = !targetTodo.completed;
  }
};

const deleteTodo = (id: number) => {
  todos.tasks = todos.tasks.filter((todo: ITask) => todo.id !== id);
};

const addTodo = (task: ITask) => {
  todos.tasks = [...todos.tasks, task];
};

const setFilter = (filter: FilterType) => {
  todos.activeFilter = filter;
};
</script>

<template>
  <AppHeader />

  <AppFilters @set-filter="setFilter" :filter="todos.activeFilter" />

  <main class="app-main">
    <AppTodoList :todos="todos" @toggleTodo="toggleTodo" @deleteTodo="deleteTodo" />

    <AppAddTodo @add-todo="addTodo" />
  </main>

  <AppFooter />
</template>
