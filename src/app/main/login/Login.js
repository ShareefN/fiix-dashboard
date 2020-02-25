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
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authActions from 'app/auth/store/actions';

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`,
		color: theme.palette.primary.contrastText
	}
}));

function LoginPage() {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);
	const onSubmit = data => dispatch(authActions.submitLogin(data));
	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}
	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
					<Card className="w-full max-w-384">
						<CardContent className="flex flex-col items-center justify-center p-32">
							<img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo" />

							<Typography variant="h6" className="mt-16 mb-32">
								LOGIN TO YOUR ACCOUNT
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
									label="Email"
									autoFocus
									type="email"
									name="email"
									variant="outlined"
									required
									validations={{
										isEmail: true
									}}
									validationErrors={{
										isEmail: 'Wrong Email Address'
									}}
								/>

								<TextFieldFormsy
									className="mb-16"
									label="Password"
									type="password"
									name="password"
									variant="outlined"
									required
									fullWidth
								/>

								<Button
									variant="contained"
									color="primary"
									className="w-224 mx-auto mt-16"
									aria-label="LOG IN"
									type="submit"
									disabled={!isFormValid}
								>
									LOGIN
								</Button>
							</Formsy>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default LoginPage;
