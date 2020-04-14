import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { TextFieldFormsy } from '@fuse/core/formsy';
import Formsy from 'formsy-react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import * as Actions from '../../store/actions/index';
import { Icon } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import 'app/main/helpers/validationRules';

function DeactivateAdmin(props) {
	const dispatch = useDispatch();
	const [dialog, setDialog] = useState(null);
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	const submit = async model => {
		await Actions.deactivate(props.adminId, model);
		dispatch(Actions.fetchAdmin(props.adminId));
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
						<DialogTitle id="scroll-dialog-title">Deactivate Admin</DialogTitle>
						<Icon className="mr-24 mt-20 cursor-pointer" onClick={() => handleClose()}>
							close
						</Icon>
					</div>
					<DialogContent>
						<Formsy
							onValidSubmit={submit}
							onValid={enableButton}
							onInvalid={disableButton}
							ref={formRef}
							className="justify-center justify-between w-full"
						>
							<TextFieldFormsy
								className={' my-10 mx-10 w-full'}
								type="text"
								name="reason"
								value={''}
								label="Reason"
								variant="outlined"
								required
								validations={{
									required: true
								}}
								validationError="Field is required"
							/>
							<div className="text-center pt-24 pb-24">
								<Button variant="contained" color="primary" type="submit" disabled={!isFormValid}>
									Deactivate Admin
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
			<Tooltip title="Deactivate Admin">
				<Icon className="cursor-pointer" onClick={() => setDialog(true)}>
					sentiment_very_dissatisfied
				</Icon>
			</Tooltip>
			{form()}
		</React.Fragment>
	);
}

export default DeactivateAdmin;
