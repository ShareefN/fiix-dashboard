import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import Table from './table';

function Reviews(prop) {
	return (
		<div>
			<div className="flex flex-row items-center pl-24">
				<Icon className="list-item-icon text-44">rate_review</Icon>
				<Typography className="py-5 sm:py-24 ml-8" variant="h4">
					Reviews
				</Typography>
			</div>
      <Table />
		</div>
	);
}

export default Reviews;
