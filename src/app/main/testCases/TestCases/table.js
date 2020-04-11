import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';

function DataTable(props) {
	const testCases = useSelector(({ testCasesReducer }) => testCasesReducer.TestCases.TestCases);

	return (
		<div className="flex w-full items-center pb-56">
			<TableContainer>
				<Table aria-label="simple table">
					<TableHead className="bg-grey-300 w-full">
						<TableRow>
							<TableCell align="center">Test Id</TableCell>
							<TableCell align="center">Category</TableCell>
							<TableCell align="center">Reason</TableCell>
							<TableCell align="center">Outcome</TableCell>
							<TableCell align="center">From</TableCell>
							<TableCell align="center">To</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="cursor-pointer">
						{testCases &&
							testCases.map(elm => {
								return (
									<TableRow key={elm.id} hover className="px-24">
										<TableCell component="th" scope="row" align="center">
											{elm ? elm.id : '--'}
										</TableCell>
										<TableCell component="th" scope="row" align="center">
											{elm ? elm.category : '--'}
										</TableCell>
										<TableCell align="center">{elm ? elm.reason : '--'}</TableCell>
										<TableCell align="center">{elm ? elm.outcome : '--'}</TableCell>
										<TableCell align="center">{elm ? elm.from : '--'}</TableCell>
										<TableCell align="center">{elm ? elm.to : '--'}</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default DataTable;
