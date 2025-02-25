import React, { useEffect } from 'react';
import { Icon, Typography } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import reducer from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions/index';
import Table from './table';

function Reviews(prop) {
	const dispatch = useDispatch();
	const reports = useSelector(({ reportsReducer }) => reportsReducer.Reports.Reports);
	useEffect(() => {
		dispatch(Actions.fetchReports());
	}, []);

	return (
		<div>
			<div className="flex flex-row items-center pl-24">
				<Icon className="list-item-icon text-44">feedback</Icon>
				<Typography className="py-5 sm:py-24 ml-8" variant="h4">
					Feedbacks
				</Typography>
			</div>
			<div className="ml-92">Total: {reports && reports.length}</div>
			<Table />
		</div>
	);
}

export default withReducer('reportsReducer', reducer)(withRouter(Reviews));
