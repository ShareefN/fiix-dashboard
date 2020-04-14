import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Icon, Typography, Tooltip } from '@material-ui/core';
import * as Actions from '../../store/actions/index';
import { useDispatch } from 'react-redux';

function ActivateAdmin(props) {
	const [dialog, setDialog] = useState(null);
	const dispatch = useDispatch();

	const submit = async () => {
		await Actions.active(props.adminId)
		dispatch(Actions.fetchAdmin(props.adminId))
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
						<DialogTitle id="scroll-dialog-title">Activate Admin</DialogTitle>
						<Icon className="mr-24 mt-20 cursor-pointer" onClick={() => handleClose()}>
							close
						</Icon>
					</div>
					<DialogContent className="text-center">
						<Typography variant="h5">Are you sure you want to activate admin?</Typography>
						<Button variant="contained" color="primary" className="mt-20 mb-20" onClick={() => submit()}>
							Activate Admin
						</Button>
					</DialogContent>
				</Dialog>
			</>
		);
	};

	return (
		<React.Fragment>
			<Tooltip title="Activate Admin">
				<Icon className="cursor-pointer" onClick={() => setDialog(true)}>
					sentiment_very_satisfied
				</Icon>
			</Tooltip>
			{form()}
		</React.Fragment>
	);
}

export default ActivateAdmin;
