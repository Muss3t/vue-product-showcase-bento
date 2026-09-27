import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
// Ajustamos las rutas para que apunten correctamente desde src/__tests__/
import ProductCard from '../components/product/ProductCard.vue'
import ProductList from '../components/product/ProductList.vue'
import { useProductStore } from '../stores/productStore'

describe('Pruebas Unitarias del Catálogo', () => {
  it('renderiza correctamente la información del producto en la tarjeta', () => {
    const mockProduct = { id: 1, title: 'Laptop Pro', price: 1500, category: 'Laptops' }

    const wrapper = mount(ProductCard, {
      props: { product: mockProduct },
    })

    expect(wrapper.text()).toContain('Laptop Pro')
    expect(wrapper.text()).toContain('$1500')
    expect(wrapper.text()).toContain('Laptops')
  })

  it('muestra el mensaje de error visual cuando la API falla', () => {
    setActivePinia(createPinia())
    const store = useProductStore()

    store.error = 'Error simulado de conexión'
    store.loading = false

    const wrapper = mount(ProductList)

    expect(wrapper.find('.error-message').exists()).toBe(true)
    expect(wrapper.text()).toContain('Error simulado de conexión')
  })
})
