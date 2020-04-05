import React from 'react';

const DashboardConfig = {
	routes: [
		{
			path: '/dashboard',
			component: React.lazy(() => import('./Dashboard'))
		}
	]
};

export default DashboardConfig
