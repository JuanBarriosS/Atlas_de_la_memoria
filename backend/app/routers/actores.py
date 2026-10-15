from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession 
from sqlalchemy.future import select
from app.database import get_db
from typing import List
from app.models.actor import Actor 
from app.schemas.actor import ActorResponse

router = APIRouter(
    prefix="/api/v1/actores",
    tags=["Actores"]
)

@router.get("/", response_model=List[ActorResponse])
async def obtener_actores(db: AsyncSession = Depends(get_db)):
    resultado = await db.execute(select(Actor))
    return resultado.scalars().all()

