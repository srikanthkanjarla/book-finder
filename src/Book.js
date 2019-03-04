import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    flex: '1 1 320px',
    display: 'flex',
    margin: '45px 15px',
    padding: 10,
    maxWidth: 355,
  },
  cover: {
    flex: 1,
    maxWidth: '100%',
    width: 128,
    height: 171,
    backgroundSize: 'auto',
  },
  content: {
    flex: 2,
  },
};
const Book = props => {
  const { classes, thumbnail, title, authors, publisher, pageCount, previewLink } = props;
  const author = authors ? authors.map(person => person) : '';
  return (
    <Card className={classes.card}>
      <CardMedia image={thumbnail} title="book cover" className={classes.cover} />
      <CardContent className={classes.content}>
        <h4>{title}</h4>
        <p>
          <span>By - </span>
          <span>{author}</span>
        </p>
        <p>
          <span>Publisher - </span>
          <span>{publisher}</span>
        </p>
        <p>
          <span>{pageCount}</span>
          <span> pages</span>
        </p>
        <Button variant="contained" href={previewLink} target="_blank" className={classes.button} color="primary">
          See this Book
        </Button>
      </CardContent>
    </Card>
  );
};
Book.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  authors: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string.isRequired)]),
  publisher: PropTypes.string,
  pageCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  previewLink: PropTypes.string,
  thumbnail: PropTypes.string,
};
Book.defaultProps = {
  authors: '',
  publisher: '',
  pageCount: '',
  title: '',
  previewLink: '',
  thumbnail: '',
};
export default withStyles(styles)(Book);
