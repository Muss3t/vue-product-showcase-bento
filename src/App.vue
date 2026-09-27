<script setup>
import { onMounted } from 'vue'
import 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import ProductList from './components/product/ProductList.vue'

onMounted(() => {
  console.log('[Sistema] Interfaz Premium inicializada.')
})
</script>

<template>
  <!-- Fondo ultra oscuro con un resplandor azul muy sutil arriba -->
  <div
    class="flex flex-col min-h-screen font-sans antialiased text-neutral-100 bg-black selection:bg-cyan-500 selection:text-white bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(6,182,212,0.1),transparent)]"
  >
    <TheHeader />

    <main class="flex-grow w-full px-4 py-8 mx-auto max-w-7xl">
      <ProductList />
    </main>

    <TheFooter />
  </div>
</template>
