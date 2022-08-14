// STFU BITCH YOU MOTHERFUCKING SHIT
// noinspection JSValidateTypes

import { VictoryChart, VictoryLine, VictoryScatter } from 'victory';

import { COLORS } from '../../../constants';

export const SubjectsChart = (props) => {
	const { currentStudent, students } = props;

	return (
		<VictoryChart
			style={{
				parent: { height: "calc(100vh - 20px - 80px - 170px)", width: "100%" }
			}}
		>
			{students
				.find(el => el.user === currentStudent)
				.subjects
				.map(subject => (
					<VictoryLine
						key={subject.subj_name}
						data={subject.dates.map(day => (
							{
								x: new Date(day.date),
								y: day.grade || null
							}
						))}
						style={{
							data: {
								stroke: COLORS[subject.subj_name],
								strokeWidth: ({ active }) => active ? 4 : 2
							},
							labels: { fill: COLORS[subject.subj_name] }
						}}
					/>
				))
			}

			{students
				.find(el => el.user === currentStudent)
				.subjects
				.map(subject => (
					<VictoryScatter
						key={subject.subj_name}
						data={subject.dates.map(day => (
							{
								x: new Date(day.date),
								y: day.grade || null
							}
						))}
						size={3}
						style={{ data: { fill: COLORS[subject.subj_name] } }}
					/>
				))
			}
		</VictoryChart>
	)
}