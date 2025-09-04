# API REST - Películas (Node.js + Express + MongoDB Atlas)

Implementa los módulos: **Género, Director, Productora, Tipo y Media** (películas/series).

## Requisitos
- Node.js 18+
- Una base de datos MongoDB Atlas (o local)
- Postman para probar

## Instalación
```bash
npm install
cp .env.example .env   # o crear .env manualmente
# Edita .env con tu MONGO_URI y PORT
```

## Ejecución
```bash
npm run dev   # con nodemon
# ó
npm start
```

Si todo va bien:
- `http://localhost:4000/` -> `{"message":"API de Películas funcionando 🚀"}`

## Endpoints

### Géneros
- POST `/api/generos`
- GET `/api/generos`
- GET `/api/generos/:id`
- PUT `/api/generos/:id`
- DELETE `/api/generos/:id`

### Directores
- POST `/api/directores`
- GET `/api/directores`
- GET `/api/directores/:id`
- PUT `/api/directores/:id`
- DELETE `/api/directores/:id`

### Productoras
- POST `/api/productoras`
- GET `/api/productoras`
- GET `/api/productoras/:id`
- PUT `/api/productoras/:id`
- DELETE `/api/productoras/:id`

### Tipos
- POST `/api/tipos`
- GET `/api/tipos`
- GET `/api/tipos/:id`
- PUT `/api/tipos/:id`
- DELETE `/api/tipos/:id`

### Media (Películas/Series)
- POST `/api/media`
- GET `/api/media`
- GET `/api/media/:id`
- PUT `/api/media/:id`
- DELETE `/api/media/:id`

> **Reglas en Media:** Al crear o actualizar, el `genero`, `director` y `productora` deben existir y estar en `estado: "Activo"`.

#### Ejemplo JSON para crear `Media`
```json
{
  "serial": "SW-1977",
  "titulo": "Star Wars",
  "sinopsis": "Aventura espacial épica.",
  "url": "https://mi-cdn/unico-star-wars",
  "portada": "https://mi-cdn/portadas/sw.jpg",
  "anioEstreno": 1977,
  "genero": "ObjectId_de_Genero",
  "director": "ObjectId_de_Director",
  "productora": "ObjectId_de_Productora",
  "tipo": "ObjectId_de_Tipo"
}
```



