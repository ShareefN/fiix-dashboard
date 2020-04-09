import * as Actions from '../actions/index';

const initalValues = {
	User: []
};

const User = function(state = initalValues, action) {
	switch (action.type) {
		case Actions.GET_USER: {
			return {
				...state,
				User: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default User;
