import React from "react";

function Books({ books }) {
  console.log(books);
  return (
    <div>
      <h1>Here are all my books from api - Ruby on Rails..</h1>
      {books.map((book, index) => {
        return (
          <div key={index}>
            <h3>Title: {book.title}</h3>
            <p>Body: {book.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Books;
