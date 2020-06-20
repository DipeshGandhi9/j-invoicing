import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';


const useStyles = (theme) => ({
    base: {
        height: "200px",
        background: theme.palette.primary.main,
        color: theme.palette.info.contrastText,
    },
});

class Jambotron extends Component {

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.base}  >
                {this.props.children}
            </div>
        );
    }

}

export default withStyles(useStyles)(Jambotron);