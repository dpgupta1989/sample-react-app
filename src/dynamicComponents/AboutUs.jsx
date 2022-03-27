import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function UserProfile() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>App Name</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>App Version</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root} style={{marginLeft: 400, width: 1205, marginTop: 200, fontSize: 15}}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={6}>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>App Name</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>School Management Platform</Paper>
                </Grid>
        </Grid>
        <Grid container item xs={12} spacing={6}>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>App Version</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>1.0.0</Paper>
                </Grid>
        </Grid>
        <Grid container item xs={12} spacing={6}>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>App Environment</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>Test</Paper>
                </Grid>
        </Grid>
        <Grid container item xs={12} spacing={6}>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>App Context Root</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>srp</Paper>
                </Grid>
        </Grid>
      </Grid>
    </div>
  );
}