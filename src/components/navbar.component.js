import React, { Component } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SideMenu from './sidemenu.component';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = (theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
});


class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true
        };
    }

    toggleDrawer = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />

                <AppBar
                    position="fixed"
                    color="default"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.toggleDrawer}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: this.state.open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={require("../assets/images/JyotiTechnsoft-Banner-Name.png")} alt="Jyoti Technosoft" className="m-10" width="150" onClick={this.toggleDrawer}></img>
                    </Toolbar>
                </AppBar>

                <SideMenu open={this.state.open} toggleDrawer={this.toggleDrawer} />

            </React.Fragment>
        )
    }

}

export default withStyles(useStyles)(Navbar);