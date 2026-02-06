"use client";

import React from "react";
import { Star, StarHalf } from "lucide-react";
import Rating from "./rating";

const Book = ({ book, rating, title, url, originalPrice, salePrice }) => {
  return (
    <div className="book">
      <a href={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={url} alt="" />
        </figure>
      </a>
      <div className="book__title">
        <a href={`/books/${book.id}`} className="book__title--link">
          {title}
        </a>
      </div>
<Rating rating={rating} />
      <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">${originalPrice.toFixed(2)}</span>$
            ${salePrice.toFixed(2)}
          </>
        ) : (
          <>${originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
};

export default Book;