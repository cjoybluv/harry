<template>
  <div class="layout-profile">
    <div>
      <img src="../../assets/layout/images/profile-light-bulb.png" alt="" />
    </div>
    <button class="p-link layout-profile-link" @click="onClick">
      <span class="username">dave@harry.com</span>
      <i class="pi pi-fw pi-cog"></i>
    </button>
    <transition name="layout-submenu-wrapper">
      <ul v-show="expanded">
        <li>
          <button class="p-link">
            <i class="pi pi-fw pi-user"></i><span>Account</span>
          </button>
        </li>
        <li>
          <button class="p-link">
            <i class="pi pi-fw pi-inbox"></i><span>Notifications</span
            ><span class="menuitem-badge">2</span>
          </button>
        </li>
        <li>
          <button @click="handleLogout" class="p-link">
            <i class="pi pi-fw pi-power-off"></i><span>Logout</span>
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    onClick(event) {
      this.expanded = !this.expanded;
      event.preventDefault();
    },
  },
});
</script>

<script setup></script>

<style scoped></style>
