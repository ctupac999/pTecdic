# Proyecto: Listado de Productos Interactivo para E-Commerce

Este proyecto es una aplicación web interactiva diseñada para mostrar un listado de productos con funcionalidades de filtrado, búsqueda en tiempo real, carrito de compras y ficha de producto detallada. El objetivo es cumplir con las especificaciones indicadas, destacando la experiencia de usuario, la organización del código y la posibilidad de realizar compras.

---

## **Especificaciones del Proyecto**

### **1. Listado de Productos**
- Muestra una lista de productos que incluye:
  - Imagen.
  - Nombre.
  - Precio.
  - Categoría.
- La lista inicial contiene 20 productos organizados en 2 categorías distintas.

### **2. Filtro por Categoría**
- Implementación de un `<select>` con las categorías disponibles:
  - Permite al usuario filtrar productos según su categoría.
  - Al seleccionar una categoría, solo se muestran los productos correspondientes.

### **3. Búsqueda en Tiempo Real**
- Campo de texto (`<input type="text">`) para buscar productos por nombre.
- El listado se actualiza dinámicamente mientras el usuario escribe.

### **4. Carrito de Compras**
- Los usuarios pueden añadir productos al carrito, con la funcionalidad de aumentar o reducir la cantidad de cada artículo.
- Al añadir productos, el carrito se actualiza dinámicamente, mostrando la lista de productos, sus cantidades y el precio total.
- El carrito permite eliminar productos y ver el total actualizado.
- Los usuarios pueden realizar la compra, y si el carrito está vacío, se muestra un mensaje de alerta.

### **5. Ficha de Producto**
- Al hacer clic en un producto, se muestra una ficha con los siguientes detalles:
  - Imagen ampliada.
  - Nombre.
  - Descripción.
  - Precio.
  - Botón de "Añadir al carrito".
- La ficha se presenta en un modal que se puede cerrar fácilmente.

### **6. Animación en el Botón de "Añadir al Carrito"**
- Animación visual personalizada al pulsar el botón, como un cambio de color o escala.
- Mejora la experiencia de usuario con un feedback visual claro.

### **7. Responsividad**
- El diseño es completamente responsivo, adaptándose a diferentes tamaños de pantalla.
- Optimizado para dispositivos móviles y tabletas, garantizando una buena experiencia de usuario en todos los dispositivos.

---

## **Estructura del Código**

### **1. Archivos Principales**
- `index.html`: Estructura principal del proyecto.
- `styles.css`: Estilos personalizados, alineados con las variables definidas en `:root`.
- `main.js`: Archivo principal que inicializa la funcionalidad del proyecto.
- `data/products.js`: Contiene la lista estática de productos.
- `components/productList.js`: Lógica para renderizar y filtrar productos.
- `components/modal.js`: Manejo de la ficha de producto en el modal.
- `components/animation.js`: Implementación de animaciones para el botón "Añadir al carrito".
- `components/cart.js`: Lógica para gestionar el carrito de compras.

---

## **Tecnologías Utilizadas**
- **HTML5**: Estructura semántica.
- **CSS3**: Diseño visual utilizando variables en `:root`.
- **JavaScript Vanilla**: Funcionalidad interactiva y modularidad.

---

## **Instalación y Uso**

1. Clonar o descargar este repositorio.
2. Abrir `index.html` en un navegador para ver la aplicación en acción.
3. Explorar las funcionalidades:
   - Filtrar productos por categoría.
   - Buscar productos por nombre.
   - Ver detalles de un producto en el modal.
   - Añadir productos al carrito.
   - Eliminar productos del carrito.
   - Realizar la compra (si el carrito no está vacío).

---

