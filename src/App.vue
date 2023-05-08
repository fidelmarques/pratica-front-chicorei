<script setup></script>

<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
  name: "App",
  components: { Header },
};
</script>

<style lang="less" src="./global.less"></style>
