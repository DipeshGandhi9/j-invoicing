import React from 'react';
import { Route } from 'react-router-dom';
import UnauthenticatedLayout from '../pages/unauthenticated.layout';

const UnauthenticatedRoute = ({ component: Component, ...rest }) => {

    const Layout = UnauthenticatedLayout(Component);

    return (<Route {...rest}
        render={
            props => {
                return <Layout {...props}></Layout>
            }
        } />
    );

}

export default UnauthenticatedRoute;