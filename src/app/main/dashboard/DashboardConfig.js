import React from 'react';
import { withRouter } from 'react-router-dom';

let DashboardConfig;

if (localStorage.getItem('FIIX_ADMIN_TOKEN')) {
	DashboardConfig = {
		routes: [
			{
				path: '/dashboard',
				component: React.lazy(() => import('./Dashboard'))
			}
		]
	};
} else {
	DashboardConfig = {
		routes: [
			{
				path: '/dashboard',
				component: React.lazy(() => import('./Dashboard'))
			}
		]
	};
}

export default withRouter(DashboardConfig);
