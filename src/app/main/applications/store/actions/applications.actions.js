import { getApplications } from '../../../../api/api';

export const GET_APPLICATIONS = 'GET_APPLICATIONS';

export function fetchApplications() {
	const request = getApplications();

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_APPLICATIONS,
				payload: response.body
			});
		});
	};
}
