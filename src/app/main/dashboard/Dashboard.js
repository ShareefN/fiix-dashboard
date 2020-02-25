import React, { useState } from 'react';
import { Typography, Icon } from '@material-ui/core';
import Widget2 from './widgets/Widget2';
import { FuseAnimateGroup } from '@fuse/core/FuseAnimateGroup/FuseAnimateGroup';

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
		<div className="widget flex  sm:w-1/2 md:w-1/4 p-12" key={name}>
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
					FiiX Dashboard <Icon>dashboard</Icon>
				</Typography>
			</div>
			<div className="p-12">
				<div className="flex flex-wrap">
					{[
						getAttribute('12221', 'Users', 'text-blue-800', 'pendingAssesment', click),
						getAttribute('22213', 'Contractors', 'text-red-800', 'pendingIndication', click),
						getAttribute('53', 'Applications', 'text-purple-800', 'pendingPlan', click),
						getAttribute('90', 'Feedbacks', 'text-green-800', 'pendingStatus', click),
						getAttribute('144', 'Categories', 'text-orange-800', 'pendingStatus', click),
						getAttribute('12', 'Test Cases', 'text-pink-800', 'pendingStatus', click),
						getAttribute('23', 'Admins', 'text-green-900', 'pendingStatus', click),
						getAttribute('23', 'Reviews', 'text-orange-700', 'pendingStatus', click),
						getAttribute('33', 'Prohibited', 'text-red-900', 'pendingStatus', click)
					]}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
