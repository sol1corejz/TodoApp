<script lang="ts" setup>
import { ITask } from '@/types/todo';

const props = defineProps<{
  task: ITask;
}>();

const emit = defineEmits<{
  (e: 'toggleTodo', id: number): void;
  (e: 'deleteTodo', id: number): void;
}>();
</script>

<template>
  <li
    class="todo-item"
    :class="{ 'todo-item--done': props.task.completed }"
    @click="emit('toggleTodo', props.task.id)">
    <div class="todo-item__status">
      <i class="bi bi-check2"></i>
    </div>
    <span class="todo-item__text">{{ props.task.text }}</span>
    <button class="todo-item__remove-button" @click.stop="emit('deleteTodo', props.task.id)">
      <i class="bi bi-trash3"></i>
    </button>
  </li>
</template>
