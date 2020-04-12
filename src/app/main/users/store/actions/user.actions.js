import { getUser, deactivateUser, activateUser } from '../../../../api/api';

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

export async function deactivate(userId, values) {
	await deactivateUser(userId, values);
}

export async function activate(userId) {
	await activateUser(userId);
}
