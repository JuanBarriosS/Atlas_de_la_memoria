from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.models import Suceso, Actor, suceso_actor 
from app.routers import expedientes, actores

app = FastAPI(
    title="Bitacora de la verdad - API",
    description="Backend asíncrono para el mapa interactivo del conflicto armado",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*", "https://onrender.com","https://atlas-de-la-memoria.vercel.app"], # origenes permitidos (front)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(actores.router)
app.include_router(expedientes.router)

# evento de inicio de FastAPI: Crea las tablas de forma asíncrona en PostgreSQL
@app.on_event("startup")
async def startup_event():
    async with engine.begin() as conn:
        # Lee todos los modelos que heredan de Base y crea las tablas si no existen
        await conn.run_sync(Base.metadata.create_all)
    print("¡Base de datos y tablas sincronizadas correctamente!")

# Endpoint de prueba 
@app.get("/")
async def root():
    return {
        "status": "online",
        "proyecto": "Cartografía de la Memoria",
        "documentacion": "/docs"
    }
