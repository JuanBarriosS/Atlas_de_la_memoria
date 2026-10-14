from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.database import Base
from app.models.asociacion import suceso_actor

class Actor(Base):
    __tablename__ = "actores"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(150), nullable=False, unique=True)
    tipo = Column(String(50), nullable=False) # Guerrilla, Paramilitares, Estado, Sociedad Civil

    # Usamos el string "Suceso" para evitar importación circular
    sucesos = relationship("Suceso", secondary=suceso_actor, back_populates="actores")
