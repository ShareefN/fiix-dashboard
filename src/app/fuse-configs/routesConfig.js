import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import login from 'app/main/login/LoginConfig';
import contractors from 'app/main/contractors/contractorsConfig';
import users from 'app/main/users/usersConfig'
import { DashboardConfig } from 'app/main/dashboard/DashboardConfig';

const routeConfigs = [login, contractors, users, DashboardConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/dashboard" />
	}
];

export default routes;
