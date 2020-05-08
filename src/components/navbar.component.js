import clsx from 'clsx';
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SideMenu from './sidemenu.component';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = (theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
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
    menuButtonHidden: {
        display: 'none',
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
                <AppBar position="fixed" color="default" className={clsx(classes.appBar, { [classes.appBarShift]: this.state.open })}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
                            onClick={this.toggleDrawer}
                        ><MenuIcon />
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