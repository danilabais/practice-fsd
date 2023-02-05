<template>
  <v-btn
    v-for="tag in options"
    :color="tag.color"
    rounded
    :variant="tag.id !== modelValue ? 'outlined' : 'flat'"
    class="mr-2"
    @click="$emit('update:modelValue', tag.id)"
    >{{ tag.status }}</v-btn
  >
</template>

<script setup>
defineProps({
  options: {
    type: Array,
    default: [],
  },
  modelValue: {
    type: Number,
    default: 0,
  },
});
</script>
