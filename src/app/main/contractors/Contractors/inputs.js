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
	const contractors = useSelector(({ contractorsReducer }) => contractorsReducer.Contractors.Contractors);

	const searchFilterName = text => {
		const newData = contractors.filter(item => {
			const itemData = `${item.name.toUpperCase()}   
      ${item.name.toUpperCase()}`;

			const textData = text.toUpperCase();

			return itemData.indexOf(textData) > -1;
		});
		dispatch(Actions.fitlerContractors(newData));
	};

	const searchByNumber = text => {
		const newData = contractors.filter(item => {
			const itemData = `${item.number.toUpperCase()}`;
			const textData = text.toUpperCase();

			return itemData.indexOf(textData) > -1;
		});
		dispatch(Actions.fitlerContractors(newData));
	};

	const submit = model => {
		if (model.name) {
			searchFilterName(model.name);
		}
		if (model.number) {
			searchByNumber(model.number);
		}
	};

	const reset = () => {
    formRef.current.reset('');
		dispatch(Actions.fetchContractors());
	};

	return (
		<Formsy onValidSubmit={submit} ref={formRef} onReset={reset}>
			<Grid container spacing={2} className="mb-16">
				<Grid container spacing={1}>
					<Grid item xl={3} lg={3} md={3} sm={3}>
						<TextFieldFormsy
							className={' my-10 mx-10 w-full'}
							type="text"
							name="name"
							label="Name"
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
							Filter by Name
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
