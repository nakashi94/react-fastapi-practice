from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    max_age=300,
)


@app.get("/")
def read_root():
    return {"hello": "Hello World!!!!"}

@app.get("/users")
def read_users():
    return [
        {"name": "Yamada", "age": 24, "sex": "m"},
        {"name": "Suzuki", "age": 21, "sex": "f"},
        {"name": "Tanaka", "age": 35, "sex": "m"},
    ]

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}
