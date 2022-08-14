import { useCallback, useEffect, useState } from 'react';
import { VictoryLine, VictoryChart } from 'victory';

import './App.css';
import { COLORS, Endpoints, subjectsDataMock } from '../../constants';

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
                <VictoryChart
                    // scale={{ x: "time" }}
                >
                    {students
                        .find(el => el.name === currentStudent)
                        .subjects
                        .map(subject => (
                            <VictoryLine
                                key={subject.subjectName}
                                data={subject.dates.map(day => (
                                    {
                                        x: day.date,
                                        y: day.grades[day.grades.length - 1] || null
                                    }
                                ))}
                                style={{
                                    data: {
                                        stroke: COLORS[subject.subjectName],
                                        strokeWidth: ({ active }) => active ? 4 : 2
                                    },
                                    labels: { fill: COLORS[subject.subjectName] }
                                }}
                            />
                        ))
                    }
                </VictoryChart>
            </div>
        </div>
    );
}
