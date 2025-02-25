import React, { useEffect } from 'react';
import { Typography, Icon } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import reducer from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions/index';
import Table from './table';

function Applications(props) {
	const dispatch = useDispatch();
	const applications = useSelector(({ applicationsReducer }) => applicationsReducer.Applications.Applications);

	useEffect(() => {
		dispatch(Actions.fetchApplications());
	}, []);

	return (
		<div>
			<div className="flex flex-row items-center pl-24">
				<Icon className="list-item-icon text-22">insert_chart</Icon>
				<Typography className="py-5 sm:py-24 ml-8" variant="h5">
					Applications
				</Typography>
			</div>
			<Typography className="ml-92">Total: {applications && applications.length}</Typography>
			<Table />
		</div>
	);
}

export default withReducer('applicationsReducer', reducer)(withRouter(Applications));
