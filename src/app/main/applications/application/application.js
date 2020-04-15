import React from 'react';
import { AppBar, Card, CardContent, Toolbar, Typography, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import RejectApplication from './Dialog/rejectApplication';
import EditApplication from './Dialog/editApplication';
import ApproveApplication from './Dialog/approveApplication';
import moment from 'moment';

function Application(props) {
	const application = useSelector(({ applicationReducer }) => applicationReducer.Application.Application);

	return (
		<>
			<div className="md:flex max-w-2xl pt-24 pl-24">
				<div className="flex flex-col flex-1 md:pr-32">
					<Card className="w-full mb-16">
						<AppBar position="static" elevation={0}>
							<Toolbar className="pl-16 pr-8">
								<div className="flex items-center w-full">
									<div className="flex w-full">
										<Typography variant="subtitle1" color="inherit" className="flex-1">
											Application Details
										</Typography>
									</div>
									<div className="mr-20 flex flex-row justify-evenly items-center">
										<div className="mr-20">
											<ApproveApplication applicationId={application.id} />
										</div>
										<div className="mr-20">
											<RejectApplication applicationId={application.id} />
										</div>
										<EditApplication />
									</div>
								</div>
							</Toolbar>
						</AppBar>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Applicant Id</Typography>
								<Typography>{application.userId}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Applied At</Typography>
								<Typography>{moment(application.createdAt).format('DD/MM/YYYY - HH:MM')}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Applicant Name</Typography>
								<Typography>{application.name}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Applicat Email</Typography>
								<Typography>{application.email}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Applicant Number</Typography>
								<Typography>{application.number}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Applicant Location</Typography>
								<Typography>{application.location}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Time In</Typography>
								<Typography>{application.timeIn}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Time Out</Typography>
								<Typography>{application.timeOut}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Category</Typography>
								<Typography>{application.category}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">SubCategory</Typography>
								<Typography>--</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Notes</Typography>
								<Typography>--</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Profile Image</Typography>
								<Typography>{application.profileImage}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Id Image</Typography>
								<Typography>{application.identity}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Non-Criminal Image</Typography>
								<Typography>{application.nonCriminal}</Typography>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
}

export default Application;
