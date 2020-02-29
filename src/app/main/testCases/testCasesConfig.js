import React from 'react';

const TestCasesConfig = {
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
			path: '/testcases',
			component: React.lazy(() => import('./index.js')),
			routes: [{ path: '/testcases', exact: true, component: React.lazy(() => import('./TestCases/index')) }]
		}
	]
};

export default TestCasesConfig;
