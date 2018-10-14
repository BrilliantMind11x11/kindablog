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


const Home = ({ classes, user }) => (
    <div className={classes.row}>
      <h1>This is home page</h1>
      <p>Home page</p>
    </div>
);

export default withStyles(styles)(Home);
