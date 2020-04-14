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

function EditAdmin(props) {
	const dispatch = useDispatch();
	const [dialog, setDialog] = useState(null);

	const admin = useSelector(({ adminReducer }) => adminReducer.Admin.Admin.result);

	const initalValues = {
		name: admin ? admin.name : '',
		email: admin ? admin.email : '',
		phone: admin ? admin.phone : '',
		role: admin ? admin.role : '',
		notes: admin ? admin.notes : ''
	};

	const submit = async model => {
		await Actions.edit(props.adminId, model);
		dispatch(Actions.fetchAdmin(props.adminId));
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
						<DialogTitle id="scroll-dialog-title">Edit Admin</DialogTitle>
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
								name="phone"
								value={initalValues.phone}
								label="Phone"
								variant="outlined"
							/>
							<SelectFormsy
								className={'my-10 mx-10 w-full'}
								type="text"
								name="role"
								value={initalValues.role}
								label="Role"
								variant="outlined"
							>
								<MenuItem value="super">Super Admin</MenuItem>
								<MenuItem value="admin">Admin</MenuItem>
							</SelectFormsy>
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
									Edit Admin
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
			<Tooltip title="Edit Admin">
				<Icon className="cursor-pointer" onClick={() => setDialog(true)}>
					edit
				</Icon>
			</Tooltip>
			{form()}
		</React.Fragment>
	);
}

export default EditAdmin;
