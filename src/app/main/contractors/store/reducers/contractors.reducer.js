import * as Actions from '../actions/index';

const initalValues = {
	Contractors: []
};

const Contractors = function(state = initalValues, action) {
	switch (action.type) {
		case Actions.GET_CONTRACTORS: {
			return {
				...state,
				Contractors: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default Contractors;
