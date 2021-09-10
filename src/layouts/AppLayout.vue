<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import { markRaw } from "vue";
import AppLayoutDefault from "./appDefault/AppLayoutDefault";
export default {
  name: "AppLayout",
  data: () => ({
    layout: markRaw(AppLayoutDefault),
  }),
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(`@/layouts/${route.meta.layout}.vue`);
          this.layout =
            markRaw(component?.default) || markRaw(AppLayoutDefault);
        } catch (e) {
          this.layout = markRaw(AppLayoutDefault);
        }
      },
    },
  },
};
</script>
