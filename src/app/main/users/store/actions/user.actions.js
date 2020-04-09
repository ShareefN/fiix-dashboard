import { getUser } from '../../../../api/api';

export const GET_USER = 'GET_USER';

export function fetchUser(userId) {
	const request = getUser(userId);

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_USER,
				payload: response.body
			});
		});
	};
}
