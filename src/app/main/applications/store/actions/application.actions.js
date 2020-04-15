import { getApplication, editApplciaton, approveApplication, rejectApplication } from '../../../../api/api';

export const GET_APPLICATION = 'GET_APPLICATION';

export function fetchApplication(applicationId) {
	const request = getApplication(applicationId);

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_APPLICATION,
				payload: response.body
			});
		});
	};
}

export async function edit(applicationId, values) {
	await editApplciaton(applicationId, values);
}

export async function approve(applicationId) {
	await approveApplication(applicationId);
}

export async function reject(applicationId, values) {
	await rejectApplication(applicationId, values);
}
