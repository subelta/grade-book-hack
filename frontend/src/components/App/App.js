import { Fragment, useCallback, useEffect, useState } from 'react';

import './App.css';
import { COLORS, Endpoints, subjectsDataMock } from '../../constants';
import { SubjectsChart } from './SubjectsChart/SubjectsChart';

export const App = () => {

    const [students, setStudents] = useState(subjectsDataMock);
    const [currentStudent, setCurrentStudent] = useState(students[0].name);

    // useEffect(() => {
    //     fetch(Endpoints.SUBJECT_DATA)
    //       .then(resp => resp.json())
    //       .then(console.log)
    // }, [])

    const handleClick = useCallback(e => {
        const student = e.target.getAttribute("data-student");
        setCurrentStudent(student);
    }, [])

    return (
        <div className={"container"}>
            <h1 className={"heading"}>
                11"А"
            </h1>
            <nav className={"tabs"} />
            <ul className={"sidebar"}>
                {students.map((student, i) => (
                    <li key={student.name}>
                        <button
                            className={`studentBtn ${currentStudent === student.name ? 'selected' : ''}`}
                            data-student={student.name}
                            onClick={handleClick}
                        >
                            {student.name}
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
        </div>
    );
}
