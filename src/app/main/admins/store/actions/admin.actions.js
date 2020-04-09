import { getAdmin } from '../../../../api/api';

export const GET_ADMIN = 'GET_ADMIN';

export function fetchAdmin(id) {
	const request = getAdmin(id);

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_ADMIN,
				payload: response.body
			});
		});
	};
}
