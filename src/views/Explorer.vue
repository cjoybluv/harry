<template>
  <div id="explorer" class="grid">
    <div class="col-4">
      <AppMenu :model="itemsMenu" />
    </div>

    <div id="form-here" class="col-8">
      <component :is="currentForm" :itemId="itemId"></component>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { mapActions, useStore } from "vuex";
import AppMenu from "@/layouts/appDefault/AppMenu";
import AlarmForm from "@/components/AlarmForm.vue";
import ChecklistForm from "@/components/ChecklistForm";
import { formMap } from "@/constants/explorerConstants";

export default defineComponent({
  name: "Explorer",
  components: {
    AppMenu,
    AlarmForm,
    ChecklistForm,
  },
  setup() {
    const store = useStore();
    store.dispatch("auth/resetUserToken");

    let currentForm = ref(null);
    let itemId = ref(null);
    const handleMenuClick = ({ item: menuItem }) => {
      currentForm.value = formMap[menuItem.itemType];
      itemId.value = menuItem.key;
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

    return { itemsMenu, currentForm, itemId };
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
#explorer {
  .layout-menu {
    border-right: solid 1px var(--blue-100);
  }
}
</style>
