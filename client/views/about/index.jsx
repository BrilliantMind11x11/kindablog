import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  avatar: {
    margin: 10,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
};


const About = ({ classes }) => (
  <div className={classes.row}>
    <h1>This is about project page</h1>
    <p>Project page</p>
  </div>
);

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
