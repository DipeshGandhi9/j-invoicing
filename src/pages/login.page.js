import React, { Component } from 'react';
import clsx from 'clsx';
import Container from "@material-ui/core/Container"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, Grid, Card, CardHeader, CardContent, CardActions, TextField } from '@material-ui/core';
import Jambotron from '../components/jambotron.component';
import auth from '../routes/auth';


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
    constructor(props) {
        super(props);
    this.doLogin = this.doLogin.bind(this);
}

doLogin() {
    console.log('do login called...');
    // auth.isAuthenticated();
    auth.doLogin(() => {
        // console.log( this.props.history);
        this.props.history.push('/dashboard')
    });
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
                                            <Button variant="contained" color="primary" disableElevation onClick={this.doLogin}> Login </Button>
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

export default withStyles(useStyles)(Login);