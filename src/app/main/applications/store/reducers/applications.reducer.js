import * as Actions from '../actions/index';

const initalValues = {
	Applications: []
};

const Applications = function(state = initalValues, action) {
	switch (action.type) {
		case Actions.GET_APPLICATIONS: {
			return {
				...state,
				Applications: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default Applications;
