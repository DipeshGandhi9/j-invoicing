import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const drawerWidth = 240;

const useStyles = theme => ({
    list: {
        width: drawerWidth - 1,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    drawerPaper: {

        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    }
});

class SideMenu extends Component {

    constructor(props) {
        super(props);

        this.toggleDrawer = this.toggleDrawer.bind(this);

        this.state = {
            opened: props.open
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.open !== prevProps.open) {
            this.setState({
                opened: this.props.open
            })
        }
    }

    toggleDrawer() {
        this.setState({ opened: !this.state.opened });
        this.props.toggleDrawer();
    };

    list = (classes) => (
        <div className={clsx(classes.list)}
            role="presentation"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}  >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    render() {

        const { classes } = this.props;

        return (
            
            <Drawer
                variant="permanent"
                anchor="left"
                classes={{
                    paper: clsx(classes.drawerPaper, !this.state.opened && classes.drawerPaperClose),
                }}
                open={this.state.opened} >

                <div className={classes.toolbarIcon}>
                    <IconButton onClick={this.toggleDrawer} >
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                {this.list(classes)}
                <Divider />
            </Drawer>

        )
    }

}

export default withStyles(useStyles)(SideMenu);