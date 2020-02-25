import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import login from 'app/main/login/LoginConfig';
import cases from 'app/main/cases/CasesConfig';
import { DashboardConfig } from 'app/main/dashboard/DashboardConfig';

const routeConfigs = [login, cases, DashboardConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/dashboard" />
	}
];

export default routes;
