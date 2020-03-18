import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { TextFieldFormsy } from '@fuse/core/formsy';
import Formsy from 'formsy-react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Icon } from '@material-ui/core';

function RejectApplication(props) {
	const [dialog, setDialog] = useState(null);

	const submit = model => {
		console.log(model);
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
						<DialogTitle id="scroll-dialog-title">Reject Application</DialogTitle>
						<Icon className="mr-24 mt-20 cursor-pointer" onClick={() => handleClose()}>
							close
						</Icon>
					</div>
					<DialogContent>
						<Formsy onValidSubmit={submit} className="justify-center justify-between w-full">
							<TextFieldFormsy
								className={' my-10 mx-10 w-full'}
								type="text"
								name="rejectionReason"
								value={''}
								label="Reason"
								variant="outlined"
							/>
							<div className="text-center pt-24 pb-24">
								<Button variant="contained" color="primary" type="submit">
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
			<Button variant="contained" color="primary" className="cursor-pointer" onClick={() => setDialog(true)}>
				Reject Application
			</Button>
			{form()}
		</React.Fragment>
	);
}

export default RejectApplication;
