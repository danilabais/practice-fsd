<template>
  <v-text-field
    placeholder="Поиск сотрудника"
    outlined
    class="mb-2"
    hint="Например Иванов Иван"
    :value="modelValue"
    clearable
    @click:clear="clear"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <!-- <v-icon slot="append" color="red"> mdi-plus </v-icon> -->
  </v-text-field>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
const clear = () => emits("update:modelValue", "");
</script>
