<script lang="ts" setup>
import { ref } from 'vue';
import { ITask } from '@/types/todo';

let isFormVisible = ref(false);

let todoText = ref('');

const emit = defineEmits<{
  (e: 'addTodo', arg: ITask): void;
}>();

const setVisible = () => {
  isFormVisible.value = true;
};
const setInvisible = () => {
  isFormVisible.value = false;
};
const addTodo = () => {
  emit('addTodo', {
    id: Date.now(),
    text: todoText.value,
    completed: false,
  });
  todoText.value = '';
};
</script>

<template>
  <section class="add-todo">
    <button v-if="!isFormVisible" @click="setVisible" class="add-todo__show-form-button">
      <i class="bi bi-plus-lg"></i>
    </button>
    <form @submit.prevent="addTodo" v-else class="add-todo__form">
      <button @click="setInvisible" class="close-button" type="button">
        <i class="bi bi-x"></i>
      </button>
      <div class="text-input text-input--focus">
        <input v-model="todoText" class="input" />
      </div>
      <button class="button button--filled">Add task</button>
    </form>
  </section>
</template>
