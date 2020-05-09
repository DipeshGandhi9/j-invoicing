import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../components/navbar.component';

const useStyles = (theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        //padding: theme.spacing(3), 
        minHeight: '100vh',
    },
});

class Layout extends Component {

    render() {
        
        const {classes} = this.props;
        console.log(this.props);

        return (
            <div className={classes.root}>
                <CssBaseline />

                <Navbar />

                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    {this.props.children}
                </main>
            </div>
        )
    };
}

export default withStyles(useStyles)(Layout);
