from sqlalchemy import Table, Column, Integer, ForeignKey
from app.database import Base

# Tabla intermedia muchos a muchos
suceso_actor = Table(
    "suceso_actor",
    Base.metadata,
    Column("suceso_id", Integer, ForeignKey("sucesos.id", ondelete="CASCADE"), primary_key=True),
    Column("actor_id", Integer, ForeignKey("actores.id", ondelete="CASCADE"), primary_key=True)
)
