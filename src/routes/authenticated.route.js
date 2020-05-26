import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticatedLayout from '../pages/authenticated.layout';
import { connect } from 'react-redux';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {

    const AuthenticatedLayoutComponent = AuthenticatedLayout(Component);

    return (<Route {...rest}
        render={
            props => {
                if (rest.isAuthenticated) {
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

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
};

export default connect(mapStateToProps)(AuthenticatedRoute);