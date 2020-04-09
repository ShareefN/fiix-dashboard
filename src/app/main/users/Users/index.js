import React, { useEffect } from 'react';
import { Typography, Icon } from '@material-ui/core';
import Table from './table';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import reducer from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions/index';

const Users = props => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Actions.fetchUsers());
	}, []);

	return (
		<div>
			<div className="flex flex-row items-center pl-24">
				<Icon className="list-item-icon text-28">insert_chart</Icon>
				<Typography className="py-5 sm:py-24 ml-8" variant="h4">
					Users
				</Typography>
			</div>
			<Table />
		</div>
	);
};

export default withReducer('usersReducer', reducer)(withRouter(Users));
