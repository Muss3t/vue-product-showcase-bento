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
      // Pedimos más productos a la API general
      const response = await axios.get('https://dummyjson.com/products?limit=150')

      // Definimos qué categorías consideramos "Tech"
      const techCategories = ['smartphones', 'laptops', 'tablets', 'mobile-accessories']

      // Filtramos la respuesta para quedarnos solo con los productos tecnológicos
      const techProducts = response.data.products
        .filter((p) => techCategories.includes(p.category))
        .slice(0, 9) // Nos quedamos con 9 productos para la grilla

      products.value = techProducts.map((p, index) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        category: p.category,
        image: p.thumbnail,
        featured: index === 0 || index === 4, // Destacamos un par
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
