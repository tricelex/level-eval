from pydantic import BaseModel
import datetime


class Card(BaseModel):
    name: str
    number: int
    cvc: int
    expiry: str


class CardVerification:
    def __init__(self, name: str, number: int, cvc: int, expiry: str) -> None:
        self.name = name
        self.number = number
        self.cvc = cvc
        self.expiry = expiry

    def validate_pan(self):
        length = len(str(self.number))
        return length >= 16 and length <= 19

    def validate_cvv(self):
        length = len(str(self.cvc))
        if length < 3 or length > 4:
            return False
        return bool(str(self.number).startswith(("34", "37"))) if length == 4 else True

    def validate_expiry(self):
        card_format = "%m/%y"
        card_expiry_date = datetime.datetime.strptime(self.expiry, card_format)
        today = datetime.datetime.now()
        return card_expiry_date >= today

    def luhn_checksum(self):
        def digits_of(n):
            return [int(d) for d in str(n)]

        digits = digits_of(self.number)
        odd_digits = digits[-1::-2]
        even_digits = digits[-2::-2]
        checksum = 0
        checksum += sum(odd_digits)
        for d in even_digits:
            checksum += sum(digits_of(d * 2))
        return checksum % 10

    def is_luhn_valid(self):
        return self.luhn_checksum() == 0

    def verify_card(self):
        return False not in [
            self.validate_pan(),
            self.validate_cvv(),
            self.validate_expiry(),
            self.is_luhn_valid(),
        ]
