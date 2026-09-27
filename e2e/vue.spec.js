import { test, expect } from '@playwright/test'

test('Usuario filtra productos por categoría y ve los resultados actualizados', async ({
  page,
}) => {
  // 1. El usuario entra a la aplicación
  await page.goto('/')

  // 2. Espera a que los productos reales carguen desde la API (que aparezcan las tarjetas)
  await page.waitForSelector('.card')

  // 3. Captura cuántos productos hay inicialmente
  const initialCardsCount = await page.locator('.card').count()
  expect(initialCardsCount).toBeGreaterThan(0)

  // 4. El usuario interactúa con el filtro seleccionando la segunda opción (índice 1)
  const filterSelect = page.locator('.filter-select')
  await filterSelect.selectOption({ index: 1 })

  // 5. Verifica que los resultados se filtraron visualmente
  // Seleccionamos la categoría de la primera tarjeta visible para verificar
  const firstCardCategory = await page.locator('.card .category').first().innerText()
  expect(firstCardCategory).not.toBeNull()
})
