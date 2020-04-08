import { getAdmins } from '../../../../api/api';

export const GET_ADMINS = 'GET_ADMINS';

export function fetchAdmins() {
	const request = getAdmins();

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_ADMINS,
				payload: response.body
			});
		});
	};
}
