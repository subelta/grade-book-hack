// STFU BITCH YOU MOTHERFUCKING SHIT
// noinspection JSValidateTypes
import { Fragment, useCallback, useEffect, useState } from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter, VictoryZoomContainer } from 'victory';

import './SubjectsChart.css';
import { COLORS } from '../../../constants';

export const SubjectsChart = (props) => {
	const { currentStudent, students } = props;

	const [zoomDomain, setZoomDomain] = useState();

	const handleZoom = useCallback(domain => {
		setZoomDomain(domain);
	}, [])

	return (
		<div className={"chartWrapper"}>
			<VictoryChart
				style={{
					parent: { height: "calc(100vh - 20px - 80px - 170px)", width: "100%" }
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
									stroke: COLORS[subject.subj_name],
									strokeWidth: ({ active }) => active ? 2 : 1
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
							data={subject.dates
								.filter(day => !!day.grade)
								.map(day => (
									{
										x: new Date(day.date),
										y: day.grade || null
									}
							))}
							size={2}
							style={{ data: { fill: COLORS[subject.subj_name] } }}
						/>
					))
				}
			</VictoryChart>
		</div>
	)
}