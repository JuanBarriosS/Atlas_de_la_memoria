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
origins = [
    "https://atlas-de-la-memoria.vercel.app",  # Tu frontend en Vercel
    "http://localhost:5173",                   # Para desarrollo local
    "http://127.0.0.1:5173",                   # Por si usas 127.0.0.1
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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
        await conn.run_sync(Base.metadata.create_all)
    print("¡Base de datos y tablas sincronizadas correctamente!")

@app.get("/")
async def root():
    return {
        "status": "online",
        "proyecto": "Cartografía de la Memoria",
        "documentacion": "/docs"
    }
