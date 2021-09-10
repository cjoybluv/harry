<template>
  <div id="items">
    <TieredMenu :model="itemsMenu">
      <template #item="{ item }">
        <div @click.prevent="handleMenuClick(item)" class="p-menuitem-link">
          <span class="p-menuitem-icon" :class="item.icon"></span>
          <span class="p-menuitem-text">{{ item.label }}</span>
        </div>
      </template>
    </TieredMenu>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { mapActions, useStore } from "vuex";
export default defineComponent({
  name: "Items",
  setup() {
    const store = useStore();
    store.dispatch("auth/resetUserToken");

    const itemsMenu = computed(() => store.getters["item/itemsMenu"]);

    return { itemsMenu };
  },
  mounted() {
    this.fetchAll();
  },
  methods: {
    handleMenuClick(item) {
      console.log("handleMenuClick", item);
    },
    ...mapActions({
      fetchAll: "item/fetchAll",
    }),
  },
});
</script>

<style lang="scss">
#items {
  .p-tieredmenu {
    width: 35%;
  }
}
</style>
