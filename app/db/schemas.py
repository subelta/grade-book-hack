from pydantic import BaseModel, EmailStr
from typing import List


class ViewStudent(BaseModel):
    user_id: str

    class Config:
        orm_mode = True


class ViewStudents(ViewStudent):
    students: List[ViewStudent]

    class Config:
        orm_mode = True
