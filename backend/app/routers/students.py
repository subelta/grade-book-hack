from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.db import schemas, crud
from ..dependencies import get_session

router = APIRouter(
    prefix="/subject",
    tags=["subject"],
    responses={404: {"description": "Not found"}}
)


@router.get("/", response_model=List[schemas.ViewStudent])
def get_students_data(session: Session = Depends(get_session)):
    students = crud.Student.get_students(session)
    if not students:
        raise HTTPException(status_code=404, detail="Empty list")
    return students


@router.get("/data")
def get_students_data(session: Session = Depends(get_session)):
    classroom = "Физика 11А 11 классы (физ762920"
    data = crud.Student.get_students_data(session, classroom)
    if not data:
        raise HTTPException(status_code=404, detail="Empty list")
    return data
