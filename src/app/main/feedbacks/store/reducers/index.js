import { combineReducers } from 'redux';
import Reports from './reports.reducer';
import Report from './report.reducer';

const reducer = combineReducers({
	Reports,
	Report
});

export default reducer;
