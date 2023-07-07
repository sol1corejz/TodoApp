<script lang="ts" setup>
import { FilterType } from '@/types/filter';

const props = defineProps<{ filter: FilterType }>();
const emit = defineEmits<{
  (e: 'setFilter', filter: FilterType): void;
}>();
</script>

<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button
        @click="emit('setFilter', 'All')"
        :class="{
          'button--primary': props.filter === 'All',
        }"
        class="button">
        All
      </button>
      <button
        @click="emit('setFilter', 'Active')"
        :class="{
          'button--primary': props.filter === 'Active',
        }"
        class="button">
        Active
      </button>
      <button
        @click="emit('setFilter', 'Done')"
        :class="{
          'button--primary': props.filter === 'Done',
        }"
        class="button">
        Done
      </button>
    </section>
  </aside>
</template>
