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
	const applications = useSelector(({ applicationsReducer }) => applicationsReducer.Applications.Applications);

	const openApplication = id => {
		props.history.push(`/applications/${id}/application`);
	};

	return (
		<div className="flex w-full items-center pb-56">
			<TableContainer>
				<Table aria-label="simple table">
					<TableHead className="bg-grey-300 w-full">
						<TableRow>
							<TableCell align="center">Application Id</TableCell>
							<TableCell align="center">Applicant Name</TableCell>
							<TableCell align="center">Number</TableCell>
							<TableCell align="center">Location</TableCell>
							<TableCell align="center">Category</TableCell>
							<TableCell align="center">Applied At</TableCell>
							<TableCell align="center"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="cursor-pointer">
						{applications &&
							applications.map(elm => {
								return (
									<TableRow
										key={elm.id}
										hover
										className="px-24"
										onClick={() => openApplication(elm.id)}
									>
										<TableCell component="th" scope="row" align="center">
											{elm ? elm.id : '--'}
										</TableCell>
										<TableCell component="th" scope="row" align="center">
											{elm ? elm.name : '--'}
										</TableCell>
										<TableCell align="center">{elm ? elm.number : '--'}</TableCell>
										<TableCell align="center">{elm ? elm.location : '--'}</TableCell>
										<TableCell component="th" scope="row" align="center">
											{elm ? elm.category : '--'}
										</TableCell>
										<TableCell align="center">
											{elm ? moment(elm.createdAt).format('DD/MM/YYYY - HH:MM') : '--'}
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
