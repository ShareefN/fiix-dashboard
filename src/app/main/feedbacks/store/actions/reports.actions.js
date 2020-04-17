import { getRports } from '../../../../api/api';

export const GET_REPORTS = 'GET_REPORTS';

export function fetchReports() {
	const request = getRports();

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_REPORTS,
				payload: response.body
			});
		});
	};
}
