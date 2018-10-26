import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { selectors } from '@state';

const styles = {
  avatar: {
    margin: 10,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const mapStateToProps = state => ({
  user: selectors.selectUser(state),
});

const UserAvatar = ({ classes, user }) => (
  !_.isEmpty(user)
    ? (
      <div className={classes.row}>
        <Avatar className={classes.avatar}>{user.name.slice(0, 2)}</Avatar>
      </div>
    )
    : (
      <div className={classes.row}>
        <Button color="inherit">Login</Button>
      </div>
    )

);

UserAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(UserAvatar));
