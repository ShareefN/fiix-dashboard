import React, { useRef } from 'react';
import { TextFieldFormsy } from '@fuse/core/formsy';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Formsy from 'formsy-react';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../store/actions/index';

function Inputs(props) {
	const dispatch = useDispatch();
	const formRef = useRef(null);
  const users = useSelector(({ usersReducer }) => usersReducer.Users.Users);

	const searchFilterName = text => {
		const newData = users.filter(item => {
			const itemData = `${item.username.toUpperCase()}`;

			const textData = text.toUpperCase();

			return itemData.indexOf(textData) > -1;
		});
		dispatch(Actions.filterUsers(newData));
	};

	const searchByNumber = text => {
		const newData = users.filter(item => {
			const itemData = `${item.number.toUpperCase()}`;
			const textData = text.toUpperCase();

			return itemData.indexOf(textData) > -1;
		});
		dispatch(Actions.filterUsers(newData));
	};

	const submit = model => {
		if (model.username) {
			searchFilterName(model.username);
		}
		if (model.number) {
			searchByNumber(model.number);
		}
	};

	const reset = () => {
		formRef.current.reset('');
		dispatch(Actions.fetchUsers());
	};

	return (
		<Formsy onValidSubmit={submit} ref={formRef} onReset={reset}>
			<Grid container spacing={2} className="mb-16">
				<Grid container spacing={1}>
					<Grid item xl={3} lg={3} md={3} sm={3}>
						<TextFieldFormsy
							className={' my-10 mx-10 w-full'}
							type="text"
							name="username"
							label="Username"
							variant="outlined"
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className="mx-auto ml-16 mt-16 w-auto normal-case"
							aria-label="filter"
							disabled={false}
							value="legacy"
						>
							Filter by Username
						</Button>
					</Grid>
					<Grid item xl={3} lg={3} md={3} sm={3}>
						<TextFieldFormsy
							className={' my-10 mx-10 w-full'}
							type="text"
							name="number"
							label="Number"
							variant="outlined"
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className="mx-auto ml-16 mt-16 w-auto normal-case"
							aria-label="filter"
							disabled={false}
							value="legacy"
						>
							Filter by Number
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Button
				onClick={() => reset()}
				variant="contained"
				color="primary"
				className="mx-auto ml-16 mb-16 mt-16 w-auto normal-case"
				aria-label="filter"
				disabled={false}
				value="legacy"
			>
				Clear
			</Button>
		</Formsy>
	);
}

export default Inputs;
