import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    flex: '1 1 320px',
    display: 'flex',
    margin: '45px 15px',
    padding: 10,
    maxWidth: 355,
    overflow: 'visible',
  },
  cover: {
    flex: 1,
    maxWidth: '100%',
    width: 128,
    height: 171,
    backgroundSize: 'auto',
    position: 'relative',
    top: '-40px',
  },
  content: {
    flex: 2,
  },
  noBooksMessage: {
    fontSize: '24px',
    textAlign: 'center',
  },
};
// img src,
const BookItem = props => {
  const { classes, thumbnail, title, authors, publisher } = props;
  console.log(author);
  const author = authors.map(person => person);
  return (
    <Card className={classes.card}>
      <CardMedia image={thumbnail} title="book cover" className={classes.cover} />
      <CardContent className={classes.content}>
        <h4 style={{ textAlign: 'center' }}>{title}</h4>
        <p>
          Author
          {author}
        </p>
        <p>
          publisher
          {publisher}
        </p>
      </CardContent>
    </Card>
  );
};
// BookItem.propTypes = {
//   classes: PropTypes.shape({
//     // bookList: PropTypes.string.isRequired,
//     noBooksMessage: PropTypes.string.isRequired,
//   }).isRequired,
// };
export default withStyles(styles)(BookItem);
