import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import Table from './table';

function Admins(props) {
	return (
		<div>
			<div className="flex flex-row items-center pl-24">
				<Icon className="list-item-icon text-22">supervisor_account</Icon>
				<Typography className="py-5 sm:py-24 ml-8" variant="h5">
					Admins
				</Typography>
			</div>
      <Table />
		</div>
	);
}

export default Admins;
