import React from 'react';

const ContractorsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/contractors',
			component: React.lazy(() => import('./index.js')),
			routes: [
				{
					path: '/contractors',
					exact: true,
					component: React.lazy(() => import('./Contractors/index'))
				},
				{
					path: '/contractors/:contractorId/contractordetails',
					exact: true,
					component: React.lazy(() => import('./Contractor/index'))
				}
			]
		}
	]
};

export default ContractorsConfig;
