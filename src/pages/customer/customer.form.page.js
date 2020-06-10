import React, { Component } from 'react';
import clsx from 'clsx';
import Container from "@material-ui/core/Container"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles, Grid, Card, CardHeader, CardContent, CardActions, TextField } from '@material-ui/core';
import Jambotron from '../../components/jambotron.component';


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
    },
    fieldGroup: {
        padding: theme.spacing(4),
    }

});

class Customer extends Component {

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Jambotron>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>

                                <Typography variant="h4" align='left' noWrap>
                                    Customer
                                </Typography>
                            </Grid>

                            <Grid item xs={12} align='right'>
                                <ButtonGroup color="inherit" aria-label="outlined inherit button group">
                                    <Button>One</Button>
                                    <Button>Two</Button>
                                    <Button>Three</Button>
                                </ButtonGroup>
                            </Grid>

                        </Grid>
                    </Container>
                </Jambotron>

                <Container maxWidth="lg" className={clsx(classes.container, classes.cardContainer)}>
                    <Card>
                        <CardHeader>

                        </CardHeader>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={1} md={2}>

                                </Grid>

                                <Grid item xs={12} md={8}>
                                    <form>
                                        <Grid container spacing={3} className={classes.fieldGroup}>

                                            <Grid item xs={12} sm={12} md={12}  >
                                                <Typography variant="h6" align="left" color='primary' > Organization Information </Typography>
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={6}  >
                                                <TextField
                                                    id="org-name"
                                                    label="Organization Name"
                                                    // defaultValue=""
                                                    helperText=""
                                                    required
                                                    fullWidth

                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={6} >
                                                <TextField
                                                    id="org-tagline"
                                                    label="Tag Line"
                                                    // defaultValue=""
                                                    helperText=""
                                                    required
                                                    fullWidth

                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={6}>
                                                <TextField
                                                    id="org-gst"
                                                    label="GST Number"
                                                    // defaultValue=""
                                                    helperText=""
                                                    required
                                                    fullWidth

                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={6}>
                                                <TextField
                                                    id="org-vat"
                                                    label="VAT Number"
                                                    // defaultValue=""
                                                    helperText=""
                                                    required
                                                    fullWidth

                                                />
                                            </Grid>

                                        </Grid>

                                        <Grid container spacing={3}  className={classes.fieldGroup}>

                                            <Grid item xs={12} sm={12} md={12}  >
                                                <Typography variant="h6" align="left" color='primary' > Contact Information </Typography>
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={6}  >
                                                <TextField
                                                    id="org-email"
                                                    label="Email"
                                                    // defaultValue=""
                                                    helperText=""
                                                    required
                                                    fullWidth

                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={6} >
                                                <TextField
                                                    id="org-contact-no"
                                                    label="Contact Number"
                                                    // defaultValue=""
                                                    helperText=""
                                                    required
                                                    fullWidth

                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={6}>
                                                <TextField
                                                    id="org-street"
                                                    label="Street Address"
                                                    // defaultValue=""
                                                    helperText=""
                                                    required
                                                    fullWidth

                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={6}>
                                                <TextField
                                                    id="org-area"
                                                    label="Area"
                                                    // defaultValue=""
                                                    helperText=""
                                                    required
                                                    fullWidth

                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={6}>
                                                <TextField
                                                    id="org-city"
                                                    label="City"
                                                    // defaultValue=""
                                                    helperText=""
                                                    required
                                                    fullWidth

                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={6}>
                                                <TextField
                                                    id="org-state"
                                                    label="State"
                                                    // defaultValue=""
                                                    helperText=""
                                                    required
                                                    fullWidth

                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={6}>
                                                <TextField
                                                    id="org-pincode"
                                                    label="Pincode"
                                                    // defaultValue=""
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

                                <Grid item xs={12} md={8} align='right' className={classes.buttonContainer}>
                                    <Button variant="outlined"> Cancel </Button>
                                    <Button variant="contained" color="primary" disableElevation> Save</Button>
                                </Grid>

                                <Grid item xs={1} md={2}>

                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>

                </Container>
            </React.Fragment>
        )
    }

}

export default withStyles(useStyles)(Customer);