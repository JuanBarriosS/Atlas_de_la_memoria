from pydantic import BaseModel, ConfigDict

class ActorBase(BaseModel):
    nombre: str
    tipo: str # Guerrilla, Paramilitares, Estado, Sociedad Civil

class ActorCreate(ActorBase):
    pass

class ActorResponse(ActorBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
