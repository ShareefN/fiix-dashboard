import React from 'react';
import { authRoles } from "app/auth";

 export const ResetConfig = {
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
			path: '/reset-password',
			component: React.lazy(() => import('./reset.js'))
		}
	]
};