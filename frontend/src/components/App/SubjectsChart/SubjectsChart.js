// STFU BITCH YOU MOTHERFUCKING SHIT
// noinspection JSValidateTypes

import { Fragment } from 'react';
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory';

import { COLORS } from '../../../constants';
import { ScatterLine } from './ScatterLine/ScatterLine';

export const SubjectsChart = (props) => {
	const { currentStudent, students } = props;

	return (
		<VictoryChart>
			{students
				.find(el => el.name === currentStudent)
				.subjects
				.map(subject => (
					<ScatterLine
						key={subject.subjectName}
						subject={subject}
						data={subject.dates.map(day => (
							{
								x: new Date(day.date),
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
	)
}