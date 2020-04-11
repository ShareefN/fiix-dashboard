import * as Actions from '../actions/index';

const initalValues = {
	Application: []
};

const Application = function(state = initalValues, action) {
	switch (action.type) {
		case Actions.GET_APPLICATION: {
			return {
				...state,
				Application: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default Application;
