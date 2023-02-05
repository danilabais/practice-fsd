<template>
  <v-form ref="formREF">
    <h2 class="pb-2">Фильтр</h2>
    <v-row>
      <v-col>
        Гражданство
        <v-select
          item-value="id"
          v-model="selected.country"
          :items="countriesWithNull"
        />
      </v-col>
      <v-col>
        Пол
        <v-select v-model="selected.sex" item-value="id" :items="sexWithNull" />
      </v-col>
    </v-row>
    Должность
    <v-select v-model="selected.job" item-value="id" :items="jobWithNull" />

    Тип договора
    <v-checkbox
      hide-details
      v-model="selected.type"
      v-for="item in contractType"
      :key="item.id"
      :value="item.id"
      :label="item.title"
    />
    <v-divider class="mb-2" />
    <v-row>
      <v-col>
        <v-btn color="green" @click="submit" block>Применить</v-btn>
      </v-col>
      <v-col>
        <v-btn color="grey" block @click="resetForm">Очистить</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import { computed, ref } from "vue";
import { useDatabaseStore } from "@/shared/store/database";

const emits = defineEmits(["sumbit"]);

const database = useDatabaseStore();
const { countries, sex, jobs, contractType } = database;

const selected = ref({
  country: null,
  sex: null,
  job: null,
  type: [],
});
const formREF = ref();

const nullableValue = { id: null, title: "Не важно" };

const countriesWithNull = computed(() => [nullableValue, ...countries]);
const sexWithNull = computed(() => [nullableValue, ...sex]);
const jobWithNull = computed(() => [nullableValue, ...jobs]);

const submit = () => {
  emits("sumbit", { ...selected.value }); //нужны не реактивные данные
};

const resetForm = () => {
  formREF.value.reset();
  selected.value.type = [];
  submit();
};
</script>
