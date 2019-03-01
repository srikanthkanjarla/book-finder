import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import BookList from './BookList';

const App = () => {
  return (
    <div>
      <Header />
      <SearchForm />
      <BookList />
    </div>
  );
};
export default App;
