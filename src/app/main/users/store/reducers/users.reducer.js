import * as Actions from '../actions/index';

const initalValues = {
	Users: []
};

const Users = function(state = initalValues, action) {
	switch (action.type) {
		case Actions.GET_USERS: {
			return {
				...state,
				Users: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default Users;