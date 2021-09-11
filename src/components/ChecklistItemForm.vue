<template>
  <div>
    <Field
      v-model="formData.completed"
      name="completed"
      v-slot="{ field }"
      class="field"
    >
      <div class="field-checkbox mb-0">
        <Checkbox v-bind="field" v-model="formData.completed" />
      </div>
    </Field>

    <Field v-model="formData.name" name="name" v-slot="{ field }" class="field">
      <div class="field-checkbox mb-0">
        <InputText
          v-model="formData.name"
          @change="updateName"
          :class="{ 'p-invalid': errors.name }"
          v-bind="field"
        />
      </div>
    </Field>
  </div>
</template>

<script>
import { Field } from "vee-validate";
import { object, string } from "yup";
export default {
  name: "ChecklistItemForm",
  props: ["item"],
  components: {
    Field,
  },
  setup() {
    const schema = object().shape({
      name: string()
        .min(3, "Name must be at least 3 characters")
        .max(60, "Name must be less than 61 characters")
        .required("Name is required"),
    });
    return {
      schema,
    };
  },
  data() {
    return {
      formData: {
        completed: false,
        name: "",
      },
    };
  },
  mounted() {
    this.formData = { ...this.item };
  },
  methods: {
    updateCompleted(e) {
      console.log("updateCompleted", e);
    },
    updateName(e) {
      console.log("updateName", e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
