# Rick & Morty - Aeromexico

App web que consume la API de Rick and Morty donde se ven personajes, se ve el detalle del personaje, se marcan como favoritos y se hace la busqueda o filtro de personaes por nombre.

# 🚀 DEMO: https://rick-morty-aeromex.vercel.app/

## Instrucciones para levantar el proyecto.

### Requisitos

- Node.js
- npm

### Instalacion

1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd rick-morty-aeromex
```

2. Instalar dependencias

```bash
npm install

```

3. Ejecutar el servidor de desarrollo

```bash
npm run dev

```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

### Pruebas unitarias

Ejecutar todas las pruebas:

```bash
npm test
```

Ejecutar pruebas en modo watch:

```bash
npm run test:watch
```

Ejecutar pruebas con cobertura:

```bash
npm run test:coverage
```

**Pruebas incluidas:**

- Redux slices (favorites-slice)
- Servicios (characters service)
- Componentes (SearchInput)

## ¿Qué es lo que más te gustó de TU desarrollo?

Lo que más me gustó del proyecto fue la implementación de la gestión del store y seguir los principios de diseño de figma.

## Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?

### Mejoras técnicas:

1. Pruebas unitarias: implementar mas pruebas unitarias para tener mas cobertura.
2. Performance: tener mejor lógica de paginacón como infinite scroll o lazy loading
3. Manejo de errores: mejor experiencia de usuario cuando sucedan errores en general

## Pain point o bug encontrado y su solución

Problema: cuando implementé la busqueda o filtro de personajes, se hacian multiples request a la API y eso afectaba el performance

**Solución implementada**:

1. Implementé un debounce para retrasar la búsqueda hasta que el usuario deje de escribir

# Gracias :)
