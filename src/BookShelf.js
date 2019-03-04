import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Book from './Book';

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

const BookShelf = props => {
  const { classes, searchStatus, bookItems } = props;
  const bookSearchResults = bookItems.map(book => {
    const { id } = book;
    const { title, authors, publisher, pageCount, previewLink } = book.volumeInfo;
    const { smallThumbnail } = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks : '';
    return (
      <Book
        title={title}
        authors={authors}
        publisher={publisher}
        pageCount={pageCount}
        previewLink={previewLink}
        thumbnail={smallThumbnail}
        key={id}
      />
    );
  });
  return <div className={classes.bookList}>{bookItems.length ? bookSearchResults : <p>{searchStatus}</p>}</div>;
};
BookShelf.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  searchStatus: PropTypes.string.isRequired,
  bookItems: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default withStyles(styles)(BookShelf);
