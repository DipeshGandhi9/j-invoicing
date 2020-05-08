import React, { Component } from 'react';
import Container from "@material-ui/core/Container"
import { withStyles } from '@material-ui/core';

const useStyles = (theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
});

class Home extends Component {

    render() {
        const { classes } = this.props;

        return (
            <Container maxWidth="lg" className={classes.container}>
                <div> <h1>Home View</h1></div>
            </Container>
        )
    }

}

export default withStyles(useStyles)(Home);