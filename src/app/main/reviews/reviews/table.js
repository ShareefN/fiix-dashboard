import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';
import DeleteReview from './dialogs/deleteReview';
import moment from 'moment';

function DataTable(props) {
	const reviews = useSelector(({ reviewsReducer }) => reviewsReducer.Reviews.Reviews);

	return (
		<div className="flex w-full items-center pb-56">
			<TableContainer>
				<Table aria-label="simple table">
					<TableHead className="bg-grey-300 w-full">
						<TableRow>
							<TableCell align="center">Review Id</TableCell>
							<TableCell align="center">User Id</TableCell>
							<TableCell align="center">Username</TableCell>
							<TableCell align="center">Number</TableCell>
							<TableCell align="center">Review</TableCell>
							<TableCell align="center">Posted At</TableCell>
							<TableCell align="center"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{reviews &&
							reviews.map(elm => {
								return (
									<TableRow key={elm.id} hover className="px-24">
										<TableCell component="th" scope="row" align="center">
											{elm ? elm.id : '--'}
										</TableCell>
										<TableCell component="th" scope="row" align="center">
											{elm ? elm.userId : '--'}
										</TableCell>
										<TableCell component="th" scope="row" align="center">
											{elm ? elm.username : '--'}
										</TableCell>
										<TableCell component="th" scope="row" align="center">
											{elm ? elm.number : '--'}
										</TableCell>
										<TableCell component="th" scope="row" align="center">
											{elm ? elm.review : '--'}
										</TableCell>
										<TableCell align="center">
											{elm ? moment(elm.createdAt).format('DD/MM/YYYY - HH:MM') : '--'}
										</TableCell>
										<TableCell align="center">
											<DeleteReview reviewId={elm.id} />
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

export default DataTable;
