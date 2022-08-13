from sqlalchemy.orm import Session
from sqlalchemy import func

from . import models, schemas


class Student:
    @staticmethod
    def get_students(session: Session, classroom=None):
        students = session.query(models.Grade.user_id, func.AVG(models.Grade.grade).label("grade")).group_by(models.Grade.user_id).all()
        return [{"user_id": s.user_id, "grade": round(float(s.grade or 0), 2)} for s in students]

    @staticmethod
    def get_students_data(session: Session, classroom=None):
        grades = session.query(models.Grade)
        if classroom:
            grades = grades.filter(models.Grade.classroom == classroom)
        grades = grades.all()

        themes = session.query(models.Lesson)
        if classroom:
            themes = themes.filter(
                models.Lesson.classroom == classroom
            )
        themes = themes.all()
        theme_dict = dict([(theme.date, theme.theme) for theme in themes])
        _data = {}
        for d in grades:
            user_id = d.user_id
            date = d.date
            grade = d.grade
            is_absent = d.is_absent
            if user_id not in _data:
                _data[user_id] = dict()
            if date not in _data[user_id]:
                _data[user_id][date] = [(grade, is_absent, theme_dict.get(date))]
            else:
                _data[user_id][date].append((grade, is_absent, theme_dict.get(date)))

        data = []
        for k, vs in _data.items():
            user_id = k
            dates = []
            for _k, _v in vs.items():
                dates.append({
                    "date": _k,
                    "grades": [v[0] for v in _v if v[0]],
                    "absent": _v[0][1],
                    "theme": _v[0][2]
                })

            data.append({
                "user_id": user_id,
                "dates": dates
            })
        return data




