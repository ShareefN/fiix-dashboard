import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import Inputs from './inputs';
import Table from './table';

function Applications(props) {
	return (
		<div>
      <Inputs />
			<div className="flex flex-row items-center pl-24">
				<Icon className="list-item-icon text-22">insert_chart</Icon>
				<Typography className="py-5 sm:py-24 ml-8" variant="h6">
					Applications
				</Typography>
			</div>
      <Table />
		</div>
	);
}

export default Applications;
