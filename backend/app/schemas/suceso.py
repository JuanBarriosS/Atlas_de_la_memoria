from datetime import date
from typing import List, Dict, Optional
from decimal import Decimal
from pydantic import BaseModel, Field, ConfigDict
from app.schemas.actor import ActorResponse

class ActorResponse(BaseModel):
    id: int
    nombre: str
    tipo: str

    class Config:
        from_attributes = True

class SucesoBase(BaseModel):
    titulo: str
    fecha: date
    latitud: Decimal = Field(..., max_digits=9, decimal_places=6)
    longitud: Decimal = Field(..., max_digits=9, decimal_places=6)
    departamento: str
    municipio: str

# CLASE REQUERIDA: Esta es la que estaba fallando en la importación
class SucesoMapaResponse(BaseModel):
    id: int
    titulo: str
    latitud: Decimal
    longitud: Decimal
    tipo_representacion: str

    model_config = ConfigDict(from_attributes=True)

class SucesoCreate(SucesoBase):
    descripcion: str
    video_url: Optional[str] = None
    fuentes: List[Dict[str, str]] = []

class SucesoDetalleResponse(BaseModel):
    id: int
    titulo: str
    fecha: date
    latitud: float
    longitud: float
    departamento: str
    municipio: str
    descripcion: str
    video_url: Optional[str] = None
    fuentes: list
    actores: List[ActorResponse] = []  # <-- NUEVO

    class Config:
        from_attributes = True
