import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { TextFieldFormsy, SelectFormsy } from '@fuse/core/formsy';
import Formsy from 'formsy-react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Icon, MenuItem, Tooltip } from '@material-ui/core';
import * as Actions from '../../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { constants } from 'app/main/helpers/constants';
import DateTimePickers from 'app/main/helpers/datePickers/dateTimePicker';

function EditApplication(props) {
	const dispatch = useDispatch();
	const [dialog, setDialog] = useState(null);

	const application = useSelector(({ applicationReducer }) => applicationReducer.Application.Application);

	const initalValues = {
		name: application.name ? application.name : '',
		location: application.location ? application.location : '',
		timeIn: application.timeIn ? application.timeIn : '',
		timeOut: application.timeOut ? application.timeOut : ''
	};

	const submit = async model => {
		if (model.timeIn) {
			model.timeIn = moment(model.timeIn).format('hh:mm A');
		}

		if (model.timeOut) {
			model.timeOut = moment(model.timeOut).format('hh:mm P');
		}

		await Actions.edit(application.id, model);
		dispatch(Actions.fetchApplication(application.id));
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
						<DialogTitle id="scroll-dialog-title">Edit Application</DialogTitle>
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
							<SelectFormsy
								className={'my-10 mx-10 w-full'}
								type="text"
								name="location"
								value={initalValues.location}
								label="Location"
								variant="outlined"
							>
								<MenuItem value="" className="text-red-600">
									Clear
								</MenuItem>
								{constants.LOCATIONS.map((elm, index) => {
									return (
										<MenuItem value={elm.value} key={index}>
											{elm.label}
										</MenuItem>
									);
								})}
							</SelectFormsy>
							<DateTimePickers
								name="timeIn"
								value={''}
								label="Time In"
								className={'my-10 mx-10 w-full'}
								format={'hh:mm'}
								KeyboardButtonProps={{
									'aria-label': 'change date'
								}}
							/>
							<DateTimePickers
								name="timeOut"
								value={''}
								label="Time Out"
								className={'my-10 mx-10 w-full'}
								format={'hh:mm'}
								KeyboardButtonProps={{
									'aria-label': 'change date'
								}}
							/>
							<div className="text-center pt-24 pb-24">
								<Button variant="contained" color="primary" type="submit">
									Edit Application
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
			<Tooltip title="Edit Application">
				<Icon className="cursor-pointer" fontSize="large" onClick={() => setDialog(true)}>
					edit
				</Icon>
			</Tooltip>
			{form()}
		</React.Fragment>
	);
}

export default EditApplication;
