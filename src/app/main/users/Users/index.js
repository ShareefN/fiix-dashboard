import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import Table from './table';

const Users = props => {
	return (
		<div>
			<div className="flex flex-row items-center pl-24">
				<Icon className="list-item-icon text-28">insert_chart</Icon>
				<Typography className="py-5 sm:py-24 ml-8" variant="h4">
					Users
				</Typography>
			</div>
			<Table />
		</div>
	);
};

export default Users;
