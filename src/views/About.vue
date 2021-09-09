<template>
  <div class="about">
    <h1>This is an about page</h1>
    <OrderList v-model="nations" listStyle="height:auto" dataKey="Year">
      <template #header> List of Cars </template>
      <template #item="slotProps">
        <div>
          <div>{{ slotProps.item.Nation }}</div>
          <span
            >{{ slotProps.item.Year }} - {{ slotProps.item.Population }}</span
          >
        </div>
      </template>
    </OrderList>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { mapActions, useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const nations = computed(() => store.getters["nations"]);

    return { nations };
  },
  mounted() {
    this.fetchNations();
  },
  methods: {
    ...mapActions({
      fetchNations: "fetchNations",
    }),
  },
});
</script>
