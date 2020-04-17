import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Formsy from 'formsy-react';
import { Icon } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { TextFieldFormsy } from '@fuse/core/formsy';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import 'app/main/helpers/validationRules';
import * as Actions from '../../store/actions/index';
import * as MessageActions from 'app/store/actions/fuse/message.actions';

const useStyles = makeStyles(theme => ({
	filledField: {
		'& input:not([value=""]) + button + fieldset': {
			borderColor: '#387CA3',
			borderWidth: 2
		},
		'& input[value=""] + button ': {
			display: 'none'
		}
	}
}));

function CreaetUser(props) {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [dialog, setDialog] = useState(null);
	const formRef = useRef(null);
	const [isFormValid, setIsFormValid] = useState(false);

	const handleClose = () => {
		setDialog(false);
	};

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

	const submit = async model => {
    await Actions.create(model);
    dispatch(MessageActions.showMessage({ message: 'User successfully created', variant: 'success' }));
		dispatch(Actions.fetchUsers());
		setDialog(false);
	};

	const formDialog = () => {
		return (
			<Dialog
				fullWidth
				maxWidth="md"
				open={dialog ? true : false}
				aria-labelledby="max-width-dialog-title"
				aria-describedby="scroll-dialog-description"
			>
				<div className="flex flex-row justify-between">
					<DialogTitle id="scroll-dialog-title">Create New User</DialogTitle>
					<Icon className="mr-24 mt-20 cursor-pointer" onClick={() => handleClose()}>
						close
					</Icon>
				</div>
				<DialogContent>
					<Formsy
						onValidSubmit={submit}
						onInvalid={disableButton}
						onValid={enableButton}
						ref={formRef}
						className="justify-center justify-between w-full"
					>
						<div className=" sm:flex grid">
							<Grid container spacing={1}>
								<Grid item className="w-full">
									<TextFieldFormsy
										className={classes.filledField + ' my-2 mx-2 w-full'}
										type="text"
										name="username"
										label="Username"
										variant="outlined"
										value={''}
										validationError="this field is required"
										validations={{
											required: true
										}}
									/>
								</Grid>
								<Grid item className="w-full">
									<TextFieldFormsy
										className={classes.filledField + ' my-2 mx-2 w-full'}
										type="text"
										name="email"
										value={''}
										label="email"
										variant="outlined"
										validations={{
											isEmail: true,
											required: true
										}}
										validationErrors={{
											isEmail: 'Invalid Email Address'
										}}
									/>
								</Grid>
								<Grid item className="w-full">
									<TextFieldFormsy
										className={classes.filledField + ' my-2 mx-2 w-full'}
										type="text"
										name="number"
										value={''}
										label="Phone"
										variant="outlined"
										validationError="this field is required"
										validations={{
											required: true
										}}
									/>
								</Grid>
								<Grid item className="w-full">
									<TextFieldFormsy
										className={classes.filledField + ' my-2 mx-2 w-full'}
										type="text"
										name="notes"
										value={''}
										label="Notes"
										variant="outlined"
									/>
								</Grid>
							</Grid>
						</div>
						<div className="flex flex-1 justify-end mr-20 mb-20 mt-20">
							<Button disabled={!isFormValid} variant="contained" color="primary" type="submit">
								Create User
							</Button>
						</div>
					</Formsy>
				</DialogContent>
			</Dialog>
		);
	};

	return (
		<React.Fragment>
			<Tooltip title="Create User" arrow>
				<Icon className="cursor-pointer" color="primary" onClick={() => setDialog(true)}>
					add
				</Icon>
			</Tooltip>
			{formDialog()}
		</React.Fragment>
	);
}

export default CreaetUser;
