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
				},
				{
					path: '/admins/:adminId/adminDetails',
					exact: true,
					component: React.lazy(() => import('./admin/index.js'))
				}
			]
		}
	]
};

export default AdminsConfig;
