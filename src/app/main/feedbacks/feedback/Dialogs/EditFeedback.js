import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { TextFieldFormsy, SelectFormsy } from '@fuse/core/formsy';
import Formsy from 'formsy-react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../store/actions/index';
import { Icon, MenuItem, Tooltip } from '@material-ui/core';
import 'app/main/helpers/validationRules';

function UpdateReport(props) {
	const dispatch = useDispatch();
	const [dialog, setDialog] = useState(null);
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	const user = useSelector(({ auth }) => auth.user.data);
  
	const submit = async model => {
		await Actions.update(props.reportId, user.id, model);
		dispatch(Actions.fetchReport(props.reportId));
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
						<DialogTitle id="scroll-dialog-title">Update Report</DialogTitle>
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
							<SelectFormsy
								className={' my-2 mx-2 w-full'}
								type="text"
								name="status"
								value={''}
								label="Stauts"
								variant="outlined"
								validationError="this field is required"
								validations={{
									required: true
								}}
							>
								<MenuItem value="Answered">Answered</MenuItem>
								<MenuItem value="No Answer">No Answer</MenuItem>
								<MenuItem value="Invalid Number">Number Invalid</MenuItem>
							</SelectFormsy>
							<TextFieldFormsy
								className={' my-2 mx-2 w-full'}
								type="text"
								name="notes"
								value={''}
								label="Notes"
								variant="outlined"
								required
								
							/>
							<div className="text-center pt-24 pb-24">
								<Button variant="contained" color="primary" type="submit" disabled={!isFormValid}>
									Update Report
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
			<Tooltip title="Update Report">
				<Icon className="cursor-pointer" onClick={() => setDialog(true)}>
					edit
				</Icon>
			</Tooltip>
			{form()}
		</React.Fragment>
	);
}

export default UpdateReport;
