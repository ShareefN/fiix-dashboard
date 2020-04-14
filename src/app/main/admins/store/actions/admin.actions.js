import { getAdmin, deactivateAdmin, activateAdmin, editAdmin } from '../../../../api/api';

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

export async function deactivate(adminId, values) {
	await deactivateAdmin(adminId, values);
}

export async function active(adminId) {
	await activateAdmin(adminId);
}

export async function edit(adminId, values) {
	await editAdmin(adminId, values);
}
