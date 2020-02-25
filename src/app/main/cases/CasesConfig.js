import React from 'react';
import { authRoles } from 'app/auth';

const CasesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.rm,
	routes: [
		{
			path: '/cases',
			component: React.lazy(() => import('./cases/Cases')),
			routes: [
				{
					path: '/cases',
					exact: true,
					component: React.lazy(() => import('./cases/Cases'))
				},
				{
					path: '/cases/:caseId/casedetails',
					exact: true,
					component: React.lazy(() => import('./case/Case'))
				}
			]
		}
	]
};

export default CasesConfig;
