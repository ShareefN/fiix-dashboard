import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import moment from 'moment';

function DataTable(props) {
	const admins = useSelector(({ adminsReducer }) => adminsReducer.Admins.Admins);

	const openAdmin = adminId => {
		props.history.push(`/admins/${adminId}/admindetails`);
	};

	if (!admins) return <FuseLoading />;

	return (
		<div className="flex w-full items-center pb-56">
			<TableContainer>
				<Table aria-label="simple table">
					<TableHead className="bg-grey-300 w-full">
						<TableRow>
							<TableCell align="center">Id</TableCell>
							<TableCell align="center">Admin</TableCell>
							<TableCell align="center">Role</TableCell>
							<TableCell align="center">Status</TableCell>
							<TableCell align="center">Created At</TableCell>
							<TableCell align="center">Updated At</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="cursor-pointer">
						{admins &&
							admins.map(admin => {
								return (
									<TableRow
										key={admin.id}
										hover
										className="px-24"
										onClick={() => openAdmin(admin.id)}
									>
										<TableCell component="th" scope="row" align="center">
											{admin.id}
										</TableCell>
										<TableCell component="th" scope="row" align="center">
											{admin.name}
										</TableCell>
										<TableCell component="th" scope="row" align="center">
											{admin.role}
										</TableCell>
										<TableCell align="center">{admin.status}</TableCell>
										<TableCell align="center">
											{moment(admin.createdAt).format('DD/MM/YYYY - HH:MM')}
										</TableCell>
										<TableCell align="center">
											{moment(admin.updatedAT).format('DD/MM/YYYY - HH:MM')}
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default withRouter(DataTable);
