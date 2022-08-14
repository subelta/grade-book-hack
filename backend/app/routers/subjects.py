from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.db import schemas, crud
from ..dependencies import get_session

router = APIRouter(
    prefix="/subjects",
    tags=["subjects"],
    responses={404: {"description": "Not found"}}
)


@router.get("/")
def get_subjects(session: Session = Depends(get_session)):
    subjects = crud.Subject.get_subject_list(session)
    if not subjects:
        raise HTTPException(status_code=404, detail="Empty list")
    return subjects


@router.get("/details")
def get_subjects_details(session: Session = Depends(get_session)):
    subjects = crud.Subject.get_subjects_details(session)
    if not subjects:
        raise HTTPException(status_code=404, detail="Empty list")
    return subjects


@router.get("/homeworks", response_model=List[schemas.ViewLesson])
def get_subject_homeworks(classroom: str, session: Session = Depends(get_session)):
    homeworks = crud.Subject.get_subject_homeworks(session, classroom)
    if not homeworks:
        raise HTTPException(status_code=404, detail="Empty list")
    return homeworks


@router.get("/data")
def get_subjects_data(session: Session = Depends(get_session)):
    subjects = crud.Subject.get_subjects_data(session)
    if not subjects:
        raise HTTPException(status_code=404, detail="Empty list")
    return subjects

