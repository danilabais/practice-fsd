<template>
  <v-card color="#d6e4fa" class="mx-4 my-4 py-4 px-4">
    <v-row>
      <v-card-title class="text-h5 text-name">{{ staff.name }} </v-card-title>
      <v-chip class="ma-2" label> ИНН {{ staff.inn }} </v-chip>
      <v-chip class="ma-2" color="green" label>{{ statusTitle }}</v-chip>
      <v-card-text>{{ staff.job }}</v-card-text>
    </v-row>
    <!-- Почему то justify start не работает, придется свой стиль тащить (мб vuutify 3 not stable) -->
    <v-row justify="start" class="justify-start">
      <v-card-text class="text"
        ><img
          :src="`src/shared/assets/img/flags/${country.code}.svg`"
          :alt="country.title"
          class="mr-2"
        />
        {{ country.code.toUpperCase() }}</v-card-text
      >
      <v-divider vertical></v-divider>
      <v-card-text class="text">г. {{ cityTitle }}</v-card-text>
      <v-divider vertical></v-divider>
      <v-card-text class="text"
        >Дата рождения: {{ staff.bdate.replaceAll("/", ".") }}</v-card-text
      >
      <v-divider vertical></v-divider>
      <v-card-text class="text">Возраст: {{ age }}</v-card-text>
    </v-row>
    <v-row>
      <v-chip class="ma-2" label>Истекают</v-chip>
    </v-row>
  </v-card>
</template>

<script setup>
import { computed } from "vue";
import { useDatabaseStore } from "@/shared/store/database";
import { _calculateAge } from "@/shared/helpers/_calculateAge.js";
const database = useDatabaseStore();
const { staffTag, cities, contractType, countries } = database;
const statusTitle = computed(
  () => contractType.find((el) => el.id === props.staff.status).title
);
const cityTitle = computed(
  () => cities.find((el) => el.id === props.staff.city).title
);
const country = computed(() => {
  return countries.find((el) => el.id === props.staff.country);
});

const age = computed(() => {
  return _calculateAge(props.staff.bdate);
});

const props = defineProps({
  staff: {
    // по хорошему все это описать с помощью ts interface и вынести в отдельный файл, а то много слишком
    name: {
      type: String,
      required: true,
    },
    bdate: {
      type: String,
      required: true,
    },
    inn: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    country: {
      type: Number,
      required: true,
    },
    city: {
      type: Number,
      required: true,
    },
    contractType: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style>
.text-name {
  color: rgb(2, 2, 185);
}
</style>
