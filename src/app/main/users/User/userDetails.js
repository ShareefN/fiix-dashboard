import React from 'react';
import { AppBar, Card, CardContent, Toolbar, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import DeactivateUser from './Dialogs/deactivateUser';
import ActivateUser from './Dialogs/activateUser';
import moment from 'moment';

function UserDetails(props) {
	const user = useSelector(({ userReducer }) => userReducer.User.User);

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
											User Details
										</Typography>
									</div>
									<div className="flex w-full justify-end pr-24">
										{user && user.status !== 'active' ? (
											<ActivateUser userId={user.id} />
										) : (
											<DeactivateUser userId={user.id} />
										)}
									</div>
								</div>
							</Toolbar>
						</AppBar>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Username</Typography>
								<Typography>{user ? user.username : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Phone</Typography>
								<Typography>{user ? user.number : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Status</Typography>
								<Typography>{user ? user.status : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Application Status</Typography>
								<Typography>
									{user && user.applicationStatus ? user.applicationStatus : '--'}
								</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Notes</Typography>
								<Typography>{user && user.notes ? user.notes : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Email</Typography>
								<Typography>{user ? user.email : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Created at</Typography>
								<Typography>
									{user ? moment(user.createdAt).format('DD/MM/YYYY - HH:MM') : '--'}
								</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Updated At</Typography>
								<Typography>
									{user ? moment(user.updatedAt).format('DD/MM/YYYY - HH:MM') : '--'}
								</Typography>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</React.Fragment>
	);
}

export default UserDetails;
