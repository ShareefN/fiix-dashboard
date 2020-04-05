import axios from 'axios';

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

	if (token) {
		Axios = axios.create({
			baseURL: process.env.REACT_APP_FIIX_API_URL,
			headers: {
				'Content-Type': 'application/json',
				Authorization: token
			}
		});
	} else {
		Axios = axios.create({
			baseURL: process.env.REACT_APP_FIIX_API_URL
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

export const getStats = () => {
	return Axios.post('/statistics/stats');
};
