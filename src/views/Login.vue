<template>
  <div class="formgrid grid">
    <div class="col-12 md:col-6 md:col-offset-3">
      <div class="card p-fluid">
        <h5>Login</h5>

        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors, meta }"
        >
          <Field
            v-model="formData.email"
            type="email"
            name="email"
            v-slot="{ field }"
            class="field"
          >
            <label for="email">EMail</label>
            <span class="p-input-icon-right">
              <InputText
                :class="{ 'p-invalid': errors.email }"
                v-bind="field"
              />
            </span>
          </Field>
          <div class="invalid-feedback">{{ errors.email }}</div>

          <Field
            v-model="formData.password"
            name="password"
            v-slot="{ field }"
            class="field"
          >
            <label for="password">Password</label>
            <span class="p-input-icon-right">
              <InputText
                :class="{ 'p-invalid': errors.password }"
                v-bind="field"
                :type="passwordType"
              />
              <i
                class="pi"
                :class="{
                  'pi-eye-slash': passwordVisible,
                  'pi-eye': !passwordVisible,
                }"
                @click.prevent="
                  passwordVisible = !passwordVisible;
                  passwordType = passwordVisible ? 'text' : 'password';
                "
              />
            </span>
          </Field>
          <div class="invalid-feedback">{{ errors.password }}</div>

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
import { mapActions } from "vuex";
import { Form, Field } from "vee-validate";
import { object, string } from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
  },
  setup() {
    const schema = object().shape({
      password: string()
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 17 characters")
        .required("Password is required"),
      email: string()
        .email("Must be a valid EMail")
        .required("EMail is required"),
    });
    return {
      schema,
    };
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      passwordType: "password",
      passwordVisible: false,
    };
  },
  methods: {
    onSubmit() {
      const loginDto = {
        email: this.formData.email,
        password: this.formData.password,
      };

      this.login(loginDto)
        .then(() => {
          this.$router.push("About");
        })
        .catch((err) => {
          console.log("login-catch", err);
        });
    },
    ...mapActions({
      login: "auth/login",
    }),
  },
};
</script>

<style lang="scss" scoped>
.p-invalid {
  border-color: var(--danger-color) !important;
}

.invalid-feedback {
  color: var(--danger-color);
  font-size: 0.8em;
}
</style>
