<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          @click="dialog = true"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Карточка сотрудника</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <StaffFormComponent ref="staffFromREF" />
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
const dialog = ref(false);
const staffFromREF = ref();
const emits = defineEmits(["addStaff"]);
const submit = async () => {
  const response = await staffFromREF.value.validateAndSubmit();
  if (response) emits("addStaff", response);
};
</script>
