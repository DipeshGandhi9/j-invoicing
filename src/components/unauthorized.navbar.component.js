import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import auth from '../routes/auth';

const useStyles = (theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    title: {
        flexGrow: 1,
    },
});


class UnAuthNavbar extends Component {

    constructor(props) {
        super(props);
        this.doLogin = this.doLogin.bind(this);
    }

    doLogin() {
        console.log('do login called...');
        // auth.isAuthenticated();
        auth.doLogin(() => {
            // console.log( this.props.history);
            this.props.history.push('/home')
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />

                <AppBar
                    position="fixed"
                    color="default"
                    className={classes.appBar}
                >
                    <Toolbar>
                        <div className={classes.title}>
                            <img src={require("../assets/images/JyotiTechnsoft-Banner-Name.png")} alt="Jyoti Technosoft" className="m-10" width="150" onClick={this.toggleDrawer}></img>
                        </div>
                        <Button variant="contained" color="primary" disableElevation onClick={this.doLogin}>Login</Button>
                    </Toolbar>

                </AppBar>

            </React.Fragment>
        )
    }

}

export default withStyles(useStyles)(UnAuthNavbar);