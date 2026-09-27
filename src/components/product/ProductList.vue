<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '../../stores/productStore'
import ProductCard from './ProductCard.vue'
import SkeletonLoader from '../ui/SkeletonLoader.vue'

const store = useProductStore()
const { loading, error, selectedCategory, filteredProducts, categories } = storeToRefs(store)

onMounted(() => {
  store.fetchProducts()
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <header class="flex justify-end px-8">
      <select
        v-model="selectedCategory"
        class="px-4 py-2 text-white transition-colors border rounded-xl bg-neutral-800 border-white/10 focus:outline-none focus:border-cyan-500 hover:bg-neutral-700"
      >
        <option value="">Todas las categorías</option>
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </header>

    <div v-if="error" class="p-8 text-xl text-center text-red-400">⚠️ {{ error }}</div>

    <!-- Grilla Bento con Tailwind -->
    <section
      v-else-if="loading"
      class="grid grid-cols-1 gap-6 p-8 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px]"
    >
      <SkeletonLoader
        v-for="i in 6"
        :key="i"
        :class="[i === 1 || i === 5 ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1']"
      />
    </section>

    <section
      v-else
      class="grid grid-cols-1 gap-6 p-8 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px]"
    >
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :class="[product.featured ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1']"
      />
    </section>
  </div>
</template>
