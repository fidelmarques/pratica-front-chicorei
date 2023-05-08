<template>
  <main>
    <h2 class="h2-title">Shorts</h2>

    <div class="product-grid" v-if="dataShorts.length">
      <ProductCard
        v-for="shorts in dataShorts"
        :key="shorts.id"
        :info="shorts"
      />
    </div>
  </main>
</template>

<script>
import ProductCard from "../../components/ProductCard/ProductCard.vue";
import { dataShorts } from "../../assets/data";
export default {
  name: "Shorts",
  components: { ProductCard },
  setup() {
    return { dataShorts };
  },
};
</script>

<style lang="less" src="./style.less" scoped />
