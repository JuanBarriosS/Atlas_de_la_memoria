import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base

# Leemos la URL desde el entorno o usamos la local de Postgres por defecto
DATABASE_URL = os.getenv(
    "DATABASE_URL", 
    "postgresql+asyncpg://postgres:postgres@localhost:5432/memoria_db"
)

# REVISA ESTA LÍNEA EXACTA: El nombre debe ser 'engine' en minúsculas
engine = create_async_engine(
    DATABASE_URL, 
    echo=True,
    future=True
)

# Fábrica para generar sesiones en cada petición HTTP
AsyncSessionLocal = async_sessionmaker(
    bind=engine, 
    class_=AsyncSession, 
    expire_on_commit=False
)

# REVISA ESTA LÍNEA EXACTA: El nombre debe ser 'Base' con B mayúscula
Base = declarative_base()

# Dependencia para inyectar en los endpoints de FastAPI
async def get_db():
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()
