from sqlalchemy import Column, Integer, String, Date, Numeric, Text
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import relationship
from app.database import Base
from app.models.asociacion import suceso_actor

class Suceso(Base):
    __tablename__ = "sucesos"

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String(255), nullable=False)
    fecha = Column(Date, nullable=False)
    latitud = Column(Numeric(9, 6), nullable=False)   
    longitud = Column(Numeric(9, 6), nullable=False)  
    departamento = Column(String(100), nullable=False)
    municipio = Column(String(100), nullable=False)
    descripcion = Column(Text, nullable=False)
    video_url = Column(String(500), nullable=True)     
    fuentes = Column(JSONB, nullable=False, default=[]) 

    # Usamos el string "Actor" para evitar importación circular
    actores = relationship("Actor", secondary=suceso_actor, back_populates="sucesos", lazy="selectin")
