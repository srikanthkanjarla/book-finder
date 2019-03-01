import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = {
  bookList: {
    minHeight: '40vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBooksMessage: {
    fontSize: '24px',
    textAlign: 'center',
  },
};

const BookList = props => {
  const { classes } = props;
  return (
    <div className={classes.bookList}>
      <p className={classes.noBooksMessage}>Nothing Here Yet - Try Searching For A Book!</p>
    </div>
  );
};
BookList.propTypes = {
  classes: PropTypes.shape({ bookList: PropTypes.string.isRequired, noBooksMessage: PropTypes.string.isRequired })
    .isRequired,
};
export default withStyles(styles)(BookList);
