<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="card">
    <span class="category">{{ product.category }}</span>
    <h3>{{ product.title }}</h3>
    <p class="price">${{ product.price }}</p>
  </article>
</template>

<style scoped>
.card {
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: #555;
}

.category {
  font-size: 0.75rem;
  color: #888;
  text-transform: uppercase;
  margin-bottom: auto;
}
.price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #4ade80;
}
</style>
