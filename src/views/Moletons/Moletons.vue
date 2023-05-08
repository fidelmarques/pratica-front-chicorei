<template>
  <main>
    <h2 class="h2-title">Moletons</h2>

    <div class="product-grid" v-if="dataMoletons.length">
      <ProductCard
        v-for="moletom in dataMoletons"
        :key="moletom.id"
        :info="moletom"
      />
    </div>
  </main>
</template>

<script>
import ProductCard from "../../components/ProductCard/ProductCard.vue";
import { dataMoletons } from "../../assets/data";

export default {
  name: "Moletons",
  components: { ProductCard },
  setup() {
    return {
      dataMoletons,
    };
  },
};
</script>

<style lang="less" src="./style.less" scoped />
