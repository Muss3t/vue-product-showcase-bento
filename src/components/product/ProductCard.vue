<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="relative flex flex-col justify-end h-full p-8 overflow-hidden transition-all duration-700 border rounded-[2rem] bg-white/[0.02] border-white/5 backdrop-blur-2xl hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] group cursor-pointer"
  >
    <!-- Foco de luz de estudio que se enciende en hover -->
    <div
      class="absolute inset-0 z-0 transition-opacity duration-700 opacity-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] group-hover:opacity-100"
    ></div>

    <!-- Imagen del producto (object-contain asegura que se vea completo, p-10 le da margen) -->
    <img
      v-if="product.image"
      :src="product.image"
      :alt="product.title"
      class="absolute inset-0 object-contain w-full h-full p-10 transition-all duration-700 drop-shadow-2xl group-hover:scale-110 group-hover:-translate-y-4"
    />

    <!-- Gradiente inferior oscuro para asegurar lectura -->
    <div
      class="absolute inset-x-0 bottom-0 z-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
    ></div>

    <!-- Contenido -->
    <div class="relative z-10 flex flex-col items-start">
      <span
        class="px-4 py-1.5 mb-4 text-[10px] font-black tracking-[0.2em] uppercase border rounded-full text-neutral-300 bg-black/40 border-white/10 backdrop-blur-md"
      >
        {{ product.category }}
      </span>

      <h3 class="mb-1 text-2xl font-bold tracking-tight text-white drop-shadow-lg">
        {{ product.title }}
      </h3>

      <p class="text-xl font-medium text-neutral-400">${{ product.price }}</p>
    </div>
  </article>
</template>
