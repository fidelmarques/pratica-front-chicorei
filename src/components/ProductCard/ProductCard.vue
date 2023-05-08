<template>
  <div class="product-card">
    <img class="product-image" :src="getImageUrl(info.id)" />
    <div class="product-info">
      <h3 class="product-title">{{ info.name }}</h3>
      <h5 class="product-description">
        {{ info.description }}
      </h5>
      <h4 class="product-price">{{ info.price }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["info"],
  methods: {
    getImageUrl(id) {
      return new URL(`../../assets/img/${id}.avif`, import.meta.url).href;
    },
  },
};
</script>

<style lang="less" src="./style.less" scoped />
