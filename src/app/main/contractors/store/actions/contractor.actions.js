import { getContractor, deactivateContractor, activateContractor } from '../../../../api/api';

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

export async function deactivate(contractorId, values) {
	await deactivateContractor(contractorId, values);
}

export async function activate(contractorId, values) {
	await activateContractor(contractorId, values);
}
