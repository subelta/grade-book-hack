from sqlalchemy.orm import Session

from . import models, schemas


class Student:
    @staticmethod
    def get_students(session: Session):
        students = session.query(models.Grade.user_id).distinct(models.Grade.user_id).all()
        return students
