/* aqui es donde se representará el estado de carga imitando la forma de las tarjetas del grid */
<template>
  <div class="skeleton-card"></div>
</template>

<style scoped>
.skeleton-card {
  background-color: #2a2a2a;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 1.5rem;
  height: 200px; /* Ajusta la altura según tus necesidades */
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.4;
  }
}
</style>
