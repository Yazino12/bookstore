/* eslint-disable react/prop-types */

import React from 'react';
import Book from './Book';

function BookList(props) {
  const { books } = props;
  return (
    <div className="bookList">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
