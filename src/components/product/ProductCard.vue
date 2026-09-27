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
    class="relative flex flex-col justify-end p-6 overflow-hidden transition-all duration-300 border rounded-3xl group border-white/10 bg-neutral-800 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 cursor-pointer"
  >
    <!-- Imagen de fondo con efecto zoom en hover -->
    <img
      v-if="product.image"
      :src="product.image"
      :alt="product.title"
      class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 opacity-50 group-hover:opacity-70 group-hover:scale-110"
    />

    <!-- Gradiente superpuesto para asegurar que el texto se lea -->
    <div
      class="absolute inset-0 z-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"
    ></div>

    <!-- Contenido (Textos) -->
    <div class="relative z-10">
      <span
        class="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-cyan-400 uppercase border rounded-full bg-cyan-950/80 border-cyan-800/50 backdrop-blur-sm"
      >
        {{ product.category }}
      </span>
      <h3 class="mb-1 text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
        {{ product.title }}
      </h3>
      <p class="text-lg font-light text-neutral-300">${{ product.price }}</p>
    </div>
  </article>
</template>
