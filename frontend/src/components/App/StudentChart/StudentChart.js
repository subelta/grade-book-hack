import { Fragment, useCallback, useEffect, useState } from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter, VictoryZoomContainer } from 'victory';

import './StudentChart.css';
import { SUBJECTS } from '../../../constants';

export const StudentChart = (props) => {
	const { student } = props;

	const subjects = student.subjects.map(el => el.subj_name);

	const [zoomDomain, setZoomDomain] = useState();
	const [selectedSubjects, setSelectedSubjects] = useState(subjects)

	const handleZoom = useCallback(domain => {
		setZoomDomain(domain);
	}, []);

	const handleSelectSubj = useCallback(e => {
		const subject = e.target.getAttribute("data-legend-subject");

		const found = selectedSubjects.indexOf(subject);
		if (found !== -1) {
			const copy = selectedSubjects.slice();
			copy.splice(found, 1);
			setSelectedSubjects(copy);
		} else {
			const newArr = selectedSubjects.slice();
			newArr.push(subject);
			setSelectedSubjects(newArr);
		}
	}, [selectedSubjects]);

	return (
		<div className={"chartWrapper"}>
			<div className={"legend"}>
				{subjects.map(subj => (
					<button
						className={`legendElement ${selectedSubjects.includes(subj) ? 'selected' : ''}`}
						key={subj}
						data-legend-subject={subj}
						onClick={handleSelectSubj}
					>
						<div className={"colorBox"} data-legend-subject={subj} style={{ background: SUBJECTS[subj] }}/>
						<div className={"text"} data-legend-subject={subj}>
							{subj}
						</div>
					</button>
				))}
			</div>
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
				{student
					.subjects
					.filter(subject => selectedSubjects.includes(subject.subj_name))
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

				{student
					.subjects
					.filter(subject => selectedSubjects.includes(subject.subj_name))
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