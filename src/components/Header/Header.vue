<template>
  <header id="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button type="button" class="btn menu-button">
          <i class="bi bi-list"></i>
        </button>

        <a href="/">
          <h1 class="header-title">Chico Rei</h1>
        </a>

        <button type="button" class="btn cart-button">
          <i class="bi bi-bag"></i>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" src="./style.less" scoped />
