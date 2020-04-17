import { getUsers, createUser } from '../../../../api/api';

export const GET_USERS = 'GET_USERS';

export function fetchUsers() {
	const request = getUsers();

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_USERS,
				payload: response.body
			});
		});
	};
}

export async function create(values){
	await createUser(values)
}