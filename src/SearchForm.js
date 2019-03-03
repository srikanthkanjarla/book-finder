import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  paper: {
    margin: '12px',
    padding: '10px',
  },
  searchForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column wrap',
    padding: '0 10px',
  },
  textField: {
    margin: '10px 0',
  },
};

const SearchForm = props => {
  const { classes, searchQuery, handleInputChange, handleFormSubmit } = props;
  return (
    <Paper elevation={2} className={classes.paper}>
      <form onSubmit={handleFormSubmit} className={classes.searchForm}>
        <TextField
          className={classes.textField}
          id="outlined-full-width"
          placeholder="Search By Book Title or Author"
          value={searchQuery}
          onChange={handleInputChange('searchQuery')}
          fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="contained"
          color="default"
          type="submit"
          style={{ textAlign: 'center' }}
          className={classes.button}
        >
          Search
        </Button>
      </form>
    </Paper>
  );
};

SearchForm.propTypes = {
  classes: PropTypes.shape({
    searchForm: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired,
  }).isRequired,
  searchQuery: PropTypes.string.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
export default withStyles(styles)(SearchForm);
