from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Card(BaseModel):
    name: str
    number: int


@app.post("/card/")
async def verify_card(card: Card):
    print(card)
    return {"card": card.name}


@app.get("/card/")
async def get_verify_card():
    return {"Hello": "World"}


@app.get("/notes/")
async def read_notes():
    return {"Hello": "World"}


@app.post("/notes/")
async def create_note():
    return {"Hello": "World"}
