import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useProductStore = defineStore('product', () => {
  // 1. State (aqui se define el estado centralizado)
  const products = ref([])
  const loading = ref(true)
  const error = ref(null)
  const selectedCategory = ref('')

  // 2. Getters (aqui se definen los datos computados y reactivos)
  const filteredProducts = computed(() => {
    if (!selectedCategory.value) return products.value
    return products.value.filter((p) => p.category === selectedCategory.value)
  })

  const categories = computed(() => {
    return [...new Set(products.value.map((p) => p.category))]
  })

  // 3. Actions (Funciones que mutan el estado, como consumir la API y actualizar el estado)
  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      // Cambiamos el endpoint para traer tecnología (laptops y smartphones)
      const response = await axios.get(
        'https://dummyjson.com/products/category/smartphones?limit=8',
      )
      products.value = response.data.products.map((p, index) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        category: p.category,
        image: p.thumbnail,
        featured: index === 0 || index === 3, // Destacamos el 1ro y el 4to
      }))
    } catch (err) {
      error.value = 'Error al cargar el catálogo de productos.'
    } finally {
      loading.value = false
    }
  }

  return {
    // aqui lo que los componentes podrán  utilziar
    products,
    loading,
    error,
    selectedCategory,
    filteredProducts,
    categories,
    fetchProducts,
  }
})
