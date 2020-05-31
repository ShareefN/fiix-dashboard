import React, { useEffect } from 'react';
import { Typography, Icon } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import reducer from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions/index';
import CreateAdmin from './Dialogs/CreateAdmin';
import Table from './table';

function Admins(props) {
	const dispatch = useDispatch();
	const user = useSelector(({ auth }) => auth.user);
	const admins = useSelector(({ adminsReducer }) => adminsReducer.Admins.Admins);

	useEffect(() => {
		dispatch(Actions.fetchAdmins());
	}, []);

	return (
		<div>
			<div className="flex flex-row justify-between items-center">
				<div className="flex flex-row items-center pl-24">
					<Icon className="list-item-icon text-22">supervisor_account</Icon>
					<Typography className="py-5 sm:py-20 ml-8" variant="h5">
						Admins
					</Typography>
				</div>
				<div className="mr-48">{user && user.role === 'super' ? <CreateAdmin /> : ''}</div>
			</div>
			<Typography className="ml-92">
				Total: {admins && admins.length}
			</Typography>
			<Table />
		</div>
	);
}

export default withReducer('adminsReducer', reducer)(withRouter(Admins));
