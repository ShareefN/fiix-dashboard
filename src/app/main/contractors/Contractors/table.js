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

function DataTable(props) {
	const contractors = useSelector(({ contractorsReducer }) => contractorsReducer.Contractors.Contractors);

	const openContractor = id => {
		props.history.push(`/contractors/${id}/contractordetails`);
	};

	return (
		<div className="flex w-full items-center pb-56">
			<TableContainer>
				<Table aria-label="simple table">
					<TableHead className="bg-grey-300 w-full">
						<TableRow>
							<TableCell align="center">Id</TableCell>
							<TableCell align="center">Contractor</TableCell>
							<TableCell align="center">Category</TableCell>
							<TableCell align="center">Phone</TableCell>
							<TableCell align="center">Location</TableCell>
							<TableCell align="center">Status</TableCell>
							<TableCell align="center">Created At</TableCell>
							<TableCell align="center">Updated At</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="cursor-pointer">
						{contractors &&
							contractors.map(contractor => {
								return (
									<TableRow
										key={contractor.id}
										onClick={() => openContractor(contractor.id)}
										hover
										className="px-24"
									>
										<TableCell component="th" scope="row" align="center">
											{contractor ? contractor.id : '--'}
										</TableCell>
										<TableCell component="th" scope="row" align="center">
											{contractor ? contractor.name : '--'}
										</TableCell>
										<TableCell component="th" scope="row" align="center">
											{contractor ? contractor.category : '--'}
										</TableCell>
										<TableCell align="center">{contractor ? contractor.number : '--'}</TableCell>
										<TableCell align="center">{contractor ? contractor.location : '--'}</TableCell>
										<TableCell align="center">{contractor ? contractor.status : '--'}</TableCell>
										<TableCell align="center">
											{contractor
												? moment(contractor.createdAt).format('DD/MM/YYYY - HH:MM')
												: '--'}
										</TableCell>
										<TableCell align="center">
											{contractor
												? moment(contractor.updatedAt).format('DD/MM/YYYY - HH:MM')
												: '--'}
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
