import React from 'react';

const FeedbackConfig = {
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
			path: '/feedback',
			component: React.lazy(() => import('./index.js')),
			routes: [
				{ path: '/feedback', exact: true, component: React.lazy(() => import('./feedbacks/index')) },
				{
					path: '/feedback/:feedbackId/feddbackdetails',
					exact: true,
					component: React.lazy(() => import('./feedback/feedback'))
				}
			]
		}
	]
};

export default FeedbackConfig;
