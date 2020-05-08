import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DataTable(props) {
	const reports = useSelector(({ reportsReducer }) => reportsReducer.Reports.Reports);

	const openReport = id => {
		props.history.push(`/feedback/${id}/feddbackdetails`);
	};

	return (
		<div className="flex w-full items-center pb-56">
			<TableContainer>
				<Table aria-label="simple table">
					<TableHead className="bg-grey-300 w-full">
						<TableRow>
							<TableCell align="center">Username</TableCell>
							<TableCell align="center">Number</TableCell>
							<TableCell align="center">Status</TableCell>
							<TableCell align="center">Created At</TableCell>
							<TableCell align="center">Updated At</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{reports &&
							reports.map(elm => {
								return (
									<TableRow key={elm.id} hover className="px-24" onClick={() => openReport(elm.id)}>
										<TableCell component="th" scope="row" align="center">
											{elm ? elm.username : '--'}
										</TableCell>
										<TableCell component="th" scope="row" align="center">
											{elm ? elm.number : '--'}
										</TableCell>
										<TableCell align="center">{elm ? elm.status : '--'}</TableCell>
										<TableCell align="center">
											{elm ? moment(elm.createdAt).format('DD/MM/YYYY - HH:MM') : '--'}
										</TableCell>
										<TableCell align="center">
											{elm ? moment(elm.updatedAt).format('DD/MM/YYYY - HH:MM') : '--'}
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
