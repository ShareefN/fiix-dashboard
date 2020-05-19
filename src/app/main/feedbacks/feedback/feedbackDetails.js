import React from 'react';
import { AppBar, Card, CardContent, Toolbar, Typography, Tooltip } from '@material-ui/core';
import { useSelector } from 'react-redux';
import moment from 'moment';
import EditReport from './Dialogs/EditFeedback';
import { Icon } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

function FeedbackDetails(props) {
	const report = useSelector(({ feedbackReducer }) => feedbackReducer.Report.Report);

	const openUser = id => {
		props.history.push(`/users/${id}/userdetails`);
	};

	return (
		<React.Fragment>
			<div className="md:flex max-w-2xl pt-24 pl-24">
				<div className="flex flex-col flex-1 md:pr-32">
					<Card className="w-full mb-16">
						<AppBar position="static" elevation={0}>
							<Toolbar className="pl-16 pr-8">
								<div className="flex items-center w-full">
									<div className="flex w-full">
										<Typography variant="subtitle1" color="inherit" className="flex-1">
											Feedback Details
										</Typography>
									</div>
									<div className="flex w-full justify-end pr-24 items-center">
										<Tooltip title="View User">
											<Icon
												onClick={() => openUser(report.userId)}
												className="mr-24 cursor-pointer"
											>
												pageview
											</Icon>
										</Tooltip>
										<EditReport reportId={report && report.id} />
									</div>
								</div>
							</Toolbar>
						</AppBar>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Title</Typography>
								<Typography>{report && report.userId ? 'User' : 'Contractor'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Name</Typography>
								<Typography>{report.name ? report.name : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">User Number</Typography>
								<Typography>{report.number ? report.number : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">status</Typography>
								<Typography>{report.status ? report.status : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Admin Name</Typography>
								<Typography>{report.adminName ? report.adminName : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Report</Typography>
								<Typography>{report.report ? report.report : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Notes</Typography>
								<Typography>{report.notes ? report.notes : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Created At</Typography>
								<Typography>{moment(report.createdAt).format('DD/MM/YYY -- HH:MM A')}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Updated At</Typography>
								<Typography>{moment(report.updatedAt).format('DD/MM/YYY -- HH:MM A')}</Typography>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</React.Fragment>
	);
}
export default withRouter(FeedbackDetails);
