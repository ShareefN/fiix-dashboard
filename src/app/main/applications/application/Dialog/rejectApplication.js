import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { TextFieldFormsy } from '@fuse/core/formsy';
import Formsy from 'formsy-react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Icon, Tooltip } from '@material-ui/core';
import 'app/main/helpers/validationRules';
import * as MessageActions from 'app/store/actions/fuse/message.actions';
import * as Actions from '../../store/actions/index';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function RejectApplication(props) {
	const dispatch = useDispatch();
	const [dialog, setDialog] = useState(null);
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	const submit = async model => {
		await Actions.reject(props.applicationId, model);
		props.history.push({
			pathname: '/applications'
		});
		dispatch(MessageActions.showMessage({ message: 'Application Rejected', variant: 'success' }));
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
						<DialogTitle id="scroll-dialog-title">Reject Application</DialogTitle>
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
								name="rejectedReason"
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
									Reject Application
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
			<Tooltip title="Reject Applciation">
				<Icon onClick={() => setDialog(true)} fontSize="large">
					sentiment_dissatisfied
				</Icon>
			</Tooltip>
			{form()}
		</React.Fragment>
	);
}

export default withRouter(RejectApplication);
