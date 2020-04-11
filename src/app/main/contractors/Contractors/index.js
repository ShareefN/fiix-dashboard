import React, { useEffect } from 'react';
import { Typography, Icon } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import reducer from '../store/reducers';
import { useDispatch } from 'react-redux';
import * as Actions from '../store/actions/index';
import Table from './table';

const Contractors = props => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Actions.fetchContractors());
	}, []);

	return (
		<div>
			<div className="flex flex-row items-center pl-24">
				<Icon className="list-item-icon text-22">insert_chart</Icon>
				<Typography className="py-5 sm:py-24 ml-8" variant="h5">
					Contractors
				</Typography>
			</div>
			<Table />
		</div>
	);
};

export default withReducer('contractorsReducer', reducer)(withRouter(Contractors));
