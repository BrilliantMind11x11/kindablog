import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ApplicationBar from '@views/appBar';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <ApplicationBar />
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
