from pydantic import BaseModel, condecimal
from typing import List


class ViewStudent(BaseModel):
    user_id: str
    grade: float

    class Config:
        orm_mode = True


class ViewStudents(ViewStudent):
    students: List[ViewStudent]

    class Config:
        orm_mode = True
