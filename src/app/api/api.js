import r2 from 'r2';

const BASE_URL = process.env.REACT_APP_ONETWOSMILE_API_URL;
const API1_URL = process.env.REACT_APP_ONETWOSMILE_API_URL;
const API2_URL = process.env.REACT_APP_ONETWOSMILE_API_V2_URL;
const TOKEN_COOKIE_NAME = 'ONE_TWO_SMILE_TOKEN';
const USER_ID_SESSION_NAME = 'ONE_TWO_SMILE_USER_ID';
const onMessageListeners = [];
const onAuthorizationListeners = [];
let authorization;

function deleteCookie() {
	document.cookie = `${TOKEN_COOKIE_NAME}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
}

function logout() {
	deleteCookie();
	onAuthorizationListeners.forEach(callback => {
		callback('');
	});
}

function getFromSession(name) {
	return sessionStorage.getItem(name);
}

function setAuthorization(token, userId) {
	authorization = token;
	onAuthorizationListeners.forEach(callback => {
		callback(token);
	});
}

function getAuthorization() {
	return authorization;
}

function onMessage(callback) {
	onMessageListeners.push(callback);
}

function onAuthorization(callback) {
	onAuthorizationListeners.push(callback);
}

function checkError(res) {
	if (!res.ok) {
		console.log(`Error ${res.status}: ${res.statusText}`);
	}
}

function createRequest({ method }, type) {
	return async function request({ path, headers, json, body, callback, query }) {
		let qs = '';
		let url;
		const params = [];

		for (var key in json) {
			if (json[key] === '') {
				delete json[key];
			}
		}
		for (var key in query) {
			if (query[key] === '') {
				delete query[key];
			}
		}

		if (query) {
			qs = '?';

			for (const queryParam in query) {
				params.push(`${queryParam}=${query[queryParam]}`);
			}

			qs += params.join('&');
		}

		switch (type) {
			case 'type_1':
				url = API1_URL;
				break;
			case 'type_2':
				url = API2_URL;
				break;
			// case 'compressedFile':
			//   url = 'http://d2e66e96.ngrok.io/api/v1';
			//   break;
			default:
				url = BASE_URL;
				break;
		}
		try {
			const response = await r2(`${url}${path}${qs}`, {
				method,
				headers: Object.assign({ Authorization: authorization }, headers),
        body,
        json
			});

			await checkError(response);

			let responseBody = {};
			responseBody = await response.json();

			const notification = responseBody ? responseBody.message || responseBody.msg : undefined;
			if (notification) {
				onMessageListeners.forEach(callback => {
					callback(notification);
				});
			}
			return {
				ok: response.ok,
				statusCode: response.status,
				body: responseBody
			};
		} catch (error) {
			console.log(error);
			onMessageListeners.forEach(callback => {
				callback('Cant connect to the server');
			});
			throw error;
		}
	};
}

export const api = {
	formData: {
		post: createRequest({ method: 'POST' }, 'formData')
	},
	compressedFile: {
		post: createRequest({ method: 'POST' }, 'compressedFile')
	},
	v1: {
		post: createRequest({ method: 'POST' }),
		get: createRequest({ method: 'GET' }),
		put: createRequest({ method: 'PUT' }),
		delete: createRequest({ method: 'DELETE' })
	},
	v2: {
		put: createRequest({ method: 'PUT' }, 'type_2')
	}
};

export { setAuthorization };
