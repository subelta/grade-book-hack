import uvicorn
from fastapi import FastAPI

from .routers import students, subjects


app = FastAPI()

app.include_router(students.router)
app.include_router(subjects.router)

if __name__ == "__main__":
    uvicorn.run("app.api:app", host="localhost", port=8080, reload=True)
