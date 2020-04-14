import { getReviews, deleteReview } from '../../../../api/api';

export const GET_REVIEWS = 'GET_REVIEWS';

export function fetchReviews() {
	const request = getReviews();

	return dispatch => {
		request.then(response => {
			dispatch({
				type: GET_REVIEWS,
				payload: response.body
			});
		});
	};
}

export async function removeReview(reviewId) {
	await deleteReview(reviewId);
}
