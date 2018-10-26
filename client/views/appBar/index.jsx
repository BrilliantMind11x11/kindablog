import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import User from '@views/user';
import Home from '@views/home';
import About from '@views/about';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});


const ButtonAppBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.grow}>
          <Link to="/">Home</Link>
        </Typography>
        <Typography variant="title" color="inherit" className={classes.grow}>
          <Link to="/about">About</Link>
        </Typography>
        <User />
      </Toolbar>
    </AppBar>
    <main className={classes.layout}>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={9}>
          <Paper className={classes.paper}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Paper>
        </Grid>
      </Grid>
    </main>
    <footer className={classNames(classes.footer, classes.layout)}>
      <Grid container spacing={32} justify="space-evenly">
        <Grid item xs key="footer">
          <Typography variant="display2" color="textPrimary" gutterBottom>
            Footer
          </Typography>
        </Grid>
      </Grid>
    </footer>
  </div>
);

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
