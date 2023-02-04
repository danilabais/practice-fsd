<template>
  <v-row no-gutters>
    <v-col cols="8">
      <v-card class="py-4 px-4">
        <SearchComponent />
        <v-divider></v-divider>
        <h2 class="pt-4 pb-2">Список сотрудников</h2>
        <TagsComponent v-model="activeTag" :options="database.staffTag" />

        <StaffCardComponent
          v-for="staff in staffList"
          :staff="staff"
          :key="staff.id"
        />
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="py-4 px-4"
        ><AddStaffComponent @addStaff="addStaff" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import { useDatabaseStore } from "@/shared/store/database";
import { TagsComponent, SearchComponent } from "@/entities";
import { AddStaffComponent } from "@/features";
import StaffCardComponent from "./StaffCard/StaffCardComponent.vue";
const database = useDatabaseStore();
const activeTag = ref(0);

const staffList = ref([
  {
    name: "чел1",
    bdate: "31/02/2002",
    inn: "3123123123",
    adress: "dfsfsdf",
    status: 1,
    country: 1,
    city: 3,
    contractType: 2,
    job: "верстальщик",
    id: 1675537411081,
  },
  {
    name: "чел 2",
    bdate: "31/01/2002",
    inn: "3123123123",
    adress: "dfsfsdf",
    job: "продавец",
    status: 1,
    country: 2,
    city: 3,
    contractType: 2,
    id: 1675537411082,
  },
]);
const addStaff = (staff) => {
  staffList.value.unshift(staff);
};
</script>

<style>
.justify-start {
  display: flex;
  align-items: center;
}
.text {
  flex: 0 0 auto;
}
</style>
