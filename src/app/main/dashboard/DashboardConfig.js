import React from 'react';

export const DashboardConfig = {
	settings: {
		layout: {
			config: {
				footer: {
					display: false
				}
			}
		}
	},
	routes: [
		{
			path: '/dashboard',
			component: React.lazy(() => import('./Dashboard'))
		}
	]
};
