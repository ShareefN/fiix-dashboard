import * as Actions from '../actions/index';

const initalValues = {
	Admins: []
};

const Admins = function(state = initalValues, action) {
	switch (action.type) {
		case Actions.GET_ADMINS: {
			return { ...state, Admins: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default Admins