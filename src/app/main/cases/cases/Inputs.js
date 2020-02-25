import React, { useRef } from 'react';
import { TextFieldFormsy, SelectFormsy } from '@fuse/core/formsy';
import Formsy from 'formsy-react';
import { MenuItem, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core';

function Inputs(props) {
	const formRef = useRef(null);

	const initValues = {
		search: '',
		id: '',
		status: '',
		admin: '',
		accessId: '',
		doctor: '',
	};

	const submit = model => {
		console.log(model);
	};

	const resetForm = async () => {
		formRef.current.reset(initValues);
	};

	return (
		<div className="flex w-full items-center pt-24 px-24">
			<Formsy
				onValidSubmit={submit}
				ref={formRef}
				onReset={resetForm}
				className="justify-center justify-between w-full flex-row"
			>
				<Grid container spacing={2} style={{ padding: '0px 3rem' }}>
					<Grid container spacing={1}>
						<Grid item xl={3} lg={3} md={3} sm={3}>
							<TextFieldFormsy
								className={' my-1 mx-1 w-full'}
								type="text"
								name="textSearch"
								label="Search (email, name)"
								variant="outlined"
								value={initValues.search}
								InputProps={{
									endAdornment: (
										<IconButton
											style={{
												padding: '2%'
											}}
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
								className={' my-1 mx-1 w-full'}
								type="text"
								name="id"
								value={initValues.id}
								label="Case ID"
								variant="outlined"
								InputProps={{
									endAdornment: (
										<IconButton
											style={{ padding: '2%' }}
											onClick={() => formRef.current.inputs[1].setValue('')}
										>
											<ClearIcon />
										</IconButton>
									)
								}}
							/>
						</Grid>
						<Grid item xl={3} lg={3} md={3} sm={3}>
							<SelectFormsy
								className={' my-1 mx-1 w-full'}
								type="text"
								name="status"
								value={initValues.status}
								label="Status"
								variant="outlined"
							>
								<MenuItem>Active</MenuItem>
								<MenuItem>Lost</MenuItem>
								<MenuItem>Pending Plan</MenuItem>
							</SelectFormsy>
						</Grid>
						<Grid item xl={3} lg={3} md={3} sm={3}>
							<SelectFormsy
								className={' my-1 mx-1 w-full'}
								type="text"
								name="admin"
								value={initValues.admin}
								label="Admin"
								variant="outlined"
							>
								<MenuItem>Shareef</MenuItem>
								<MenuItem>Zaid</MenuItem>
								<MenuItem>Khaled</MenuItem>
							</SelectFormsy>
						</Grid>
						<Grid item xl={3} lg={3} md={3} sm={3}>
							<SelectFormsy
								className={' my-1 mx-1 w-full'}
								type="text"
								name="country"
								value={initValues.status}
								label="Country"
								variant="outlined"
							>
								<MenuItem>UAE</MenuItem>
								<MenuItem>SA</MenuItem>
								<MenuItem>JO</MenuItem>
							</SelectFormsy>
						</Grid>
						<Grid item xl={3} lg={3} md={3} sm={3}>
							<TextFieldFormsy
								className={' my-1 mx-1 w-full'}
								type="text"
								name="accesId"
								value={initValues.accessId}
								label="Access ID"
								variant="outlined"
								InputProps={{
									endAdornment: (
										<IconButton
											style={{ padding: '2%' }}
											onClick={() => formRef.current.inputs[5].setValue('')}
										>
											<ClearIcon />
										</IconButton>
									)
								}}
							/>
						</Grid>
						<Grid item xl={3} lg={3} md={3} sm={3}>
							<SelectFormsy
								className={' my-1 mx-1 w-full'}
								type="text"
								name="doctor"
								value={initValues.doctor}
								label="Doctor"
								variant="outlined"
							>
								<MenuItem>Oday Smile</MenuItem>
								<MenuItem>Online Doctor</MenuItem>
								<MenuItem>Offline Doctor</MenuItem>
							</SelectFormsy>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={13} className="text-right pt-24">
					{/* <FuseAnimate animation="transition.expandIn" delay={300}> */}
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
						disabled={false} //{!isFormValid}
						value="legacy"
					>
						Filter
					</Button>

					{/* </FuseAnimate> */}
				</Grid>
			</Formsy>
		</div>
	);
}

export default React.memo(Inputs);
