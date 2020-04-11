import { getContractor } from '../../../../api/api';

export const GET_CONTRACTOR = 'GET_CONTRACTOR';

export function fetchContractor(contractorId) {
	const request = getContractor(contractorId);

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_CONTRACTOR,
				payload: response.body
			});
		});
	};
}
