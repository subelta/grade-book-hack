from sqlalchemy.orm import Session
from sqlalchemy import func, text

from . import models, schemas


class Student:
    @staticmethod
    def get_student_list(session: Session):
        students = session.query(models.Grade.user_id).distinct(models.Grade.user_id).all()
        return [s[0] for s in students]

    @staticmethod
    def get_students(session: Session, classroom=None):
        students = session.query(models.Grade.user_id, func.AVG(models.Grade.grade).label("grade")).group_by(models.Grade.user_id).all()
        return [{"user_id": s.user_id, "grade": round(float(s.grade or 0), 2)} for s in students]

    @staticmethod
    def get_student_subject_data(session: Session, user_id: str, classroom: str):
        grades = session.query(models.Grade).filter(
            models.Grade.user_id == user_id,
            models.Grade.classroom == classroom
        ).all()
        themes = session.query(models.Lesson).filter(
            models.Lesson.classroom == classroom
        ).all()
        theme_dict = dict([(theme.date, theme.theme) for theme in themes])

        dates = dict()

        for grade in grades:
            date = grade.date
            if date in dates:
                dates[date].append((grade.grade, grade.is_absent, theme_dict.get(date, "")))
            else:
                dates[date] = [(grade.grade, grade.is_absent, theme_dict.get(date, ""))]

        data = []
        for k, vs in dates.items():
            data.append({
                "date": k,
                "grade": vs[0][0],
                "absent": vs[0][1]
            })
        return data

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
                    "grade": _v[0][0],
                    "absent": _v[0][1],
                    "theme": _v[0][2]
                })

            data.append({
                "user_id": user_id,
                "dates": dates
            })
        return data


class Subject:
    @staticmethod
    def get_subject_list(session: Session):
        subjects = session.query(models.Lesson.classroom).distinct(models.Lesson.classroom).all()
        return [s[0] for s in subjects]

    @staticmethod
    def get_subject_homeworks(session: Session, classroom: str):
        homeworks = session.query(models.Lesson).filter(
            models.Lesson.classroom == classroom
        ).all()
        return homeworks

    @staticmethod
    def get_subjects_details(session: Session):
        subjects = Subject.get_subject_list(session)
        data = dict()
        for subject in subjects:
            data[subject] = Subject.get_subject_homeworks(session, subject)
        return data

    @staticmethod
    def get_student_subjects(session: Session, user_id: str):
        student_subjects = session.query(models.Grade.classroom).filter(
            models.Grade.user_id == user_id
        ).distinct(models.Grade.classroom).all()
        return [s[0] for s in student_subjects]

    @staticmethod
    def get_subjects_data(session: Session):
        students = Student.get_student_list(session)
        data = []
        for student in students:
            subjects = Subject.get_student_subjects(session, student)
            student_data = []
            for subject in subjects:
                student_data.append({
                    "subj_name": subject,
                    "dates": Student.get_student_subject_data(session, student, subject)
                })
            data.append({
                "user": student,
                "subjects": student_data
            })
        return data

    @staticmethod
    def get_subject_recommendations(session: Session, subject):
        """ Return list of themes with less grade.
        """
        themes = session.query(models.Grade.date, func.COUNT(models.Grade.id).label("count")).filter(
            models.Grade.classroom == subject,
            models.Grade.grade <= 3
        ).group_by(models.Grade.date).order_by(text("count desc")).all()
        lessons = session.query(models.Lesson.date, models.Lesson.theme).filter(
            models.Lesson.classroom == subject,
        ).order_by(models.Lesson.date).all()
        _dates = [l.date for l in lessons]
        _themes = [l.theme for l in lessons]
        lessons_dict = dict(zip(_dates[1:], _themes[:-1]))

        recs = []
        for theme in themes:
            if theme.date in lessons_dict:
                recs.append({
                    "date": theme.date,
                    "theme": lessons_dict[theme.date],
                    "score": theme.count
                })
                if len(recs) == 5:
                    return recs
        return recs


class TgUser:
    @staticmethod
    def add_user(session: Session, chat_id, username, first_name, last_name, is_bot, language_code):
        user = session.query(models.TgUser).filter(
            models.TgUser.chat_id == chat_id
        ).first()
        if user:
            return user
        user = models.TgUser(
            chat_id=chat_id,
            first_name=first_name,
            username=username,
            is_bot=is_bot,
            last_name=last_name,
            language_code=language_code
        )
        session.add(user)
        session.commit()
        return user

    @staticmethod
    def add_poll(session: Session, chat_id, grade, comment):
        event = session.query(models.Event).order_by(models.Event.id.desc()).first()
        if not event:
            return
        poll = models.EventPoll(
            tg_id=chat_id,
            event_id=event.id,
            poll=grade,
            text=comment
        )
        session.add(poll)
        session.commit()
        return poll


class Event:
    @staticmethod
    def add_event(session: Session, title: str):
        event = models.Event(
            title=title,
            description=None
        )
        session.add(event)
        session.commit()
        return event

    @staticmethod
    def get_events_polls(session: Session):
        pols = session.query(models.EventPoll).all()
        events = session.query(models.Event.id, models.Event.title).all()
        events_dict = dict([(e.id, e.title) for e in events])

        data = dict()
        for poll in pols:
            event = events_dict[poll.event_id]
            if event in data:
                if poll.poll:
                    data[event]["poll"].append(poll.poll)
                if poll.text:
                    data[event]["text"].append(poll.text)
            else:
                data[event] = {"poll": [], "text": []}
        return data
