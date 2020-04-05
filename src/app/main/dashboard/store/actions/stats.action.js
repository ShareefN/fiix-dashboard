import { getStats } from '../../../../api/api';

export const GET_STATISTICS = 'GET_STATISTICS';

export function fetchStats() {
	const request = getStats();
	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_STATISTICS,
				payload: response.body
			});
		});
	};
}
