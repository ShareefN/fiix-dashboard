import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import login from 'app/main/login/LoginConfig';
import contractors from 'app/main/contractors/contractorsConfig';
import users from 'app/main/users/usersConfig';
import DashboardConfig from 'app/main/dashboard/DashboardConfig';
import admins from 'app/main/admins/adminsConfig';
import applications from 'app/main/applications/applicationsConfig';
import reviews from 'app/main/reviews/reviewsConfig';
import feedbacks from 'app/main/feedbacks/feedbackConfig';
import testCases from 'app/main/testCases/testCasesConfig';

const routeConfigs = [login, testCases, feedbacks, contractors, users,
	 DashboardConfig, admins, applications, reviews];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/dashboard" />
	}
];

export default routes;
