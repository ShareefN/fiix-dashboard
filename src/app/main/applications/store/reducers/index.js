import { combineReducers } from 'redux';
import Applications from './applications.reducer';
import Application from './application.reducer';

const reducer = combineReducers({
	Applications,
	Application
});

export default reducer;
