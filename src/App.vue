<script setup>
import { onMounted } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'
import ProductList from './components/product/ProductList.vue'

// Cumplimiento Lección 1: Implementar ciclo de vida
onMounted(() => {
  console.log('[Sistema] App inicializada - Componentes montados con éxito.')
})
</script>

<template>
  <div class="app-container">
    <TheHeader />
    <main>
      <ProductList />
    </main>
  </div>
</template>

<style>
/* aqui los estilos globales básicos */
body {
  margin: 0;
  background-color: #121212;
  color: #ffffff;
  font-family: system-ui, apple-system, sans-serif;
}
.app-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
