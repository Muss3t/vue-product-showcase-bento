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
  <div class="flex flex-col gap-12">
    <!-- Hero Section -->
    <div class="flex flex-col items-center mt-8 text-center">
      <h2
        class="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 drop-shadow-sm"
      >
        Catálogo de Dispositivos
      </h2>
      <p class="mt-6 text-xl font-medium text-neutral-400 max-w-2xl">
        Explora nuestra selección de artículos disponibles.
      </p>
    </div>

    <!-- Filtro Minimalista -->
    <header class="flex justify-center w-full px-8">
      <select
        v-model="selectedCategory"
        class="px-6 py-3 text-sm font-bold tracking-wide text-white transition-all bg-white/5 border border-white/10 rounded-full appearance-none focus:outline-none focus:border-white/30 hover:bg-white/10 backdrop-blur-xl cursor-pointer text-center"
      >
        <option value="" class="bg-neutral-900">✦ Explorar todo el catálogo</option>
        <option v-for="cat in categories" :key="cat" :value="cat" class="bg-neutral-900">
          {{ cat }}
        </option>
      </select>
    </header>

    <div v-if="error" class="p-8 text-xl text-center text-red-400">⚠️ {{ error }}</div>

    <!-- Grilla Bento Centrada -->
    <section
      v-else-if="loading"
      class="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-[320px] place-content-center max-w-6xl mx-auto w-full"
    >
      <SkeletonLoader
        v-for="i in 6"
        :key="i"
        :class="[i === 1 || i === 4 ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1']"
      />
    </section>

    <section
      v-else
      class="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-[320px] place-content-center max-w-6xl mx-auto w-full"
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
