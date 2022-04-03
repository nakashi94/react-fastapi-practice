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

users = [
        {"id": 1, "name": "Yamada", "age": 24, "sex": "M"},
        {"id": 2, "name": "Suzuki", "age": 21, "sex": "F"},
        {"id": 3, "name": "Tanaka", "age": 35, "sex": "M"},
    ]


@app.get("/")
def read_root():
    return {"hello": "Hello World!!!!"}

@app.get("/users")
def read_users():
    return users

@app.get("/users/{user_id}")
def read_item(user_id: str):
    return users[int(user_id) - 1]
