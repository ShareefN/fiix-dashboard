import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { setAuthorization, login } from 'app/api/api';
/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors();
		this.handleAuthentication();
	}

	setInterceptors = () => {
		axios.interceptors.response.use(
			response => {
				return response;
			},
			err => {
				return new Promise((resolve, reject) => {
					if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
						// if you ever get an unauthorized response, logout the user
						this.emit('onAutoLogout', 'Invalid access_token');
						this.setSession(null);
					}
					throw err;
				});
			}
		);
	};

	handleAuthentication = () => {
		const access_token = this.getAccessToken();

		if (!access_token) {
			this.emit('onNoAccessToken');

			return;
		}

		if (this.isAuthTokenValid(access_token)) {
			setAuthorization(access_token);
			this.setSession(access_token);
			this.emit('onAutoLogin', true);
		} else {
			this.setSession(null);
			this.emit('onAutoLogout', 'access_token expired');
		}
	};

	createUser = data => {
		return new Promise((resolve, reject) => {
			axios.post('/api/auth/register', data).then(response => {
				if (response.data.user) {
					this.setSession(response.data.access_token);
					resolve(response.data.user);
				} else {
					reject(response.data.error);
				}
			});
		});
	};

	signInWithEmailAndPassword = (email, password) => {
		return new Promise((resolve, reject) => {
			login({ email: email, password: password })
				.then(response => {
					localStorage.setItem('admin_id', response.body.Admin.id);
					setAuthorization(response.body.token);
					this.setSession(response.body.token);
					resolve(jwtDecode(response.body.token));
				})
				.catch(error => reject(error));
		});
	};

	signInWithToken = () => {
		try {
			const access_token = this.getAccessToken();
			let decodedToken = jwtDecode(access_token);
			return new Promise((resolve, reject) => {
				let c = {
					role: decodedToken.admin.role,
					data: {
						displayName: decodedToken.admin.name,
						email: decodedToken.admin.email,
						id: decodedToken.admin.id
					}
				};
				resolve(c);
			});
		} catch (error) {
			console.log(error);
			this.logout();
		}
	};

	updateUserData = user => {
		return axios.post('/api/auth/user/update', {
			user
		});
	};

	setSession = access_token => {
		if (access_token) {
			localStorage.setItem('jwt_access_token', access_token);
			axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
		} else {
			localStorage.removeItem('jwt_access_token');
			localStorage.removeItem('admin_id')
			delete axios.defaults.headers.common.Authorization;
		}
	};

	logout = () => {
		this.setSession(null);
	};

	isAuthTokenValid = access_token => {
		if (!access_token) {
			return false;
		}
		try {
			const decoded = jwtDecode(access_token);

			const currentTime = Date.now() / 1000;
			if (decoded.exp < currentTime) {
				console.warn('access token expired');
				return false;
			}

			return true;
		} catch (error) {
			console.log(error);
		}
	};

	getAccessToken = () => {
		return window.localStorage.getItem('jwt_access_token');
	};
}

const instance = new JwtService();

export default instance;
