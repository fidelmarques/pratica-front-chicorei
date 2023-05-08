<template>
  <header id="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button type="button" class="menu-button" @click="toggleMenu">
          <i class="bi bi-list"></i>
        </button>

        <router-link to="/">
          <h1 class="header-title">Chico Rei</h1>
        </router-link>

        <button type="button" class="cart-button">
          <router-link to="/checkout">
            <i class="bi bi-bag"></i>
          </router-link>
        </button>
      </div>
    </nav>
    <Menu v-if="collapsed" :class="{ close: closing }" />
  </header>
</template>

<script>
import { ref } from "vue";
import Menu from "../Menu/Menu.vue";

export const collapsed = ref(false);
export const closing = ref(false);

export const toggleMenu = () => {
  if (collapsed.value) {
    closing.value = true;
    setTimeout(() => {
      collapsed.value = !collapsed.value;
      closing.value = false;
    }, 300);
  } else {
    collapsed.value = !collapsed.value;
  }
};

export default {
  name: "Header",
  components: { Menu },

  setup() {
    return { collapsed, closing, toggleMenu };
  },
};
</script>

<style lang="less" src="./style.less" scoped />
