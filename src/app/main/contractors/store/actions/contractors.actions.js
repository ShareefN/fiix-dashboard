import { getContractors, createContractor } from '../../../../api/api';

export const GET_CONTRACTORS = 'GET_CONTRACTORS';

export function fetchContractors() {
	const request = getContractors();

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_CONTRACTORS,
				payload: response.body
			});
		});
	};
}

export function fitlerContractors(contractors) {
	return dispatch => {
		dispatch({
			type: GET_CONTRACTORS,
			payload: contractors
		});
	};
}

export async function create(values) {
	await createContractor(values);
}
