import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

import Navbar from '../components/navbar.component';

const useStyles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
});

class Layout extends Component {

    render (){
        const { classes } = this.props;

        return (
            <div className={classes.root} >
                
                <Navbar />

                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    
                    { this.props.children }
                </main>


            </div>
        );
    }


}

export default withStyles(useStyles)(Layout);
