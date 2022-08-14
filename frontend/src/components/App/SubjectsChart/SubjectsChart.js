// STFU BITCH YOU MOTHERFUCKING SHIT
// noinspection JSValidateTypes

import { VictoryChart, VictoryLine, VictoryScatter } from 'victory';

import { COLORS } from '../../../constants';

export const SubjectsChart = (props) => {
	const { currentStudent, students } = props;

	return (
		<VictoryChart>
			{students
				.find(el => el.name === currentStudent)
				.subjects
				.map(subject => (
					<VictoryLine
						key={subject.subjectName}
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

			{students
				.find(el => el.name === currentStudent)
				.subjects
				.map(subject => (
					<VictoryScatter
						key={subject.subjectName}
						data={subject.dates.map(day => (
							{
								x: new Date(day.date),
								y: day.grades[day.grades.length - 1] || null
							}
						))}
						size={3}
						style={{ data: { fill: COLORS[subject.subjectName] } }}
					/>
				))
			}
		</VictoryChart>
	)
}