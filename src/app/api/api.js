const BASE_URL = process.env.REACT_APP_FIIX_API_URL;
const API1_URL = process.env.REACT_APP_FIIX_API_URL;
const onMessageListeners = [];
const onAuthorizationListeners = [];
let authorization;

function setAuthorization(token) {
	authorization = 'Bearer ' + token; //Bearer type
	onAuthorizationListeners.forEach(callback => {
		callback(token);
	});
}

function onMessage(callback) {
	onMessageListeners.push(callback);
}

const callApiUsingFunction = async evt => {
	const { callUrl, method } = evt;
	let { headers } = evt;

	let data, res;
	if (evt.json) {
		headers = Object.assign({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, headers);
		data = JSON.stringify(evt.json);
	} else {
		data = evt.body;
	}
	const response = await fetch(callUrl, {
		method,
		headers,
		body: data
	}).catch(error => ({
		body: error
	}));

	try {
		res = {
			statusCode: response.status,
			ok: response.ok,
			body: await response.json()
		};
	} catch (error) {
		res = {
			statusCode: response.status,
			ok: response.ok,
			body: error
		};
	}
	return res;
};

function createRequest({ method }, type) {
	return async function request({ path, headers, json, body, callback, query }) {
		let qs = '';
		let url;
		const params = [];

		for (let key in json) {
			if (json[key] === '') {
				delete json[key];
			}
		}
		for (let key in query) {
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
			default:
				url = BASE_URL;
				break;
		}
		return new Promise(async (resolve, reject) => {
			let response = await callApiUsingFunction({
				callUrl: `${url}${path}${qs}`,
				method,
				headers: Object.assign({ Authorization: authorization }, headers),
				json,
				body
			});
			const notification = response.body ? response.body.message || response.body.msg : undefined;
			if (response.statusCode !== 200) {
				onMessageListeners.forEach(callback => {
					callback(notification);
				});
				return reject(notification);
			}
			return resolve(response);
		});
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

function login(values) {
	return api.v1.post({ path: `/admins/auth/login`, json: values });
}

export { setAuthorization, login, onMessage };
