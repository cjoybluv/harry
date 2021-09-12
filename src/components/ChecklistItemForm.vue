<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
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

      <Field
        v-model="formData.name"
        name="name"
        v-slot="{ field }"
        class="field"
      >
        <div class="mb-0">
          <InputText
            v-model="formData.name"
            @change="updateName"
            v-bind="field"
          />
        </div>
      </Field>
    </Form>
  </div>
</template>

<script>
import { Field, Form } from "vee-validate";
import { object, string } from "yup";
export default {
  name: "ChecklistItemForm",
  props: ["item"],
  components: {
    Field,
    Form,
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
  watch: {
    item(newVal) {
      if (newVal !== this.formData) {
        this.formData = newVal;
      }
    },
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
    onSubmit() {
      console.log("onSubmit");
    },
  },
};
</script>

<style lang="scss" scoped></style>
