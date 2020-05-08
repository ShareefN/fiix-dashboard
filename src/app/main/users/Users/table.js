import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import FuseLoading from '@fuse/core/FuseLoading';

function DataTable(props) {
	const users = useSelector(({ usersReducer }) => usersReducer.Users.Users);

	const openUser = id => {
		props.history.push(`/users/${id}/userdetails`);
	};

	if(!users) return <FuseLoading />

	return (
		<div className="flex w-full items-center pb-56">
			<TableContainer>
				<Table aria-label="simple table">
					<TableHead className="bg-grey-300 w-full">
						<TableRow>
							<TableCell align="center">Id</TableCell>
							<TableCell align="center">Username</TableCell>
							<TableCell align="center">Contact</TableCell>
							<TableCell align="center">Status</TableCell>
							<TableCell align="center">Application Status</TableCell>
							<TableCell align="center">Joined At</TableCell>
							<TableCell align="center">Updated At</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="cursor-pointer">
						{users &&
							users.map(user => {
								return (
									<TableRow key={user.id} hover className="px-24" onClick={() => openUser(user.id)}>
										<TableCell component="th" scope="row" align="center">
											{user ? user.id : '--'}
										</TableCell>
										<TableCell component="th" scope="row" align="center">
											{user ? user.username : '--'}
										</TableCell>
										<TableCell align="center">{user ? user.number : '--'}</TableCell>
										<TableCell align="center">{user ? user.status : '--'}</TableCell>
										<TableCell align="center">{user ? user.applicationStatus : '--'}</TableCell>
										<TableCell align="center">
											{moment(user.createdAt).format('DD/MM/YYYY - HH:MM')}
										</TableCell>
										<TableCell align="center">
											{moment(user.updatedAt).format('DD/MM/YYYY - HH:MM')}
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
