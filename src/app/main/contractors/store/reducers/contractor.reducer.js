import * as Actions from '../actions/index';

const initalValues = {
	Contractor: []
};

const Contractor = function(state = initalValues, action) {
	switch (action.type) {
		case Actions.GET_CONTRACTOR: {
			return {
				...state,
				Contractor: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default Contractor;
