import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import ApplicationDetails from './application';

function Application(props) {
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
						to="/applications"
						color="inherit"
					>
						<Icon className="mr-4 text-20">arrow_back</Icon>
						Applications
					</Typography>
					<div className="flex flex-col">
						<Typography variant="h6" className="mt-4">
							Applicat Name
						</Typography>
						<Typography variant="subtitle2">Applied At</Typography>
					</div>
				</FuseAnimateGroup>
			</div>
      <ApplicationDetails />
		</div>
	);
}
export default Application;
