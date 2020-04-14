import React from 'react';
import { AppBar, Card, CardContent, Toolbar, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import DeactiveContractor from './Dialogs/deactivateContractor';
import ActivateContractor from './Dialogs/activateContractor';
import moment from 'moment';
import FuseLoading from '@fuse/core/FuseLoading';

function ContractorDetails(props) {
	const contractor = useSelector(({ contractorReducer }) => contractorReducer.Contractor.Contractor);
	const user = useSelector(({ auth }) => auth.user);

	if (!contractor) return <FuseLoading />;

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
											Contractor Details
										</Typography>
									</div>
									<div className="flex w-full justify-end pr-24">
										{contractor && contractor.status === 'active' ? (
											<DeactiveContractor contractorId={contractor.id} />
										) : user && user.role === 'super' ? (
											<ActivateContractor contractorId={contractor.id} />
										) : (
											''
										)}
									</div>
								</div>
							</Toolbar>
						</AppBar>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Name</Typography>
								<Typography>{contractor ? contractor.name : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Email</Typography>
								<Typography>{contractor ? contractor.email : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Phone</Typography>
								<Typography>{contractor ? contractor.number : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Location</Typography>
								<Typography>{contractor ? contractor.location : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Time In</Typography>
								<Typography>{contractor ? contractor.timeIn : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Time Out</Typography>
								<Typography>{contractor ? contractor.timeOut : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Category</Typography>
								<Typography>{contractor ? contractor.category : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Rating</Typography>
								<Typography>{contractor ? contractor.rating : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Notes</Typography>
								<Typography>{contractor ? contractor.notes : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Contractor Status</Typography>
								<Typography>{contractor ? contractor.status : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Id Image</Typography>
								<Typography>{contractor ? contractor.identity : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Non-Criminal Image</Typography>
								<Typography>{contractor ? contractor.nonCriminal : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Created At</Typography>
								<Typography>
									{contractor ? moment(contractor.createdAt).format('DD/MM/YYY - HH:MM') : '--'}
								</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Updated At</Typography>
								<Typography>
									{contractor ? moment(contractor.updatedAt).format('DD/MM/YYY - HH:MM') : '--'}
								</Typography>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ContractorDetails;
