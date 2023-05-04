<template>
  <Header />
  <main>
    <h2 class="h2-title">Camisetas</h2>

    <div class="product-grid">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </main>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import ProductCard from "../../components/ProductCard/ProductCard.vue";

export default {
  name: "Home",
  components: { Header, ProductCard },
};
</script>

<style lang="less" src="./style.less" scoped />
