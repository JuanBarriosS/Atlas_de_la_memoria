# Bitácora de la Verdad

Bitácora de la Verdad es una plataforma web interactiva de memoria histórica diseñada para geolocalizar, documentar y analizar los sucesos cronológicos del conflicto armado en Colombia. El sistema combina un mapa interactivo en el cliente con un backend asíncrono de alto rendimiento para ofrecer una navegación fluida a través de expedientes históricos, archivos multimedia y fuentes documentales verificadas.

---

## Arquitectura y Decisiones Tecnológicas

El proyecto implementa una arquitectura desacoplada (Client-Server) basada en componentes independientes, facilitando el mantenimiento, el escalado y la realización de pruebas unitarias.

### Backend
* **FastAPI**: Framework web asíncrono de alto rendimiento utilizado para la construcción de la API RESTful.
* **SQLAlchemy**: ORM encargado de la abstracción y gestión de consultas asíncronas mediante patrones de repositorio.
* **Pydantic**: Capa de validación estricta de datos y tipado estructural (Data Transfer Objects).
* **PostgreSQL**: Motor de base de datos relacional elegido por su robustez, soporte de tipos nativos complejos (JSONB) y manejo eficiente de concurrencia.

### Frontend
* **React (Vite)**: Entorno SPA (Single Page Application) optimizado para la renderización eficiente de la interfaz de usuario.
* **React-Leaflet / Leaflet.js**: Librería de cartografía de código abierto utilizada para el renderizado del mapa topográfico de Colombia.
* **Tailwind CSS**: Framework utilitario para el diseño de una interfaz minimalista, optimizada para la lectura de documentos densos.

---

## Patrones de Diseño Implementados

* **Router-Service-Repository**: División estricta de responsabilidades en el backend para aislar la lógica de transporte HTTP, las reglas de negocio y las consultas SQL.
* **Inyección de Dependencias (DI)**: Inyección nativa de sesiones de base de datos en los endpoints, garantizando el aislamiento de recursos y facilitando el desacoplamiento para pruebas (Mocking).
* **Singleton**: Mantenimiento de una única instancia para el pool de conexiones asíncronas con el servidor PostgreSQL.
* **Feature-Driven Architecture**: Organización del frontend basada en características o módulos de pantalla (Mapa, Panel Lateral, Buscador), reduciendo el acoplamiento entre componentes.

---

## Estructura del Proyecto

```text
bitacora-de-la-verdad/
│
├── backend/
│   ├── app/
│   │   ├── main.py                 # Punto de entrada de la API FastAPI
│   │   ├── database.py             # Configuración del motor y sesión asíncrona
│   │   ├── config.py               # Gestión de variables de entorno
│   │   ├── models/                 # Modelos de datos de SQLAlchemy (Tablas)
│   │   ├── schemas/                # Schemas de validación de Pydantic (DTOs)
│   │   └── routers/                # Endpoints de la API organizados por módulos
│   ├── requirements.txt            # Dependencias del servidor Python
│   └── .env.example                # Plantilla de variables de entorno de desarrollo
│
└── frontend/
    ├── src/
    │   ├── components/             # Componentes globales y reutilizables de UI
    │   ├── features/               # Módulos principales (Map, Sidebar, Search)
    │   ├── hooks/                  # Custom hooks para peticiones HTTP
    │   ├── App.jsx                 # Componente raíz
    │   └── main.jsx                # Punto de entrada de React
    ├── package.json                # Dependencias del cliente Javascript
    └── tailwind.config.js          # Configuración de estilos del framework
```

---

## Modelo de Datos (Esquema Relacional)

La base de datos en PostgreSQL gestiona una relación de Muchos a Muchos entre los expedientes históricos y los actores involucrados a través de una tabla de asociación intermedia.

### Tabla: sucesos
* `id` (SERIAL PRIMARY KEY)
* `titulo` (VARCHAR)
* `fecha` (DATE)
* `latitud` (DECIMAL)
* `longitud` (DECIMAL)
* `departamento` (VARCHAR)
* `municipio` (VARCHAR)
* `descripcion` (TEXT)
* `video_url` (VARCHAR)
* `fuentes` (JSONB) - Almacena colecciones dinámicas de enlaces institucionales (CNMH, Comisión de la Verdad).

### Tabla: actores
* `id` (SERIAL PRIMARY KEY)
* `nombre` (VARCHAR UNIQUE)
* `tipo` (VARCHAR) - Categorías: Guerrilla, Paramilitares, Agentes del Estado, Sociedad Civil.

---

## Endpoints Principales de la API

### Carga Ligera del Mapa
* **`GET /api/v1/sucesos/mapa`**
  * **Descripción**: Retorna exclusivamente los metadatos geográficos esenciales (`id`, `latitud`, `longitud`, `titulo`). Optimizado para renderizar cientos de marcadores en el mapa de React en milisegundos sin sobrecargar el ancho de banda.

### Detalle de Expediente
* **`GET /api/v1/sucesos/{id}`**
  * **Descripción**: Retorna la totalidad de la información estructurada de un suceso específico, incluyendo la relación con sus actores, el enlace incrustable de video y la matriz de fuentes documentales. Se dispara únicamente cuando el usuario interactúa con un pin en el mapa.

---

## Requisitos Previos

Antes de iniciar la instalación, asegúrese de tener configurados los siguientes entornos en su sistema local:
* Python 3.10 o superior
* Node.js 18.0 o superior
* PostgreSQL 14 o superior

---

## Configuración del Entorno de Desarrollo

### 1. Clonar el repositorio
```bash
git clone https://github.com
cd bitacora-de-la-verdad
```

### 2. Configurar el Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
```
Configure su archivo `.env` en la raíz de la carpeta `backend` con sus credenciales locales de PostgreSQL:
```text
DATABASE_URL=postgresql+asyncpg://usuario:contraseña@localhost:5432/bitacora_verdad
```
Ejecutar el servidor de desarrollo:
```bash
uvicorn app.main:app --reload
```

### 3. Configurar el Frontend
```bash
cd ../frontend
npm install
npm run dev
```

---

## Licencia y Fuentes Informativas

Los datos y relatos mapeados en esta plataforma tienen fines de divulgación académica y desarrollo técnico. Las fuentes principales provienen del Centro Nacional de Memoria Histórica (CNMH), la Comisión de la Verdad de Colombia y sentencias judiciales de acceso público.
