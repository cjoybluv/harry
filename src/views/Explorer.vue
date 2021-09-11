<template>
  <div id="items" class="grid">
    <div class="col-4">
      <AppMenu :model="itemsMenu" />
    </div>

    <div class="col-8">
      <ChecklistForm />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { mapActions, useStore } from "vuex";
import AppMenu from "@/layouts/appDefault/AppMenu";
import ChecklistForm from "@/components/ChecklistForm";

export default defineComponent({
  name: "Items",
  components: {
    AppMenu,
    ChecklistForm,
  },
  setup() {
    const store = useStore();
    store.dispatch("auth/resetUserToken");

    const handleMenuClick = ({ originalEvent, item }) => {
      console.log("handleMenuClick", item, originalEvent);
    };

    const itemsMenu = computed(() => {
      const itemsMenu = store.getters["item/itemsMenu"];
      return itemsMenu.map((item) => {
        return {
          ...item,
          command: handleMenuClick,
        };
      });
    });

    return { itemsMenu };
  },
  mounted() {
    this.fetchAll();
  },
  methods: {
    ...mapActions({
      fetchAll: "item/fetchAll",
    }),
  },
});
</script>

<style lang="scss">
#item {
  .layout-menu {
    border-right: solid 1px var(--blue-100);
  }
}
</style>
