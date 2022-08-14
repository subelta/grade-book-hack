import { Fragment, useCallback, useEffect, useState } from 'react';

import './App.css';
import { COLORS, Endpoints, subjectsDataMock } from '../../constants';
import { SubjectsChart } from './SubjectsChart/SubjectsChart';

export const App = () => {

    const [students, setStudents] = useState(null);
    const [currentStudent, setCurrentStudent] = useState('');

    useEffect(() => {
        fetch(Endpoints.SUBJECTS_DATA)
          .then(resp => resp.json())
          .then(data => {
              setStudents(data);
              setCurrentStudent(data[0].user);
          })
    }, [])

    const handleClick = useCallback(e => {
        const student = e.target.getAttribute("data-student");
        setCurrentStudent(student);
    }, [])

    console.log(students);

    return (
        <div className={"container"}>
            <h1 className={"heading"}>
                11"А"
            </h1>

            {!!students && (
                <>
                    <nav className={"tabs"} />
                    <ul className={"sidebar"}>
                        {students.map((student, i) => (
                            <li key={student.user}>
                                <button
                                    className={`studentBtn ${currentStudent === student.user ? 'selected' : ''}`}
                                    data-student={student.user}
                                    onClick={handleClick}
                                >
                                    {student.user}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className={"chartWrapper"}>
                        <SubjectsChart
                            currentStudent={currentStudent}
                            students={students}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
