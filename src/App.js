import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import BookShelf from './BookShelf';

// Google Books API key
const key = 'AIzaSyBxjEYXaaizTFZI9aP1ZRXzdP7k4j5tFhw';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      bookItems: [], // array of book results
      bookSearchStatus: 'Nothing Here Yet - Try Searching For A Book!',
    };
  }

  // handle text input change in search book form
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  // handle search book form submit
  handleSearch = event => {
    const { searchQuery } = this.state;
    event.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    // fecth book results for user query from Google books API
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=15&key=${key}`)
      .then(response => {
        if (!response.ok) {
          throw Error('Oops something went wrong! Try again');
        }
        return response.json();
      })
      .then(responseJSON => {
        this.setState({
          bookItems: responseJSON.items,
          searchQuery: '',
        });
      })
      .catch(() => this.setState({ searchQuery: 'Something went wrong, Try again' }));
  };

  render() {
    const { searchQuery, bookItems, bookSearchStatus } = this.state;
    return (
      <React.Fragment>
        <Header />
        <SearchForm
          searchQuery={searchQuery}
          handleInputChange={this.handleChange}
          handleFormSubmit={this.handleSearch}
        />
        <BookShelf searchStatus={bookSearchStatus} bookItems={bookItems} />
      </React.Fragment>
    );
  }
}
export default App;
