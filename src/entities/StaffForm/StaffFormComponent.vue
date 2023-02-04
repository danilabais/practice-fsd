<template>
  <v-form ref="form" lazy-validation>
    <v-text-field
      label="Фамилия Имя Отчество*"
      placeholder="Иванов Иван"
      maxlength="40"
      :rules="rules.nameRules"
      class="mb-2"
      v-model="staffForm.name"
      filled
    ></v-text-field>
    <v-text-field
      label="ИНН*"
      :rules="rules.innRules"
      maxlength="10"
      v-model="staffForm.inn"
      placeholder="210219391242"
      class="mb-2"
      filled
    ></v-text-field>
    <v-text-field
      label="Должность*"
      :rules="rules.jobRules"
      maxlength="30"
      v-model="staffForm.job"
      placeholder="Верстальщик"
      class="mb-2"
      filled
    ></v-text-field>
    <v-text-field
      label="Адрес*"
      maxlength="40"
      :rules="rules.adressRules"
      placeholder="Проспект Художников"
      class="mb-2"
      v-model="staffForm.adress"
      filled
    ></v-text-field>
    <v-text-field
      label="Дата рождения*"
      maxlength="10"
      :rules="rules.bdateRules"
      placeholder="ДД/ММ/ГГГГ"
      class="mb-2"
      v-model="staffForm.bdate"
      filled
    ></v-text-field>
    <v-select
      :items="staffTagPrepared"
      item-text="color"
      :rules="rules.staffTagRules"
      class="mb-2"
      v-model="staffForm.status"
      item-value="id"
      label="Статус*"
    />
    <v-autocomplete
      :rules="rules.countryRules"
      :items="database.countries"
      class="mb-2"
      item-value="id"
      v-model="staffForm.country"
      label="Страна*"
    />
    <v-autocomplete
      :rules="rules.cityRules"
      :items="database.cities"
      v-model="staffForm.city"
      class="mb-2"
      item-value="id"
      label="Город*"
    />
    <v-autocomplete
      :rules="rules.offerTypeRules"
      :items="database.contractType"
      v-model="staffForm.contractType"
      item-value="id"
      class="mb-2"
      label="Тип договора*"
    />
    {{ staffForm }}
  </v-form>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDatabaseStore } from "@/shared/store/database";
import * as rules from "./constants";

const staffForm = ref({
  name: "",
  bdate: "",
  inn: "",
  adress: "",
  job: "",
  status: null,
  country: null,
  city: null,
  contractType: null,
});

const form = ref();
const database = useDatabaseStore();
const staffTagPrepared = computed(() => {
  return database.staffTag.filter((el) => el.title);
});
const validateAndSubmit = async () => {
  const isValide = (await form.value.validate()).valid;
  if (!isValide) return null;
  return { ...staffForm.value, id: Date.now() };
};
defineExpose({ validateAndSubmit });
</script>
