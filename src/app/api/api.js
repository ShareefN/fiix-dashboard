const BASE_URL = 'http://127.0.0.1:3030';
// const BASE_URL = process.env.REACT_APP_FIIX_API_URL;
const API1_URL = 'http://127.0.0.1:3030';
// const API1_URL = process.env.REACT_APP_FIIX_API_URL;
const onMessageListeners = [];
const onAuthorizationListeners = [];
let authorization;

function setAuthorization(token) {
	authorization = 'Bearer ' + localStorage.getItem('jwt_access_token'); //Bearer type
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
		headers = headers;
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
				headers: Object.assign(
					{
						Authorization: localStorage.getItem('jwt_access_token'),
						'Access-Control-Allow-Origin': '*',
						'Content-Type': 'application/json'
					},
					headers
				),
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

function statistics() {
	return api.v1.post({ path: '/statistics/stats' });
}

function getAdmins() {
	return api.v1.get({ path: '/admins/admins' });
}

function getAdmin(adminId) {
	return api.v1.get({ path: `/admins/admin/${adminId}` });
}

function getUsers() {
	return api.v1.get({ path: '/admins/users' });
}

function getUser(userId) {
	return api.v1.get({ path: `/admins/user/${userId}` });
}

function getContractors() {
	return api.v1.get({ path: '/admins/contractors' });
}

function getContractor(contractorId) {
	return api.v1.get({ path: `/admins/contractor/${contractorId}` });
}

function getReviews() {
	return api.v1.get({ path: '/admins/reviews' });
}

function getRports() {
	return api.v1.get({ path: '/admins/reports' });
}

function getTestCases() {
	return api.v1.get({ path: '/admins/testcases' });
}

function getApplications() {
	return api.v1.get({ path: '/admins/applications' });
}

function getApplication(applicationId) {
	return api.v1.get({ path: `/admins/application/${applicationId}` });
}

function updatePassword(result) {
	return api.v1.put({ path: `/admins/update/admin/password/${localStorage.getItem('admin_id')}`, json: result });
}

export {
	setAuthorization,
	login,
	onMessage,
	statistics,
	getAdmins,
	getAdmin,
	getUsers,
	getUser,
	getContractors,
	getContractor,
	getReviews,
	getRports,
	getTestCases,
	getApplications,
	getApplication,
	updatePassword
};
