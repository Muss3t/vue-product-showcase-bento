<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import ProductCard from './ProductCard.vue'
import SkeletonLoader from '../ui/SkeletonLoader.vue'

const products = ref([])
const loading = ref(true)
const error = ref(null)
const selectedCategory = ref('')

const fetchProducts = async () => {
  try {
    // Consumo de API real
    const response = await axios.get('https://dummyjson.com/products?limit=8')
    products.value = response.data.products.map((p, index) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      category: p.category,
      // Mantenemos el diseño asimétrico: el 1er y 5to elemento serán grandes
      featured: index === 0 || index === 4,
    }))
  } catch (err) {
    error.value = 'Error al cargar el catálogo de productos.'
  } finally {
    loading.value = false
  }
}

// Filtro computado
const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products.value
  return products.value.filter((p) => p.category === selectedCategory.value)
})

// Extraer categorías únicas para el select
const categories = computed(() => {
  return [...new Set(products.value.map((p) => p.category))]
})

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div class="list-container">
    <!-- Barra de herramientas: Filtro -->
    <header class="toolbar">
      <select v-model="selectedCategory" class="filter-select">
        <option value="">Todas las categorías</option>
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </header>

    <!-- Estado de Error -->
    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <!-- Estado de Carga (Skeleton Loaders) -->
    <section v-else-if="loading" class="bento-grid">
      <SkeletonLoader v-for="i in 6" :key="i" :class="{ 'featured-item': i === 1 || i === 5 }" />
    </section>

    <!-- Lista de Productos dinámica -->
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
