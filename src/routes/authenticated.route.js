import React from 'react';
import auth from './auth';
import { Route, Redirect } from 'react-router-dom';
import AuthenticatedLayout from '../pages/authenticated.layout';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {

    const AuthenticatedLayoutComponent = AuthenticatedLayout(Component);

    return (<Route {...rest}
        render={
            props => {
                if (auth.isAuthenticated()) {
                    return <AuthenticatedLayoutComponent {...props}></AuthenticatedLayoutComponent>
                } else {
                    return <Redirect to={
                        {
                            pathname: '/login',
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }

            }
        } />
    );



}

export default AuthenticatedRoute;