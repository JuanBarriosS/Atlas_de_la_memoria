from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List

from app.database import get_db
from app.models.suceso import Suceso
from app.schemas.suceso import SucesoMapaResponse, SucesoDetalleResponse, SucesoCreate

router = APIRouter(
    prefix="/api/v1/sucesos",
    tags=["Sucesos Históricos"]
)

# 1. Endpoint de Carga Ligera: Retorna solo las coordenadas para los pines del mapa
@router.get("/mapa", response_model=List[SucesoMapaResponse])
async def obtener_puntos_mapa(db: AsyncSession = Depends(get_db)):
    # Ejecuta una consulta optimizada trayendo únicamente las columnas necesarias
    resultado = await db.execute(
        select(Suceso.id, Suceso.titulo, Suceso.latitud, Suceso.longitud)
    )
    sucesos = resultado.all()
    return sucesos

# 2. Endpoint de Carga Pesada: Retorna el expediente completo para el panel lateral
@router.get("/{suceso_id}", response_model=SucesoDetalleResponse)
async def obtener_detalle_suceso(suceso_id: int, db: AsyncSession = Depends(get_db)):
    # Busca el suceso específico por su ID único
    resultado = await db.execute(
        select(Suceso).where(Suceso.id == sucesos_id)
    )
    suceso = resultado.scalar_one_or_none()
    
    if not suceso:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"El suceso con ID {suceso_id} no se encuentra en la bitácora."
        )
    return suceso

# 3. Endpoint de inserción (Opcional para pruebas): Para registrar datos desde Swagger
@router.post("/", response_model=SucesoDetalleResponse, status_code=status.HTTP_201_CREATED)
async def crear_suceso(suceso_in: SucesoCreate, db: AsyncSession = Depends(get_db)):
    nuevo_suceso = Suceso(**suceso_in.model_dump())
    db.add(nuevo_suceso)
    await db.flush() # Confirma temporalmente para obtener el ID generado
    return nuevo_suceso
