import React from 'react';
import { AppBar, Card, CardContent, Toolbar, Typography, Icon, Tooltip } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Actions from 'app/main/contractors/store/actions/index';
import moment from 'moment';

function ContractorReviews(props) {
	const dispatch = useDispatch();
	const reviews = useSelector(({ contractorReducer }) => contractorReducer.Contractor.Reviews);

	const handleDeleteReview = async reviewId => {
		await Actions.deleteReview(props.id, reviewId);
		dispatch(Actions.getReviews(props.id));
  };

  const openUser = id => {
		props.history.push(`/users/${id}/userdetails`);
	};

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
											Contractor Reviews
										</Typography>
									</div>
								</div>
							</Toolbar>
						</AppBar>
						<CardContent>
							<TableContainer>
								<Table aria-label="simple table">
									<TableHead className="bg-grey-300 w-full">
										<TableRow>
											<TableCell></TableCell>
											<TableCell align="left">Review Id</TableCell>
											<TableCell align="left">Username</TableCell>
											<TableCell align="left">Review</TableCell>
											<TableCell align="left">Created At</TableCell>
											<TableCell align="left"></TableCell>
											<TableCell align="left"></TableCell>
										</TableRow>
									</TableHead>
									<TableBody className="cursor-pointer">
										{reviews &&
											reviews.map((elm, index) => {
												return (
													<TableRow hover className="px-24" key={index}>
														<TableCell></TableCell>
														<TableCell component="th" scope="row" align="left">
															{elm.id}
														</TableCell>
														<TableCell component="th" scope="row" align="left">
															{elm.username}
														</TableCell>
														<TableCell align="left">{elm.review}</TableCell>
														<TableCell align="left">
															{moment(elm.updatedAt).format('DD/MM/YYY - HH:MM')}
														</TableCell>
														<TableCell align="left">
															<Tooltip title="View user details" onClick={() => openUser(elm.userId)}>
																<Icon>pageview</Icon>
															</Tooltip>
														</TableCell>
														<TableCell align="left">
															<Tooltip
																title="Delete Review"
																onClick={() => handleDeleteReview(elm.id)}
															>
																<Icon>delete</Icon>
															</Tooltip>
														</TableCell>
													</TableRow>
												);
											})}
									</TableBody>
								</Table>
							</TableContainer>
						</CardContent>
					</Card>
				</div>
			</div>
		</React.Fragment>
	);
}

export default withRouter(ContractorReviews);
