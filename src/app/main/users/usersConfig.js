import React from 'react';

const UsersConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/users',
			component: React.lazy(() => import('./index.js')),
			routes: [
				{
					path: '/users',
					exact: true,
					component: React.lazy(() => import('./Users/index'))
				},
				{
					path: '/users/:userId/userdetails',
					exact: true,
					component: React.lazy(() => import('./User/index'))
				}
			]
		}
	]
};

export default UsersConfig;
