import * as Actions from '../actions/index';

const initalValues = {
	Report: []
};

const Report = function(state = initalValues, action) {
	switch (action.type) {
		case Actions.GET_REPORT: {
			return {
				...state,
				Report: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default Report;
