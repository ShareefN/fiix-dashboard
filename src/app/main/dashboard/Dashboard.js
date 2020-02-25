import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import Widget2 from './widgets/Widget2';

const getData = (count, title, color, state, click) => {
	return {
		title: <br></br>,
		textColor: color,
		data: {
			label: 'Cases',
			count: count,
			extra: {
				label: title
			},
			state: state
		},
		detail: 'You can show some detailed information about this widget in here.',
		click: click
	};
};

const getAttribute = (count, name, color, state, click) => {
	return (
		<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12" key={name}>
			<Widget2 widget={getData(count, name, color, state, click)} />
		</div>
	);
};

function Dashboard(props) {
	const click = state => {
		alert(state);
	};

	return (
		<div className="flex flex-col justify-evenly">
			<div className="flex flex-col justify-between flex-1 px-24 pt-24">
				<Typography className="py-5 sm:py-24" variant="h3">
					Welcome back, Demo User!
				</Typography>
			</div>
			<div className="flex w-full items-center pt-24 px-24">
				{[
					getAttribute('3889', 'Pending Assessment', 'text-blue-600', 'pendingAssesment', click),
					getAttribute('2213', 'Pending Indication', 'text-red-800', 'pendingIndication', click),
					getAttribute('1290', 'Pending Plan', 'text-yellow-500', 'pendingPlan', click),
					getAttribute('2144', 'Pending Status', 'text-green-200', 'pendingStatus', click),
				]}
			</div>
		</div>
	);
}

export default Dashboard;
