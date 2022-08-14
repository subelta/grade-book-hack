import { Fragment, useCallback, useEffect, useState } from 'react';

import './App.css';
import { SUBJECTS, Endpoints, subjectsDataMock } from '../../constants';
import { StudentChart } from './StudentChart/StudentChart';

export const App = () => {
    const [students, setStudents] = useState(null);
    const [currentStudent, setCurrentStudent] = useState('');
    const [tab, setTab] = useState(null);

    useEffect(() => {
        fetch(Endpoints.SUBJECTS_DATA)
          .then(resp => resp.json())
          .then(data => {
              setStudents(data);
              setCurrentStudent(data[0].user);
          })
    }, []);

    const handleStudentClick = useCallback(e => {
        const student = e.target.getAttribute("data-student");
        setCurrentStudent(student);
    }, []);

    const handleTabClick = useCallback(e => {
        const subject = e.target.getAttribute("data-subject");
        if (tab === subject) {
            setTab(null);
        } else {
            setTab(subject);
            fetch(Endpoints.DETAILS)
                .then(resp => resp.json())
                .then(console.log);
        }
    }, [tab]);

    console.log(students);

    const subjects = Object.keys(SUBJECTS);

    return (
        !!students ? (
            <div className={"container"}>
                <header>
                    <h1 className={"heading"}>
                        11"А"
                    </h1>
                </header>
                <nav className={"tabs"}>
                    {subjects.map(subject => (
                        <button
                            className={`subjectBtn ${tab === subject ? 'selected' : ''}`}
                            key={subject}
                            data-subject={subject}
                            onClick={handleTabClick}
                        >
                            {subject}
                        </button>
                    ))}
                </nav>

                {!tab && (
                    <>
                        <ul className={"sidebar"}>
                            {students.map((student, i) => (
                                <li key={student.user}>
                                    <button
                                        className={`studentBtn ${currentStudent === student.user ? 'selected' : ''}`}
                                        data-student={student.user}
                                        onClick={handleStudentClick}
                                    >
                                        {student.user}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <StudentChart
                            student={students.find(el => el.user === currentStudent)}
                        />
                    </>
                )}

                {!!tab && (
                    <div className={"subjectChartWrapper"}/>
                )}
            </div>
        ) : null
    );
}
