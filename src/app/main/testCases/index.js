import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import * as Actions from 'app/main/cases/store/actions';
// import { useDispatch } from 'react-redux';
import { renderRoutes } from 'react-router-config';

function TestCases(props) {
	// const dispatch = useDispatch();
	useEffect(() => {
		return () => {
			// dispatch(Actions.resetFilter());
		};
	}, []);
	return <>{renderRoutes(props.route.routes)}</>;
}
export default withRouter(TestCases);
