import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';

const styles = {
  heading: {
    flexGrow: 1,
    fontSize: '30px',
  },
  bookIcon: {
    fontSize: '35px',
    marginRight: '10px',
    verticalAlign: 'bottom',
  },
};

const Header = props => {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" component="h1" color="inherit" align="center" className={classes.heading}>
          <Icon className={classes.bookIcon}>library_books</Icon>
          Book Finder
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
Header.propTypes = {
  classes: PropTypes.shape({ heading: PropTypes.string.isRequired, bookIcon: PropTypes.string.isRequired }).isRequired,
};
export default withStyles(styles)(Header);
