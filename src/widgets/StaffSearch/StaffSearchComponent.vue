<template>
  <v-row no-gutters>
    <v-col cols="8">
      <v-card class="py-4 px-4">
        <SearchComponent v-model="inputFilter" />
        <v-divider />
        <h2 class="pt-4 pb-2">Список сотрудников</h2>
        <TagsComponent v-model="activeTag" :options="database.staffTag" />
        <StaffCardComponent
          v-for="staff in paginatedStaffList"
          :staff="staff"
          :key="staff.id"
        >
          <EditStaffComponent @editStaff="editStaff" :initialState="staff" />
        </StaffCardComponent>
        <v-btn
          block
          v-if="filteredStaffList.length - pagination > 0"
          @click="pagination += PAGINATION_ADD"
          >Показать следующие {{ filteredStaffList.length - pagination }}
        </v-btn>
      </v-card>
    </v-col>
    <v-col cols="4" style="position: fixed; right: 0">
      <v-card class="py-4 px-4"
        ><AddStaffComponent class="py-4 px-4 mb-5" @addStaff="addStaff" />
        <v-divider class="mb-5" />
        <SortStaffComponent @sumbit="setSidebarFilter" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useDatabaseStore } from "@/shared/store/database";
import { TagsComponent, SearchComponent } from "@/entities";
import {
  SortStaffComponent,
  EditStaffComponent,
  AddStaffComponent,
} from "@/features";
import { data } from "./mookDataStaff";
import StaffCardComponent from "./components/StaffCardComponent.vue";

const database = useDatabaseStore();
const activeTag = ref(0);
const inputFilter = ref("");
const sidebarFilter = ref(null);

const PAGINATION_ADD = 5;
const pagination = ref(PAGINATION_ADD);

const setSidebarFilter = (filters) => (sidebarFilter.value = filters);

const staffList = ref(data);

const filteredStaffList = computed(() => {
  return staffList.value.filter((el) => {
    //filter by tag
    if (activeTag.value !== 0 && activeTag.value !== el.status) {
      return false;
    }

    //filter by input search
    if (inputFilter.value) {
      if (!el.name.toLowerCase().includes(inputFilter.value.toLowerCase())) {
        return false;
      }
    }

    //filter by sidebar
    const sFilter = sidebarFilter.value;
    if (sFilter) {
      if (
        //filter by country
        sFilter.country !== el.country &&
        sFilter.country
      ) {
        return false;
      }

      if (
        //filter by sex
        sFilter.sex !== el.sex &&
        sFilter.sex
      ) {
        return false;
      }

      if (
        //filter by job
        sFilter.job !== el.job &&
        sFilter.job
      ) {
        return false;
      }

      if (
        //filter by type
        !sFilter.type.includes(el.contractType) &&
        sFilter.type.length
      ) {
        return false;
      }
    }

    //simple pagination
    //конечно понятно, что это все через бек делается
    // if (idx >= pagination.value) return false;

    return true;
  });
});

const paginatedStaffList = computed(() => {
  return filteredStaffList.value.filter((el, idx) => {
    //simple pagination
    //конечно понятно, что это все через бек делается
    if (idx >= pagination.value) return false;

    return true;
  });
});

watch([activeTag, inputFilter, sidebarFilter], () => {
  pagination.value = PAGINATION_ADD;
});
const editStaff = (staff) => {
  let findedStaff = staffList.value.find((el) => el.id === staff.id);
  Object.assign(findedStaff, staff);
};
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
