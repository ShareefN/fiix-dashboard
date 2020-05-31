import React, { useEffect } from 'react';
import { Typography, Icon } from '@material-ui/core';
import Widget2 from './widgets/Widget2';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import reducer from './store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions/index';
import FuseLoading from '@fuse/core/FuseLoading';

const getData = (count, title, color, state) => {
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
		detail: 'You can show some detailed information about this widget in here.'
	};
};

const getAttribute = (count, name, color, state) => {
	return (
		<div className="widget flex  sm:w-1/2 md:w-1/4 p-12" key={name}>
			<Widget2 widget={getData(count, name, color, state)} />
		</div>
	);
};

function Dashboard(props) {
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(Actions.fetchStats());
	// }, []);

	const stats = useSelector(({ dashboardReducer }) => dashboardReducer.Stats.statistics[0]);

	if (!stats) return <FuseLoading />;

	return (
		<div className="flex flex-col justify-evenly">
			<div className="flex flex-col justify-between flex-1 px-24 pt-24">
				<Typography className="py-5 sm:py-24" variant="h3">
					Dashboard <Icon>dashboard</Icon>
				</Typography>
			</div>
			<div className="p-12">
				<div className="flex flex-wrap">
					{[
						getAttribute(stats ? stats.users : '0', 'Users', 'text-blue-800'),
						getAttribute(stats ? stats.contractors : '0', 'Contractors', 'text-red-800'),
						getAttribute(stats ? stats.applications : '0', 'Applications', 'text-purple-800'),
						getAttribute(stats ? stats.feedbacks : '0', 'Feedbacks', 'text-green-800'),
						getAttribute(stats ? stats.categories : '0', 'Categories', 'text-orange-800'),
						getAttribute(stats ? stats.testCases : '0', 'Test Cases', 'text-pink-800'),
						getAttribute(stats ? stats.admins : '0', 'Admins', 'text-green-900'),
						getAttribute(stats ? stats.reviews : '0', 'Reviews', 'text-orange-700')
					]}
				</div>
			</div>
		</div>
	);
}

export default withReducer('dashboardReducer', reducer)(withRouter(Dashboard));
