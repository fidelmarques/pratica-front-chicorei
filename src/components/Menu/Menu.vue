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
          <a class="" href="#">Página inicial</a>
        </li>
        <li class="menu-item">
          <a class="" href="#">Camisetas</a>
        </li>
        <li class="menu-item">
          <a class="" href="#">Moletons</a>
        </li>
        <li class="menu-item">
          <a class="" href="#">Shorts</a>
        </li>
        <li class="menu-item">
          <a class="" href="#">Meias</a>
        </li>
        <li class="menu-item">
          <a class="" href="#">Bermudas</a>
        </li>
        <li class="menu-item">
          <a class="" href="#">Calças</a>
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
