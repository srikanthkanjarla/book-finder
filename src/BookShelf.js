import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Book from './Book';
// import BookItem from './BookItem';

const styles = {
  bookList: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  noBooksMessage: {
    fontSize: '24px',
    textAlign: 'center',
  },
};

const BookList = props => {
  const { classes, searchStatus, bookItems } = props;
  const bookCards = bookItems.map(book => {
    const { id } = book;
    const { title, subtitle, authors, publisher, publishedDate, pageCount, previewLink, description } = book.volumeInfo;
    const { smallThumbnail } = book.volumeInfo.imageLinks;
    console.log(book.volumeInfo);
    return <Book title={title} authors={authors} publisher={publisher} thumbnail={smallThumbnail} key={id} />;
  });
  return (
    <div className={classes.bookList}>
      {/* <p className={classes.noBooksMessage}>{searchStatus}</p>
      {bookItems.map(book => {
        return console.log(book.selfLink);
      })} */}
      {bookCards}
    </div>
  );
};
BookList.propTypes = {
  classes: PropTypes.shape({
    bookList: PropTypes.string.isRequired,
    noBooksMessage: PropTypes.string.isRequired,
  }).isRequired,
};
export default withStyles(styles)(BookList);
