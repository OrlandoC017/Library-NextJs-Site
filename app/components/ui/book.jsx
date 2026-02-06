"use client";

import React from "react";
import { Star, StarHalf } from "lucide-react";

const Book = (book) => {
const rating = Math.floor(book.rating)

  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        
        {         
            new Array(rating).fill(0).map((_, index) => <Star key={index} />)
        }
        
        {
            !Number.isInteger(book.rating) ? <> <StarHalf /></> : null
        }

      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>$
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
};

export default Book;