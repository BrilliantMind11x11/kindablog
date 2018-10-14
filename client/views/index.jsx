import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import User from '@views/user';
import ApplicationBar from '@views/appBar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <ApplicationBar />
  </div>
);

export default withStyles(styles)(App);
