import React, { useState, useEffect } from 'react';
import { Icon, Typography } from '@material-ui/core';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import reducer from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions/index';
import { Link } from 'react-router-dom';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import ApplicationDetails from './application';
import moment from 'moment';

function Application(props) {
	const dispatch = useDispatch();
	const [id] = useState(props.match.params.applicationId);

	useEffect(() => {
		dispatch(Actions.fetchApplication(id));
	}, []);

	const application = useSelector(({ applicationReducer }) => applicationReducer.Application.Application);

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
							{application.name}
						</Typography>
						<Typography variant="subtitle2">
							Applied At: {moment(application.createdAt).format('DD/MM/YYYY - HH:MM')}
						</Typography>
					</div>
				</FuseAnimateGroup>
			</div>
			<ApplicationDetails />
		</div>
	);
}
export default withReducer('applicationReducer', reducer)(withRouter(Application));
