<template>
  <main>
    <h2 class="h2-title">Camisetas</h2>

    <div class="product-grid" v-if="dataCamisetas.length">
      <ProductCard
        v-for="camiseta in dataCamisetas"
        :key="camiseta.id"
        :info="camiseta"
      />
    </div>
  </main>
</template>

<script>
import ProductCard from "../../components/ProductCard/ProductCard.vue";
import { dataCamisetas } from "../../assets/data";
export default {
  name: "Camisetas",
  components: { ProductCard },
  setup() {
    return {
      dataCamisetas,
    };
  },
};
</script>

<style lang="less" src="./style.less" scoped />
