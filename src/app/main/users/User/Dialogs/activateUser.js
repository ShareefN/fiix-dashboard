import React, { useState, useRef } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Icon, Typography, Button } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import * as Actions from '../../store/actions/index';
import 'app/main/helpers/validationRules';
import { useDispatch } from 'react-redux';

function ActivateUser(props) {
	const dispatch = useDispatch();
	const [dialog, setDialog] = useState(null);
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	const submit = async () => {
		await Actions.activate(props.userId);
		dispatch(Actions.fetchUser(props.userId));
		setDialog(false);
	};

	const handleClose = () => {
		setDialog(false);
	};

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

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
						<DialogTitle id="scroll-dialog-title">Activate User</DialogTitle>
						<Icon className="mr-24 mt-20 cursor-pointer" onClick={() => handleClose()}>
							close
						</Icon>
					</div>
					<DialogContent>
						<Typography variant="h6">Please confirm activating user</Typography>
						<div className="flex flex-1 items-center justify-center mb-20 mt-20">
							<Button variant="contained" color="primary" onClick={() => submit()}>
								Activate User
							</Button>
						</div>
					</DialogContent>
				</Dialog>
			</>
		);
	};

	return (
		<React.Fragment>
			<Tooltip title="Activate User">
				<Icon className="cursor-pointer" onClick={() => setDialog(true)}>
					sentiment_very_satisfied
				</Icon>
			</Tooltip>
			{form()}
		</React.Fragment>
	);
}

export default ActivateUser;
