<template>
  <main>
    <h2 class="h2-title">Produtos</h2>
    <div class="category-filter">
      <h3>Categorias</h3>
      <select class="form-select" v-model="category" @change="filterProducts">
        <option value="empty" selected>Selecione</option>
        <option value="camisetas">Camisetas</option>
        <option value="moletons">Moletons</option>
        <option value="shorts">Shorts</option>
      </select>
    </div>
    <router-view></router-view>
  </main>
</template>

<script>
import ProductCard from "../../components/ProductCard/ProductCard.vue";
import router from "../../routes/router";

export default {
  name: "Products",
  components: { ProductCard },
  data() {
    return {
      category: "empty",
    };
  },
  methods: {
    filterProducts() {
      if (this.category === "empty") return;
      router.replace({ path: `/produtos/${this.category}` });
    },
  },
};
</script>

<style lang="less" src="./style.less" scoped />
