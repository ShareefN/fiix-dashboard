import React from 'react';
import { AppBar, Card, CardContent, Toolbar, Typography, Button } from '@material-ui/core';
import RejectApplication from './Dialog/rejectApplication';

function Application(props) {
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
								</div>
							</Toolbar>
						</AppBar>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Applicant Name</Typography>
								<Typography>--</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Applicat Email</Typography>
								<Typography>--</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Applicant Number</Typography>
								<Typography>--</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Applicant Location</Typography>
								<Typography>--</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Time In</Typography>
								<Typography>--</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Time Out</Typography>
								<Typography>--</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Category</Typography>
								<Typography>--</Typography>
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
								<Typography>--</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Id Image</Typography>
								<Typography>--</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Non-Criminal Image</Typography>
								<Typography>--</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Applied At</Typography>
								<Typography>--</Typography>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
			<div className=" flex flex-row justify-center mt-24 mb-24">
				<RejectApplication />
				<Button variant="contained" color="primary" className="cursor-pointer ml-24">
					Approve Application
				</Button>
			</div>
		</>
	);
}

export default Application;
