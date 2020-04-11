import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextFieldFormsy } from '@fuse/core/formsy';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import Formsy from 'formsy-react';
import clsx from 'clsx';
import * as MessageActions from 'app/store/actions/fuse/message.actions';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import 'app/main/helpers/validationRules';
import { updatePassword } from 'app/api/api';
import { withRouter } from 'react-router-dom';
import * as authActions from 'app/auth/store/actions';

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`,
		color: theme.palette.primary.contrastText
	}
}));

function ResetPassword() {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	const onSubmit = async data => {
		if (data.newPassword === data.confirmPassword) {
			disableButton();
			const result = {
				password: data.password,
				newPassword: data.newPassword
			};
			await updatePassword(result)
				.then(res => {
					dispatch(
						MessageActions.showMessage({ message: 'Password successfully updated', variant: 'success' })
					);
					dispatch(authActions.logoutUser());
				})
				.catch(err => {
					dispatch(
						MessageActions.showMessage({ message: 'Error updating password, Try again', variant: 'error' })
					);
					enableButton();
				});
		} else {
			dispatch(MessageActions.showMessage({ message: 'Those passwords do not match', variant: 'error' }));
		}
	};

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
					<Card className="w-full max-w-384">
						<CardContent className="flex flex-col items-center justify-center p-32">
							<Typography variant="h6" className="mt-16 mb-32">
								RESET PASSWORD
							</Typography>

							<Formsy
								onValidSubmit={onSubmit}
								onValid={enableButton}
								onInvalid={disableButton}
								ref={formRef}
								className="flex flex-col justify-center w-full"
							>
								<TextFieldFormsy
									className="mb-16"
									label="Old Password"
									type="password"
									name="password"
									variant="outlined"
									required
									validations={{
										required: true
									}}
									validationError="Field is required"
									fullWidth
								/>
								<TextFieldFormsy
									className="mb-16"
									label="Password"
									type="password"
									name="newPassword"
									variant="outlined"
									required
									validations={{
										required: true,
										minLength: 6
									}}
									validationError="Field is required and no less than 6 characters"
									fullWidth
								/>
								<TextFieldFormsy
									className="mb-16"
									label="Confirm Password"
									type="password"
									name="confirmPassword"
									variant="outlined"
									required
									validations={{
										required: true
									}}
									validationError="Field is required"
									fullWidth
								/>
								<Button
									variant="contained"
									color="primary"
									className="w-224 mx-auto mt-16"
									aria-label="SUBMIT"
									type="submit"
									disabled={!isFormValid}
								>
									SUBMIT
								</Button>
							</Formsy>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default withRouter(ResetPassword);
