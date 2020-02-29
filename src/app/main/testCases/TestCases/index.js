import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import Table from './table';

function TestCases(props) {
	return (
		<div>
			<div className="flex flex-row items-center pl-24">
				<Icon className="list-item-icon text-44">cast_for_education</Icon>
				<Typography className="py-5 sm:py-24 ml-8" variant="h4">
					Test Cases
				</Typography>
			</div>
      <Table />
		</div>
	);
}

export default TestCases;
