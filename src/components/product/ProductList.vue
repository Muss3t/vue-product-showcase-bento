<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '../../stores/productStore'
import ProductCard from './ProductCard.vue'
import SkeletonLoader from '../ui/SkeletonLoader.vue'

// Instanciamos el store para manejar el estado de los productos
const store = useProductStore()

// storeToRefs extrae el estado y los getters sin perder reactividad y permite que el template los use directamente
const { loading, error, selectedCategory, filteredProducts, categories } = storeToRefs(store)

onMounted(() => {
  store.fetchProducts()
})
</script>

<template>
  <div class="list-container">
    <header class="toolbar">
      <select v-model="selectedCategory" class="filter-select">
        <option value="">Todas las categorías</option>
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </header>

    <div v-if="error" class="error-message">⚠️ {{ error }}</div>

    <section v-else-if="loading" class="bento-grid">
      <SkeletonLoader v-for="i in 6" :key="i" :class="{ 'featured-item': i === 1 || i === 5 }" />
    </section>

    <section v-else class="bento-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :class="{ 'featured-item': product.featured }"
      />
    </section>
  </div>
</template>

<style scoped>
/*NO TOCAR: estilos de la lista de productos y el grid asimétrico */
.list-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.toolbar {
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
}

.filter-select {
  background-color: #1e1e1e;
  color: #ffffff;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
}
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 1.5rem;
  padding: 0 2rem;
}
.featured-item {
  grid-row: span 2; /* Ocupa el doble de altura */
  grid-row: span 2;
  background: #2a2a2a; /* Color de fondo para diferenciar */
  border: 1px solid #333;
}
.error-message {
  color: #ef4444;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
}

@media (max-width: 660px) {
  .featured-item {
    grid-row: span 1; /* En pantallas pequeñas, no ocupará el doble de altura */
  }
}
</style>
