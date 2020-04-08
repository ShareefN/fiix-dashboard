import { statistics } from '../../../../api/api';

export const GET_STATISTICS = 'GET_STATISTICS';

export function fetchStats() {
	const request = statistics();
	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_STATISTICS,
				payload: response.body
			});
		});
	};
}
