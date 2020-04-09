import React, { useEffect, useState } from 'react';
import { Icon, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import reducer from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions/index';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AdminDetails from './adminDetails';

function Admin(props) {
	const dispatch = useDispatch();
	const [id] = useState(props.match.params.adminId);

	useEffect(() => {
		dispatch(Actions.fetchAdmin(id));
	}, []);

	const admin = useSelector(({ adminReducer }) => adminReducer.Admin.Admin.result);

	return (
		<div>
			<div className="flex flex-col flex-1 px-24 pt-24 pb-24 bg-grey-300">
				<FuseAnimateGroup
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					<Typography
						className="normal-case flex items-center sm:mb-12"
						component={Link}
						role="button"
						to="/admins"
						color="inherit"
					>
						<Icon className="mr-4 text-20">arrow_back</Icon>
						Admins
					</Typography>
					<div className="flex flex-col">
						{admin && admin.status !== 'active' ? (
							<>
								{' '}
								<Typography variant="h6" className="mt-4 text-red-600">
									{admin && admin.name ? admin.name : '--'}
								</Typography>
								<Typography variant="subtitle2" className="text-red-600">
									{admin && admin.status ? admin.status : '--'}
								</Typography>
							</>
						) : (
							<>
								{' '}
								<Typography variant="h6" className="mt-4">
									{admin && admin.name ? admin.name : '--'}
								</Typography>
								<Typography variant="subtitle2">{admin && admin.role ? admin.role : '--'}</Typography>{' '}
							</>
						)}
					</div>
				</FuseAnimateGroup>
			</div>
			<AdminDetails />
		</div>
	);
}

export default withReducer('adminReducer', reducer)(withRouter(Admin));
