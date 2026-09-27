<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'

// Datos temporales simulando una respuesta
const products = ref([
  { id: 1, title: 'MacBook Pro M3', price: 1999, category: 'Laptops', featured: true },
  { id: 2, title: 'Keychron K2', price: 99, category: 'Periféricos', featured: false },
  { id: 3, title: 'Sony WH-1000XM5', price: 349, category: 'Audio', featured: false },
  { id: 4, title: 'Monitor LG UltraGear', price: 450, category: 'Pantallas', featured: true },
  { id: 5, title: 'Logitech MX Master 3', price: 120, category: 'Periféricos', featured: false },
])
</script>

<template>
  <section class="bento-grid">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :class="{ 'featured-item': product.featured }"
    />
  </section>
</template>

<style scoped>
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}
/* ESTA clase lo que hace es que los productos destacados ocupen mas espacio */
.featured-item {
  grid-column: span 2;
  grid-row: span 2;
  background: #2a2a2a;
}
@media (max-width: 600px) {
  .featured-item {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
