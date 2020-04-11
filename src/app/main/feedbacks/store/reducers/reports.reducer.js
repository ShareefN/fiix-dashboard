import * as Actions from '../actions/index';

const inialValues = {
	Reports: []
};

const Reports = function(state = Reports, action) {
	switch (action.type) {
		case Actions.GET_REPORTS: {
			return {
				...state,
				Reports: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default Reports;
