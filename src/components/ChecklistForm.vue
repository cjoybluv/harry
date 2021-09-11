<template>
  <div class="formgrid grid">
    <div class="col-12">
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

          <h4>Items - {{ checklistDTO.checklist.items?.length }}</h4>

          <!-- <div v-for="(item, i) in checklistDTO.checklist.items" :key="i">
            <checklist-item-form :item="item" />
          </div> -->

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
import { mapActions, mapGetters } from "vuex";
import { Form, Field } from "vee-validate";
import { object, string } from "yup";
// import ChecklistItemForm from "@/components/ChecklistItemForm";

export default defineComponent({
  name: "ChecklistForm",
  props: ["itemId"],
  components: {
    // ChecklistItemForm,
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
        _id: "",
        name: "",
        owner: this.owner,
        checklist: {
          items: [],
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      owner: "auth/user",
    }),
  },
  watch: {
    itemId(newVal) {
      if (newVal !== this.checklistDTO._id) {
        this.fetchOne(newVal).then(
          (result) => (this.checklistDTO = { ...result })
        );
      }
    },
  },
  mounted() {
    if (this.itemId) {
      this.fetchOne(this.itemId).then(
        (result) => (this.checklistDTO = { ...result })
      );
    }
  },
  methods: {
    onSubmit() {
      console.log("onSubmit", this.checklistDTO);
    },
    ...mapActions({
      fetchOne: "item/fetchOne",
    }),
  },
});
</script>

<style lang="scss" scoped></style>
