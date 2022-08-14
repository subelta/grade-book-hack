import { Fragment } from 'react';
import { VictoryLine, VictoryScatter } from 'victory';

import { COLORS } from '../../../../constants';

export const ScatterLine = props => {
	const { subject } = props;

	return (
		<Fragment>
			<VictoryLine {...props}/>
			<VictoryScatter
				{...props}
				size={3}
				style={{ data: { fill: COLORS[subject.subjectName] } }}
			/>
		</Fragment>
	)

};