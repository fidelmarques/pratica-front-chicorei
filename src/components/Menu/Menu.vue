<template>
  <div class="menu-container">
    <div class="menu">
      <div class="menu-header">
        <span>Menu</span>
        <button type="button" class="menu-button" @click="toggleMenu">
          <i class="bi bi-x"></i>
        </button>
      </div>

      <ul class="menu-list">
        <li class="menu-item">
          <router-link to="/" @click="toggleMenu">Página inicial</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/produtos/camisetas" @click="toggleMenu"
            >Camisetas</router-link
          >
        </li>
        <li class="menu-item">
          <router-link to="/produtos/moletons" @click="toggleMenu"
            >Moletons</router-link
          >
        </li>
        <li class="menu-item">
          <router-link to="/produtos/shorts" @click="toggleMenu"
            >Shorts</router-link
          >
        </li>
      </ul>
    </div>
    <a class="menu-blurred-background" @click="toggleMenu"></a>
  </div>
</template>

<script>
import { toggleMenu } from "../Header/Header.vue";
export default {
  name: "Menu",
  setup() {
    return { toggleMenu };
  },
};
</script>

<style lang="less" src="./style.less" scoped />
