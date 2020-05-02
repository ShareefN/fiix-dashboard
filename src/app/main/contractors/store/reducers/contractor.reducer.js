import * as Actions from '../actions/index';

const initalValues = {
	Contractor: [],
	Reviews: []
};

const Contractor = function(state = initalValues, action) {
	switch (action.type) {
		case Actions.GET_CONTRACTOR: {
			return {
				...state,
				Contractor: action.payload
			};
		}
		case Actions.GET_CONTRACTORS_REVIEWS: {
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

export default Contractor;
