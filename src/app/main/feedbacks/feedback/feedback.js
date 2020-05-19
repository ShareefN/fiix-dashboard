import React, { useEffect, useState } from 'react';
import { Icon, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import reducer from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions/index';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FeedbackDetails from './feedbackDetails';
import moment from 'moment';

function Feedback(props) {
	const dispatch = useDispatch();
	const [id] = useState(props.match.params.feedbackId);

	useEffect(() => {
		dispatch(Actions.fetchReport(id));
	}, []);

	const report = useSelector(({ feedbackReducer }) => feedbackReducer.Report.Report);

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
						to="/feedback"
						color="inherit"
					>
						<Icon className="mr-4 text-20">arrow_back</Icon>
						Feedbacks
					</Typography>
					<div className="flex flex-col">
						<Typography variant="h6" className="mt-4">
							{report.name ? report.name : '--'}
						</Typography>
						<Typography variant="subtitle2">
							{moment(report.createdAt).format('DD/MM/YYY -- HH:MM A')}
						</Typography>
					</div>
				</FuseAnimateGroup>
			</div>
			<FeedbackDetails />
		</div>
	);
}

export default withReducer('feedbackReducer', reducer)(withRouter(Feedback));
