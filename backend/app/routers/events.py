from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.db import schemas, crud
from ..dependencies import get_session

router = APIRouter(
    prefix="/events",
    tags=["events"],
    responses={404: {"description": "Not found"}}
)


@router.post("/")
def create_event(event: str, session: Session = Depends(get_session)):
    event = crud.Event.add_event(session, event)
    return True


@router.get("/")
def get_events_polls(session: Session = Depends(get_session)):
    events = crud.Event.get_events_polls(session)
    if not events:
        raise HTTPException(status_code=404, detail="Empty list")
    return events




