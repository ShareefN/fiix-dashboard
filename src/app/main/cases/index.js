import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import * as Actions from 'app/main/cases/store/actions';
// import { useDispatch } from 'react-redux';
import { renderRoutes } from 'react-router-config';

function CasesTable(props) {
	// const dispatch = useDispatch();
	useEffect(() => {
		return () => {
			// dispatch(Actions.resetFilter());
		};
	}, []);
	return <>{renderRoutes(props.routes)}</>;
}
export default withRouter(CasesTable);
