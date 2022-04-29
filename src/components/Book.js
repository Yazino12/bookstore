/* eslint-disable react/prop-types */

import React from 'react';

function Book(props) {
  const {
    book: { title, author },
  } = props;
  return (
    <div className="book">
      <h3 className="bookTitle">{title}</h3>
      <p className="bookAuthor">{author}</p>
      <div className="interactions">
        <button type="submit">Comments</button>
        <button type="submit">Remove</button>
        <button type="submit">Edit</button>
      </div>
    </div>
  );
}

export default Book;
