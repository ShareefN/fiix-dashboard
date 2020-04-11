import { combineReducers } from 'redux';
import Contractors from './contractors.reducer';
import Contractor from './contractor.reducer';

const reducer = combineReducers({
	Contractors,
	Contractor
});

export default reducer;
