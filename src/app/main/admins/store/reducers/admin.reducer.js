import * as Actions from '../actions/admin.actions';

const initalValues = {
	Admin: []
};

const Admin = function(state = initalValues, action) {
	switch (action.type) {
		case Actions.GET_ADMIN: {
			return {
				Admin: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default Admin;
