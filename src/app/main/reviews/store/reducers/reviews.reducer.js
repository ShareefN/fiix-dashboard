import * as Actions from '../actions/index';

const inialValues = {
	Reviews: []
};

const Reviews = function(state = inialValues, action) {
	switch (action.type) {
		case Actions.GET_REVIEWS: {
			return {
				...state,
				Reviews: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default Reviews;
