import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OpenInNew from '@material-ui/icons/OpenInNew';
import Tooltip from '@material-ui/core/Tooltip';
import TablePagination from '@material-ui/core/TablePagination';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

function DataTable(props) {
	const [rowsPerPage, setRowsPerPage] = React.useState(50);
	const [page, setPage] = React.useState(0);

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const openApplication = id => {
		props.history.push(`/applications/${id}/application`);
	};

	return (
		<div className="flex w-full items-center pb-56">
			<TableContainer>
				<Table aria-label="simple table">
					<TableHead className="bg-grey-300 w-full">
						<TableRow>
							<TableCell></TableCell>
							<TableCell align="center">Id</TableCell>
							<TableCell align="center">Applicant Name</TableCell>
							<TableCell align="center">Category</TableCell>
							<TableCell align="center">Number</TableCell>
							<TableCell align="center">Applied At</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="cursor-pointer">
						<TableRow
							key={Math.random()}
							hover
							className="px-24"
							onClick={() => openApplication(Math.random())}
						>
							<TableCell className="w-48 pl-4 sm:pl-12">
								<Tooltip title="Open new tab">
									<OpenInNew />
								</Tooltip>
							</TableCell>
							<TableCell component="th" scope="row" align="center">
								8
							</TableCell>
							<TableCell component="th" scope="row" align="center">
								Mustafa AbuGhazal
							</TableCell>
							<TableCell component="th" scope="row" align="center">
								Mechanic
							</TableCell>
							<TableCell align="center">0798829834</TableCell>
							<TableCell align="center">18-2-2020 - 18:22</TableCell>
						</TableRow>
					</TableBody>
				</Table>
				<TablePagination
					rowsPerPageOptions={[100]}
					component="div"
					count={5}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</TableContainer>
		</div>
	);
}

export default withRouter(DataTable);
