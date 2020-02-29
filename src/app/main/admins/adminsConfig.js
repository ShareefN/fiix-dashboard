import React from 'react';

const AdminsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/admins',
			component: React.lazy(() => import('./index.js')),
			routes: [
				{
					path: '/admins',
					exact: true,
					component: React.lazy(() => import('./admins/Admins'))
				}
			]
		}
	]
};

export default AdminsConfig;
