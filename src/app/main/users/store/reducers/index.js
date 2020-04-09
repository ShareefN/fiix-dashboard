import { combineReducers } from 'redux';
import Users from './users.reducer';
import User from './user.reducer';

const reducer = combineReducers({
	Users,
	User
});

export default reducer;
