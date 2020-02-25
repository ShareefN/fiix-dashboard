import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OpenInNew from '@material-ui/icons/OpenInNew';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

function createData(id, name, country, status, createdAt, admin) {
	return { id, name, country, status, createdAt, admin };
}

const rows = [
	createData(12, 'Shareef', 'United Arab Emirates', 'Active', '19-11-2019', 'Zaid'),
	createData(72, 'Ali', 'Jordan', 'Pending Indication', '19-11-2019', 'Mohammad'),
	createData(91, 'Ibrahim', 'Saudi Arabia', 'Pending Approval', '19-11-2019', 'Kamal'),
	createData(44, 'Hanan', 'Lebanon', 'Active', '19-11-2019', '-'),
	createData(62, 'Abdullah', 'Qatar', 'Active', '19-11-2019', '-'),
	createData(88, 'Jessie', 'United Arab Emirates', 'Active', '19-11-2019', '-')
];

export default function DataTable() {
	const [rowsPerPage, setRowsPerPage] = React.useState(50);
	const [page, setPage] = React.useState(0);

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	return (
		<div className="flex w-full items-center pt-40 px-24">
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell></TableCell>
							<TableCell align="left">ID</TableCell>
							<TableCell align="left">Name</TableCell>
							<TableCell align="center">Country</TableCell>
							<TableCell align="left">Status</TableCell>
							<TableCell align="center">Created At</TableCell>
							<TableCell align="center">Admin</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.name} hover onClick={() => alert(row.id)}>
								<TableCell
									className="w-48 pl-4 sm:pl-12"
									padding="checkbox"
								>
									<Tooltip title="Open new tab">
										<OpenInNew/>
									</Tooltip>
								</TableCell>
								<TableCell align="left" component="th" scope="row">
									{row.id}
								</TableCell>
								<TableCell align="left">{row.name}</TableCell>
								<TableCell align="center">{row.country}</TableCell>
								<TableCell align="left">{row.status}</TableCell>
								<TableCell align="center">{row.createdAt}</TableCell>
								<TableCell align="center">{row.admin}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<TablePagination
					rowsPerPageOptions={[50, 100, 150, 200]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</TableContainer>
		</div>
	);
}
