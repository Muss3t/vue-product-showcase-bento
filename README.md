# Vue Product Showcase - Módulo 7

🔗 **Demo en vivo:** [https://vue-product-showcase-bento.vercel.app]

Aplicación SPA (Single Page Application) desarrollada en Vue 3 que funciona como un catálogo de productos dinámico. El proyecto cumple con todos los requerimientos de la rúbrica del Módulo 7, aplicando una arquitectura limpia, manejo de estado centralizado y pruebas automatizadas, pero elevado a los estándares de la industria actual.

## Tecnologías y Justificación de Arquitectura

Para este proyecto se tomó la decisión deliberada de reemplazar las tecnologías legacy sugeridas en los requerimientos originales por sus equivalentes modernos y recomendados oficialmente por el equipo de Vue.js en 2026:

- **Vite (Reemplaza a Vue CLI):** Vue CLI se encuentra en modo de mantenimiento y obsoleto. Vite proporciona un entorno de desarrollo sustancialmente más rápido gracias a su servidor basado en ESM nativo y Hot Module Replacement (HMR) instantáneo.
- **Pinia (Reemplaza a Vuex):** Pinia es el estándar actual y oficial para Vue. Ofrece una API más simple, tipado seguro nativo y se integra a la perfección con la Composition API mediante "Setup Stores", eliminando la complejidad de las mutaciones de Vuex.
- **Tailwind CSS v4:** Para el diseño visual se descartó el CSS tradicional en favor de Tailwind v4, permitiendo construir una interfaz responsiva, moderna (Bento Grid, Glassmorphism) y mantenible directamente desde el markup, sin archivos de configuración engorrosos.
- **Vitest y Playwright (Reemplazan a Jest y Nightwatch):** Vitest se integra nativamente con la configuración de Vite, compartiendo el mismo entorno de compilación, lo que lo hace más rápido y fácil de configurar que Jest. Playwright es el estándar moderno para pruebas End-to-End, superando a Nightwatch en velocidad, herramientas de depuración y soporte de navegadores.

## 📦 Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en un entorno local:

1. Clonar el repositorio.
2. Instalar las dependencias:
   ```bash
   npm install
   ```
