<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator>
        <v-btn @click="dialog = true" small class="ml-auto" dark>
          <v-icon dark> mdi-pencil </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Карточка сотрудника</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <StaffFormComponent
              :initialState="initialState"
              ref="staffFromREF"
            />
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="submit"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import { StaffFormComponent } from "@/entities/StaffForm";

defineProps({
  initialState: {
    type: Object,
    required: false,
  },
});
const dialog = ref(false);
const staffFromREF = ref();
const emits = defineEmits(["editStaff"]);
const submit = async () => {
  const response = await staffFromREF.value.validateAndSubmit();
  if (response) {
    emits("editStaff", response);
    dialog.value = false;
  }
};
</script>
