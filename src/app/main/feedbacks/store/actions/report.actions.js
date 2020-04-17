import { getReport, updateReport } from '../../../../api/api';

export const GET_REPORT = 'GET_REPORT';

export function fetchReport(reportId) {
	const request = getReport(reportId);

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_REPORT,
				payload: response.body
			});
		});
	};
}

export async function update(reportId, adminId, values) {
	await updateReport(reportId, adminId, values);
}
