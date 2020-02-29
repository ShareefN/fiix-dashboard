import React from 'react';

const ReviewsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/reviews',
			component: React.lazy(() => import('./index.js')),
			routes: [
				{
					path: '/reviews',
					exact: true,
					component: React.lazy(() => import('./reviews/index'))
				}
			]
		}
	]
};

export default ReviewsConfig;
