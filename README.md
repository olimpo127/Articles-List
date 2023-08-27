# Aplicación Lista de Artículos

Esta es una aplicación Vue.js que muestra una lista de los 10 primeros artículos obtenidos de 
la API https://jsonplaceholder.typicode.com/posts. 
Los usuarios pueden buscar artículos por título y alternar los detalles de cada artículo.

## Tabla de Contenidos
- [Introducción](#introducción)
- [Características](#características)
- [Empezando](#empezando)
- [Uso](#uso)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Introducción
La Aplicación Lista de Artículos es una aplicación sencilla de Vue.js que obtiene y muestra una lista de artículos desde la API https://jsonplaceholder.typicode.com/posts. Proporciona una funcionalidad de búsqueda para filtrar artículos por sus títulos, y los usuarios también pueden alternar detalles adicionales para cada artículo.

## Características
- Obtiene los 10 primeros artículos desde la API https://jsonplaceholder.typicode.com/posts.
- Muestra una lista de artículos con sus títulos y cuerpos.
- Permite a los usuarios buscar artículos por título.
- Proporciona un botón "Ver más detalles" para ver información adicional para cada artículo.

## Empezando
Sigue estas instrucciones para poner en marcha el proyecto en tu máquina local.

1. Clona el repositorio:
git clone <https://github.com/olimpo127/Articles-List>

2. Instala las dependencias usando npm o yarn:
cd vue-article-app
npm install # o yarn install

3. Ejecuta el servidor de desarrollo:
npm run serve # o yarn serve

4. Accede a la aplicación en tu navegador en `http://localhost:8080` o como se indique en la terminal.

## Uso
1. Al abrir la aplicación, verás una lista de los 10 primeros artículos obtenidos de la API https://jsonplaceholder.typicode.com/posts.
2. Utiliza el campo de búsqueda en la parte superior para filtrar artículos por título.
3. Para cada artículo, puedes hacer clic en el botón "Ver más detalles" para ver información adicional.

## Tecnologías Utilizadas
- Vue.js: Como marco de trabajo JavaScript progresivo para construir interfaces de usuario.
- Axios: Como cliente HTTP basado en promesas para hacer solicitudes a la API.
- TypeScript: Un superset de JavaScript con tipos estáticos.
- Pinia: Como estado centralizado para la gestión de datos en la aplicación Vue.js.

## Estructura del Proyecto
La estructura del proyecto está organizada de la siguiente manera:

- `src/`
- `components/`: Contiene componentes Vue utilizados en la aplicación.
- `stores/`: Contiene la tienda de la aplicación utilizada para gestionar la visibilidad de los detalles de los artículos.
- `App.vue`: El componente Vue raíz.
- `main.ts`: El punto de entrada de la aplicación.

