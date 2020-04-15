import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as MessageActions from 'app/store/actions/fuse/message.actions';
import { Icon, Tooltip } from '@material-ui/core';
import * as Actions from '../../store/actions/index';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function ApproveDialog(props) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const submit = async () => {
		await Actions.approve(props.applicationId);
		props.history.push({
			pathname: '/applications'
		});
		dispatch(MessageActions.showMessage({ message: 'Application Approved', variant: 'success' }));
		setOpen(false);
	};

	const dialog = () => {
		return (
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Approve Application'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Are you sure you want to approve applciaton?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						cancel
					</Button>
					<Button onClick={() => submit()} color="primary" autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		);
	};

	return (
		<React.Fragment>
			<Tooltip title="Approve Application">
				<Icon fontSize="large" className="cursor-pointer" onClick={() => handleClickOpen()}>
					check
				</Icon>
			</Tooltip>
			{dialog()}
		</React.Fragment>
	);
}

export default withRouter(ApproveDialog);
