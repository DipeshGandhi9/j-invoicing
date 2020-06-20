import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SideMenu from './sidemenu.component';
import { Grid } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { logoutUser } from '../actions/logout.action';
import { connect } from 'react-redux';

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

    static propTypes = {
        isFetching: PropTypes.bool,

        doLogout: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.state = {
            open: true,
            anchorEl: null,
        };

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleMenuClose = this.handleMenuClose.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleMenuClick(event) {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleMenuClose() {
        this.setState({ anchorEl: null });
    }

    handleLogout() {
        this.handleMenuClose();
        this.props.doLogout();
    }

    toggleDrawer = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state

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

                        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={this.handleMenuClick}
                            >
                                <AccountCircle />
                            </IconButton>
                        </Grid>


                    </Toolbar>

                    <div>

                    </div>

                </AppBar>

                <SideMenu history={this.props.history} open={this.state.open} toggleDrawer={this.toggleDrawer} />

                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    id='primary-search-account-menu'
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={Boolean(anchorEl)}
                    onClose={this.handleMenuClose}
                >
                    <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleLogout}>Log out</MenuItem>
                </Menu>

            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        doLogout: () => { dispatch(logoutUser()) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(useStyles)(Navbar));