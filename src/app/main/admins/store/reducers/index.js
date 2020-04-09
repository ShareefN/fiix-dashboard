import { combineReducers } from 'redux';
import Admins from './admins.reducer';
import Admin from './admin.reducer';

const reducer = combineReducers({
	Admins,
	Admin
});

export default reducer;
