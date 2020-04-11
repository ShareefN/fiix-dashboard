import { getApplication } from '../../../../api/api';

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
