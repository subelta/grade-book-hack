import uvicorn
from fastapi import FastAPI

from .routers import students


app = FastAPI()

app.include_router(students.router)

if __name__ == "__main__":
    uvicorn.run("app.api:app", host="localhost", port=8080, reload=True)
