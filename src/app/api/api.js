import axios from 'axios';

const BASE_URL = process.env.REACT_APP_FIIX_API_URL;
const API1_URL = process.env.REACT_APP_FIIX_API_URL;

const onAuthorizationListeners = [];

export const setAuthorization = token => {
	let authorization = 'Bearer ' + token; //Bearer type
	onAuthorizationListeners.forEach(callback => {
		callback(token);
	});
};

var Axios = null;

const initAxios = () => {
	const token = localStorage.getItem('FIIX_ADMIN_TOKEN');
	try {
		Axios = axios.create({
			baseURL: 'https://fiix-app.herokuapp.com',
			header: {
				'x-auth-token': token
			}
		});
	} catch {
		Axios = axios.create({
			baseURL: 'https://fiix-app.herokuapp.com'
		});
	}
};

initAxios();

export const retrieveLocalToken = () => {
	initAxios();
};

export const login = result => {
	return Axios.post('/admins/auth/login', result);
};
