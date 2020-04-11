import { getContractors } from '../../../../api/api';

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
