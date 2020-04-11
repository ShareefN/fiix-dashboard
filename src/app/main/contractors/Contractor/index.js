import React, { useState, useEffect } from 'react';
import { Icon, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import reducer from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions/index';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Avatar from '@material-ui/core/Avatar';
import ContractorDetails from './ContractorDetails';

function Contractor(props) {
	const dispatch = useDispatch();
	const [id] = useState(props.match.params.contractorId);

	useEffect(() => {
		dispatch(Actions.fetchContractor(id));
	}, []);

	const contractor = useSelector(({ contractorReducer }) => contractorReducer.Contractor.Contractor);

	return (
		<div>
			<div className="flex flex-col flex-1 px-24 pt-24 pb-24 bg-grey-300">
				<FuseAnimateGroup
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					<Typography
						className="normal-case flex items-center sm:mb-12"
						component={Link}
						role="button"
						to="/contractors"
						color="inherit"
					>
						<Icon className="mr-4 text-20">arrow_back</Icon>
						Contractors
					</Typography>
					<div className="flex flex-row">
						<Avatar
							alt="Remy Sharp"
							src="https://static.everypixel.com/ep-pixabay/1769/1576/0329/39271/17691576032939271355-avatar.png"
							className="mr-16"
						/>
						<div className="flex flex-col">
							{contractor && contractor.status !== 'active' ? (
								<>
									<Typography variant="h6" className="mt-4 text-red-600">
										{contractor ? contractor.name : '--'}
									</Typography>
									<Typography variant="subtitle2" className="text-red-600">
										{contractor ? contractor.status : '--'}
									</Typography>
								</>
							) : (
								<>
									<Typography variant="h6" className="mt-4">
										{contractor ? contractor.name : '--'}
									</Typography>
									<Typography variant="subtitle2">{contractor ? contractor.status : '--'}</Typography>
								</>
							)}
						</div>
					</div>
				</FuseAnimateGroup>
			</div>
			<ContractorDetails />
		</div>
	);
}

export default withReducer('contractorReducer', reducer)(withRouter(Contractor));
