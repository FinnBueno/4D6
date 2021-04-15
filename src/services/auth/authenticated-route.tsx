import React from 'react';
import { Route, RouteComponentProps, Redirect } from 'react-router-dom';
import { useAuth } from './context';

/**
 * This route only works if the user is authenticated
 */
export const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = (props) => {
	const auth = useAuth();

	return auth?.isLoggedIn ? (
		<Route
			path={props.path}
			component={props.component}
		/>
	) : (
		<Redirect to='/landing' />
	);
};

interface AuthenticatedRouteProps {
	path: string;
	component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}
