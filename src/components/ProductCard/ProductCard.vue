<template>
  <div class="product-card">
    <img
      class="product-image"
      src="../../assets/img/e123fc40-decc-11ed-b748-115d167b6c8d.avif"
    />
    <div class="product-info">
      <h3 class="product-title">Camiseta Clean</h3>
      <h5 class="product-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </h5>
      <h4 class="product-price">R$ 39,99</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
};
</script>

<style lang="less" src="./style.less" scoped />
