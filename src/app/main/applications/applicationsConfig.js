import React from 'react';

const ApplicationsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/applications',
			component: React.lazy(() => import('./index.js')),
			routes: [
				{
					path: '/applications',
					exact: true,
					component: React.lazy(() => import('./applications/Applications'))
				}
			]
		}
	]
};

export default ApplicationsConfig;