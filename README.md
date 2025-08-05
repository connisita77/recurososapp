# recursossap

Aplicación web para registrar y gestionar tu progreso al ver series, películas y leer libros.

## Funcionalidades

- Añadir, modificar, ver y eliminar recursos.
- Filtros por estado, plataforma y formato.
- Búsqueda por nombre del recurso.

##  Estructura de la Base de Datos (MongoDB)

### Colección: `recursos`

Cada documento contiene:

```json
{
  "nombre": "Nombre del recurso",
  "genero": "Categoría o tipo",
  "plataforma": "Netflix, HBO, Kindle, etc.",
  "estado": "En progreso | Terminado | Pendiente",
  "formato": "Serie | Película | Libro",
  "fecha_terminacion": "YYYY-MM-DD",
  "valoracion": 1-5,
  "resena": "Texto libre"
}
