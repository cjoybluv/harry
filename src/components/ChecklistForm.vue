<template>
  <div class="formgrid grid">
    <div class="col-12 md:col-6">
      <div class="card p-fluid">
        <h5>Checklist Form</h5>

        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors, meta }"
        >
          <Field
            v-model="checklistDTO.name"
            type="text"
            name="name"
            v-slot="{ field }"
            class="field"
          >
            <div class="mt-3">
              <label for="name">Name</label>
              <span class="p-input-icon-right">
                <InputText
                  :class="{ 'p-invalid': errors.name }"
                  v-bind="field"
                />
              </span>
            </div>
          </Field>
          <div class="invalid-feedback">{{ errors.name }}</div>

          <Field
            v-model="checklistDTO.master"
            name="master"
            v-slot="{ field }"
            class="field"
          >
            <div class="field-checkbox mb-0">
              <Checkbox
                name="master"
                v-bind="field"
                v-model="checklistDTO.master"
              />
              <label for="master">Master</label>
            </div>
          </Field>
          <div class="invalid-feedback">{{ errors.master }}</div>

          <h4>Items</h4>

          <div v-for="(item, i) in checklistDTO.items" :key="i">
            <Field
              v-model="item.completed"
              name="completed"
              v-slot="{ field }"
              class="field"
            >
              <div class="field-checkbox mb-0">
                <Checkbox v-bind="field" v-model="item.completed" />
              </div>
            </Field>

            <Field
              v-model="item.name"
              name="itemName"
              v-slot="{ field }"
              class="field"
            >
              <div class="field-checkbox mb-0">
                <span class="p-input-icon-right">
                  <InputText
                    :class="{ 'p-invalid': errors.itemName }"
                    v-bind="field"
                  />
                </span>
              </div>
            </Field>
          </div>

          <div class="mt-2 flex justify-content-end">
            <div class="col-3">
              <Button
                type="reset"
                label="Cancel"
                class="p-button-warning mr-2"
              ></Button>
            </div>
            <div class="col-3">
              <Button
                label="Submit"
                type="submit"
                class="mr-2"
                :disabled="!meta.valid"
              ></Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { Form, Field } from "vee-validate";
import { object, string } from "yup";

export default defineComponent({
  name: "ChecklistForm",
  props: ["checklist"],
  components: {
    Form,
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
      checklistDTO: {
        name: "",
        owner: this.owner,
        items: [],
      },
    };
  },
  computed: {
    ...mapGetters({
      owner: "auth/user",
    }),
  },
  mounted() {
    console.log("mounted", this.checklist);
    if (this.checklist?.name) {
      this.checklistDTO = { ...this.checklist };
    }
  },
  methods: {
    onSubmit() {
      console.log("onSubmit", this.checklistDTO);
    },
  },
});
</script>

<style lang="scss" scoped></style>
