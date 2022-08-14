from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.utils import Card, CardVerification


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


@app.post("/card/")
async def verify_card(card: Card):
    card_data = CardVerification(card.name, card.number, card.cvc, card.expiry)

    pan = card_data.validate_pan()
    cvv_status = card_data.validate_cvv()
    expired = card_data.validate_expiry()
    luhn = card_data.is_luhn_valid()

    status = card_data.verify_card()
    return {
        "status": status,
        "expired": expired,
        "cvv_status": cvv_status,
        "pan": pan,
        "luhn": luhn,
    }


@app.get("/card/")
async def get_verify_card():
    return {"Hello": "World"}
