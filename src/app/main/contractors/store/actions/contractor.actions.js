import {
	getContractor,
	deactivateContractor,
	activateContractor,
	editContractor,
	fetchContractorsReviews,
	deleteContractorReview
} from '../../../../api/api';

export const GET_CONTRACTOR = 'GET_CONTRACTOR';
export const GET_CONTRACTORS_REVIEWS = 'GET_CONTRACTORS_REVIEWS';

export function fetchContractor(contractorId) {
	const request = getContractor(contractorId);

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_CONTRACTOR,
				payload: response.body
			});
		});
	};
}

export function getReviews(contractorId) {
	const request = fetchContractorsReviews(contractorId);

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_CONTRACTORS_REVIEWS,
				payload: response.body
			});
		});
	};
}

export async function deactivate(contractorId, values) {
	await deactivateContractor(contractorId, values);
}

export async function activate(contractorId, values) {
	await activateContractor(contractorId, values);
}

export async function updateContractor(contractorId, values) {
	await editContractor(contractorId, values);
}

export async function deleteReview(contractorId, reviewId) {
	await deleteContractorReview(contractorId, reviewId);
}
