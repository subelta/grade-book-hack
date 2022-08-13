from sqlalchemy.orm import Session
from sqlalchemy import func

from . import models, schemas


class Student:
    @staticmethod
    def get_students(session: Session):
        students = session.query(models.Grade.user_id, func.AVG(models.Grade.grade).label("grade")).group_by(models.Grade.user_id).all()
        return [{"user_id": s.user_id, "grade": round(float(s.grade or 0), 2)} for s in students]
