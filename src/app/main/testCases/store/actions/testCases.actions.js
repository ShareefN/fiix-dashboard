import { getTestCases } from '../../../../api/api';

export const GET_TEST_CASES = 'GET_TEST_CASES';

export function fetchTestCases() {
	const request = getTestCases();

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_TEST_CASES,
				payload: response.body
			});
		});
	};
}
