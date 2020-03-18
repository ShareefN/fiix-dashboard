import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AdminDetails from './adminDetails';

function Admin(props) {
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
						<Typography variant="h6" className="mt-4">
							Admin Name
						</Typography>
						<Typography variant="subtitle2">Admin / Super Admin</Typography>
						<Typography variant="subtitle2">Admin Status</Typography>
					</div>
				</FuseAnimateGroup>
			</div>
			<AdminDetails />
		</div>
	);
}

export default Admin;
