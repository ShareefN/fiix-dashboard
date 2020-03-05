import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import UserDetails from './userDetails';

function User(props) {
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
						to="/users"
						color="inherit"
					>
						<Icon className="mr-4 text-20">arrow_back</Icon>
						Users
					</Typography>
					<div className="flex flex-row">
						<div className="flex flex-col pl-24 w-auto">
							<Typography variant="h6" className="mt-4">
								User Name
							</Typography>
							<Typography variant="subtitle2">User Status</Typography>
						</div>
					</div>
				</FuseAnimateGroup>
			</div>
			<UserDetails />
		</div>
	);
}

export default User;
