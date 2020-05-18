import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { TextFieldFormsy, SelectFormsy } from '@fuse/core/formsy';
import Formsy from 'formsy-react';
import Grid from '@material-ui/core/Grid';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Icon, MenuItem, Tooltip } from '@material-ui/core';
import * as Actions from '../../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { constants } from 'app/main/helpers/constants';
import * as MessageActions from 'app/store/actions/fuse/message.actions';
import DateTimePickers from 'app/main/helpers/datePickers/dateTimePicker';
import moment from 'moment';

function EditContractor(props) {
	const dispatch = useDispatch();
	const [dialog, setDialog] = useState(null);

	const contractor = useSelector(({ contractorReducer }) => contractorReducer.Contractor.Contractor);

	const initalValues = {
		name: contractor ? contractor.name : '',
		email: contractor ? contractor.email : '',
		number: contractor ? contractor.number : '',
		location: contractor ? contractor.location : '',
		identity: contractor ? contractor.identity : '',
		nonCriminal: contractor ? contractor.nonCriminal : '',
		notes: contractor ? contractor.notes : '',
		timeIn: contractor ? contractor.timeIn : '',
		timeOut: contractor ? contractor.timeOut : ''
	};

	const submit = async model => {
		if (model.timeIn) {
			model.timeIn = moment(model.timeIn).format('HH:MM A');
		}
		if (model.timeOut) {
			model.timeOut = moment(model.timeOut).format('HH:MM A');
		}
		await Actions.updateContractor(contractor.id, model);
		dispatch(MessageActions.showMessage({ message: 'Contractor successfully updated', variant: 'success' }));
		dispatch(Actions.fetchContractor(contractor.id));
		setDialog(false);
	};

	const handleClose = () => {
		setDialog(false);
	};

	const form = () => {
		return (
			<>
				<Dialog
					fullWidth
					maxWidth="md"
					open={dialog ? true : false}
					aria-labelledby="max-width-dialog-title"
					aria-describedby="scroll-dialog-description"
				>
					<div className="flex flex-row justify-between">
						<DialogTitle id="scroll-dialog-title">Edit Contractor</DialogTitle>
						<Icon className="mr-24 mt-20 cursor-pointer" onClick={() => handleClose()}>
							close
						</Icon>
					</div>
					<DialogContent>
						<Formsy onValidSubmit={submit} className="justify-center justify-between w-full">
							<TextFieldFormsy
								className={' my-10 mx-10 w-full'}
								type="text"
								name="name"
								value={initalValues.name}
								label="Name"
								variant="outlined"
							/>
							<TextFieldFormsy
								className={' my-10 mx-10 w-full'}
								type="text"
								name="email"
								value={initalValues.email}
								label="Email"
								variant="outlined"
							/>
							<TextFieldFormsy
								className={' my-10 mx-10 w-full'}
								type="text"
								name="number"
								value={initalValues.number}
								label="Phone"
								variant="outlined"
							/>
							<SelectFormsy
								className={'my-10 mx-10 w-full'}
								type="text"
								name="location"
								value={initalValues.location}
								label="Location"
								variant="outlined"
							>
								<MenuItem value={initalValues.location} className="text-red-600">
									Cancel
								</MenuItem>
								{constants.LOCATIONS.map((elm, index) => {
									return (
										<MenuItem value={elm.value} key={index}>
											{elm.label}
										</MenuItem>
									);
								})}
							</SelectFormsy>
							<Grid item xl={3} lg={3} md={3} sm={3} className="w-full">
								<DateTimePickers
									name="timeIn"
									label="Time In"
									className={'my-10 mx-10 w-full'}
									format={'hh:mm'}
									KeyboardButtonProps={{
										'aria-label': 'change date'
									}}
								/>
							</Grid>
							<Grid item xl={3} lg={3} md={3} sm={3} className="w-full">
								<DateTimePickers
									name="timeOut"
									label="Time Out"
									className={'my-10 mx-10 w-full'}
									format={'hh:mm'}
									KeyboardButtonProps={{
										'aria-label': 'change date'
									}}
								/>
							</Grid>
							<TextFieldFormsy
								className={' my-10 mx-10 w-full'}
								type="text"
								name="notes"
								value={initalValues.notes}
								label="Notes"
								variant="outlined"
							/>
							<div className="text-center pt-24 pb-24">
								<Button variant="contained" color="primary" type="submit">
									Edit Contractor
								</Button>
							</div>
						</Formsy>
					</DialogContent>
				</Dialog>
			</>
		);
	};

	return (
		<React.Fragment>
			<Tooltip title="Edit Contractor">
				<Icon className="cursor-pointer" onClick={() => setDialog(true)}>
					edit
				</Icon>
			</Tooltip>
			{form()}
		</React.Fragment>
	);
}

export default EditContractor;
