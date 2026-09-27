<script setup>
import { onMounted } from 'vue'
import { useProductStore } from './stores/productStore'
import 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
import ProductList from './components/product/ProductList.vue'

onMounted(() => {
  console.log('[Sistema] Interfaz Tech-Noir inicializada.')
})
</script>

<template>
  <div
    class="min-h-screen font-sans antialiased text-neutral-100 bg-neutral-900 selection:bg-cyan-500 selection:text-white"
  >
    <TheHeader />
    <main class="px-4 py-8 mx-auto max-w-7xl">
      <ProductList />
    </main>
  </div>
</template>
