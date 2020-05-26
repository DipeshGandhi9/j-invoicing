import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from "@material-ui/core/Container"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, Grid, Card, CardHeader, CardContent, CardActions, TextField } from '@material-ui/core';
import Jambotron from '../components/jambotron.component';
import { doLogin } from '../actions/login.action'
import { connect } from 'react-redux';

const useStyles = (theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    cardContainer: {
        marginTop: theme.spacing(-8),
    },
    buttonContainer: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
});

class Login extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        isFetching: PropTypes.bool,

        doLogin: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.doLoginUser = this.doLoginUser.bind(this);
    }

    doLoginUser() {
        this.props.doLogin({ uname: 'Test' });
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Jambotron>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>

                                <Typography variant="h4" align='center' noWrap>
                                    Log in to Your Account
                                </Typography>
                            </Grid>

                            {/* <Grid item xs={12} align='right'>
                                <ButtonGroup color="inherit" aria-label="outlined inherit button group">
                                    <Button>One</Button>
                                    <Button>Two</Button>
                                    <Button>Three</Button>
                                </ButtonGroup>
                            </Grid> */}

                        </Grid>
                    </Container>
                </Jambotron>

                <Container maxWidth="lg" className={clsx(classes.container, classes.cardContainer)}>

                    <Grid container spacing={2}>
                        <Grid item xs={1} md={2}>

                        </Grid>

                        <Grid item xs={12} md={8}>


                            <Card>
                                <CardHeader>

                                </CardHeader>
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={1} md={2}>

                                        </Grid>

                                        <Grid item xs={12} md={8}>
                                            <form>
                                                <Grid container spacing={3}>

                                                    <Grid item xs={12} sm={12} md={12}  >
                                                        <Typography variant="h6" align="center" color='primary' > Please fill Login Details </Typography>
                                                    </Grid>

                                                    <Grid item xs={12} sm={12} md={12}  >
                                                        <TextField
                                                            id="userName"
                                                            type="text"
                                                            label="User Name"
                                                            helperText=""
                                                            required
                                                            fullWidth

                                                        />
                                                    </Grid>

                                                    <Grid item xs={12} sm={12} md={12} >
                                                        <TextField
                                                            id="password"
                                                            type="password"
                                                            label="Password"
                                                            helperText=""
                                                            required
                                                            fullWidth

                                                        />
                                                    </Grid>


                                                </Grid>
                                            </form>
                                        </Grid>

                                        <Grid item xs={1} md={2}>

                                        </Grid>
                                    </Grid>

                                </CardContent>
                                <CardActions>
                                    <Grid container spacing={2}>
                                        <Grid item xs={1} md={2}>

                                        </Grid>

                                        <Grid item xs={12} md={8} align='center' className={classes.buttonContainer}>
                                            <Button variant="outlined"> Reset </Button>
                                            <Button variant="contained" color="primary" disableElevation disable={this.props.isFetching ? "true" : "false"} onClick={this.doLoginUser}> {this.props.isFetching ? 'Logging...' : 'Login'} </Button>
                                        </Grid>

                                        <Grid item xs={1} md={2}>

                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>

                        </Grid>

                        <Grid item xs={1} md={2}>

                        </Grid>
                    </Grid>

                </Container>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isFetching: state.auth.isFetching,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        doLogin: (creds) => { dispatch(doLogin(creds)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Login));