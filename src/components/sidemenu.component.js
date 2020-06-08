import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles, withTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BusinessIcon from '@material-ui/icons/Business';
import DashboardIcon from '@material-ui/icons/Dashboard';
import QueueIcon from '@material-ui/icons/Queue';
import ReceiptIcon from '@material-ui/icons/Receipt';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AppsIcon from '@material-ui/icons/Apps';

const drawerWidth = 240;

const useStyles = (theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
});


class SideMenu extends Component {

    constructor(props) {
        super(props);

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.goTo = this.goTo.bind(this);

        this.state = {
            open: props.open
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.open !== prevProps.open) {
            this.setState({
                open: this.props.open
            })
        }
    }

    toggleDrawer() {
        this.setState({ open: !this.state.opened });
        this.props.toggleDrawer();
    };

    goTo(link) {
        this.props.history.push(link);
    }

    getIcon = (value) => {
        switch (value) {
            case 'Dashboard':
                return <DashboardIcon />;
            case 'Invoice':
                return <ReceiptIcon />;
            case 'Customer':
                return <RecentActorsIcon />;
            case 'Products':
                return <QueueIcon />;
            case 'Organization':
                return <BusinessIcon />;
            default:
                return <AppsIcon />;
        }
    }

    listItems = (classes) => (
        <div className={clsx(classes.list)}
            role="presentation"
        // onClick={this.toggleDrawer}
        // onKeyDown={this.toggleDrawer}
        >
            <List>
                {['Dashboard', 'Invoice', 'Customer'].map((text, index) => (
                    <ListItem button key={text} onClick={() => this.goTo(text.toLowerCase())}>
                        <ListItemIcon>{this.getIcon(text)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Products', 'Organization'].map((text, index) => (
                    <ListItem button key={text} onClick={() => this.goTo(text.toLowerCase())}>
                        <ListItemIcon>{this.getIcon(text)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    render() {

        const { classes, theme } = this.props;

        return (

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: this.state.open,
                    [classes.drawerClose]: !this.state.open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={this.toggleDrawer}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                {this.listItems(classes)}
            </Drawer>

        )
    }

}

const sideMenu = withTheme(SideMenu);

export default withStyles(useStyles)(sideMenu);