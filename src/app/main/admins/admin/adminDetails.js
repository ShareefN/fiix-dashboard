import React from 'react';
import { AppBar, Card, CardContent, Toolbar, Typography } from '@material-ui/core';
import EditAdmin from './Dialogs/editAdmin';
import { useSelector } from 'react-redux';
import moment from 'moment';

function AdminDeatials(props) {
	const admin = useSelector(({ adminReducer }) => adminReducer.Admin.Admin.result);

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
											Admin Details
										</Typography>
									</div>
									<div className="flex w-full justify-end pr-24">
										<EditAdmin />
									</div>
								</div>
							</Toolbar>
						</AppBar>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Name</Typography>
								<Typography>{admin ? admin.name : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Email</Typography>
								<Typography>{admin ? admin.email : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Phone</Typography>
								<Typography>{admin ? admin.phone : '--'}</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Status</Typography>
								<Typography>{admin ? admin.status : '--'}</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Created At</Typography>
								<Typography>
									{admin ? moment(admin.createdAt).format('DD/MM/YYYY - HH:MM') : '--'}
								</Typography>
							</div>
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Updated at</Typography>
								<Typography>
									{admin ? moment(admin.updatedAt).format('DD/MM/YYYY - HH:MM') : '--'}
								</Typography>
							</div>
						</CardContent>
						<CardContent className="flex flex-row pb-0">
							<div className="w-full mb-24">
								<Typography className="font-bold mb-4 text-15">Notes</Typography>
								<Typography>--</Typography>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</React.Fragment>
	);
}
export default AdminDeatials;
