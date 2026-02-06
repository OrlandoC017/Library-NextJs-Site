"use client";

import React, {useState} from "react";
import Book from "../components/ui/book";


export default function Books({ books: initialBooks }: { books: any[] }) {
  const [books, setBooks] = useState(initialBooks)

  function filterBooks(filter: string) {
    console.log(filter)
    if (filter === 'LOW_TO_HIGHEST') {
      setBooks(books.slice().sort((a: any, b: any) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))  
    }
    if (filter === 'HIGH_TO_LOW') {
      setBooks(books.slice().sort((a: any, b: any) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)))  
    }
    if (filter === 'RATING') {
      setBooks(books.slice().sort((a: any, b: any) => (b.rating) - (a.rating)))  
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="row">
            <div className="books__header">
              <h2 className="section__title books__header--title">All Books</h2>
              <select name="" id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="LOW_TO_HIGHEST">Lowest Price</option>
                <option value="HIGH_TO_LOW">Highest Price</option>
                <option value="RATING">Rating</option>
              </select>
            </div>
            <div className="books">
              {books
                 .map((book: any) => (
                    <Book book = {book} rating={book.rating} rkey = {book.id} title={book.title} url={book.url} originalPrice={book.originalPrice} salePrice={book.salePrice} />
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}