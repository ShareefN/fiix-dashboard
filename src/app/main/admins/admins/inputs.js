import React, { useRef } from 'react';
import { TextFieldFormsy, SelectFormsy } from '@fuse/core/formsy';
import Formsy from 'formsy-react';
import { Typography, Icon, MenuItem, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core';

function Inputs(props) {
	const formRef = useRef(null);

	const submit = model => {
		console.log(model);
	};

	const resetForm = async () => {
		formRef.current.reset('');
	};

	return (
		<div className="flex flex-col justify-between flex-1 px-24 pt-24 pb-24 bg-grey-300">
			<div className="flex flex-row items-center">
				<Icon className="list-item-icon text-44">supervisor_account</Icon>
				<Typography className="py-5 sm:py-24 ml-8" variant="h4">
					Admins
				</Typography>
			</div>
			<Formsy onValidSubmit={submit} ref={formRef} onReset={resetForm} className="justify-center w-full">
				<Grid container spacing={2} style={{ padding: '0px 3rem' }}>
					<Grid container spacing={1}>
						<Grid item xl={3} lg={3} md={3} sm={3}>
							<TextFieldFormsy
								className={' my-10 mx-10 w-full'}
								type="text"
								name="id"
								value={''}
								label="Admin ID"
								variant="outlined"
								InputProps={{
									endAdornment: (
										<IconButton
											style={{ padding: '2%' }}
											onClick={() => formRef.current.inputs[0].setValue('')}
										>
											<ClearIcon />
										</IconButton>
									)
								}}
							/>
						</Grid>
						<Grid item xl={3} lg={3} md={3} sm={3}>
							<TextFieldFormsy
								className={' my-10 mx-10 w-full'}
								type="text"
								name="textSearch"
								label="Name"
								variant="outlined"
								value={''}
								InputProps={{
									endAdornment: (
										<IconButton
											style={{
												padding: '2%'
											}}
											onClick={() => formRef.current.inputs[1].setValue('')}
										>
											<ClearIcon />
										</IconButton>
									)
								}}
							/>
						</Grid>
					</Grid>
					<Grid item xs={4} className="text-left">
						<Typography color="primary" className={'mt-6'}>
							<span>Matching records</span> : <span>3</span>
						</Typography>
					</Grid>
				</Grid>
				<Grid item xs={12} className="text-right pt-22">
					<Button
						variant="contained"
						color="primary"
						className="w-92 mr-16 mt-16 normal-case"
						type="reset"
						value="legacy"
					>
						Clear
					</Button>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className="mx-auto mr-16 mt-16 w-92 normal-case"
						aria-label="filter"
						disabled={false}
						value="legacy"
					>
						Filter
					</Button>
				</Grid>
			</Formsy>
		</div>
	);
}

export default React.memo(Inputs);
