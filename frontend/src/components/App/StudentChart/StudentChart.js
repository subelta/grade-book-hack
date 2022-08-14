import { Fragment, useCallback, useEffect, useState } from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter, VictoryZoomContainer } from 'victory';

import './StudentChart.css';
import { SUBJECTS } from '../../../constants';

export const StudentChart = (props) => {
	const { currentStudent, students } = props;

	const [zoomDomain, setZoomDomain] = useState();

	const handleZoom = useCallback(domain => {
		setZoomDomain(domain);
	}, [])

	return (
		<div className={"chartWrapper"}>
			<VictoryChart
				style={{
					parent: { height: "calc(100vh - 40px - 80px - 140px)", width: "100%" }
				}}
				containerComponent={
					<VictoryZoomContainer
						zoomDimension={"x"}
						zoomDomain={zoomDomain}
						onZoomDomainChange={handleZoom}
					/>
				}
			>
				<VictoryAxis
					domain={[1.5, 5.5]}
					dependentAxis
				/>
				<VictoryAxis
					tickFormat={(x) =>
						`${(new Date(x)).toLocaleDateString('de-DE', { year: 'numeric', month: 'numeric', day: 'numeric' })}`
					}
				/>
				{students
					.find(el => el.user === currentStudent)
					.subjects
					.map(subject => (
						<VictoryLine
							key={subject.subj_name}
							data={subject.dates
								.filter(day => !!day.grade)
								.map(day => (
									{
										x: new Date(day.date),
										y: day.grade || null
									}
							))}
							style={{
								data: {
									stroke: SUBJECTS[subject.subj_name],
									strokeWidth: ({ active }) => active ? 2 : 1
								},
								labels: { fill: SUBJECTS[subject.subj_name] }
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
							data={subject.dates
								.filter(day => !!day.grade)
								.map(day => (
									{
										x: new Date(day.date),
										y: day.grade || null
									}
							))}
							size={2}
							style={{ data: { fill: SUBJECTS[subject.subj_name] } }}
						/>
					))
				}
			</VictoryChart>
		</div>
	)
}