from pydantic import BaseModel, condecimal
from typing import List
import datetime as dt


class ViewStudent(BaseModel):
    user_id: str
    grade: float

    class Config:
        orm_mode = True


class ViewStudents(ViewStudent):
    students: List[ViewStudent]

    class Config:
        orm_mode = True


class ViewLesson(BaseModel):
    date: dt.date
    theme: str
    home_work: str

    class Config:
        orm_mode = True


class ViewLessons(ViewLesson):
    lessons: List[ViewLesson]
