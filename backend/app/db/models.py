import datetime as dt
from sqlalchemy import (
    Column, ForeignKey, Text,
    Integer, String, DateTime, Boolean, BIGINT, Date
)

from app.db import Base


class Grade(Base):
    __tablename__ = "grades"

    id = Column(BIGINT, primary_key=True, index=True)
    classroom = Column(String(64))
    user_id = Column(String(128), index=True)
    date = Column(Date)
    grade = Column(Integer)
    is_absent = Column(Boolean, default=False)
    created_at = Column(DateTime, default=dt.datetime.utcnow)


class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(BIGINT, primary_key=True, index=True)
    classroom = Column(String(64))
    date = Column(Date, index=True)
    theme = Column(Text)
    home_work = Column(Text)
    created_at = Column(DateTime, default=dt.datetime.utcnow)
