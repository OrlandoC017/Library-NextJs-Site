"use client";

import React from 'react'
import Book from "./ui/book";
import {books} from '../data'

export default function Discounted() {
  return (
    <section id="recent">
        <div className="container">
            <div className="row">
                <div className="section__title">
                    <h2>Discounted <span className="purple">Books</span></h2>
                </div>
                <div className="books">
                 {books
                 .filter(book => book.salePrice !== null)
                 .slice(0,8)
                 .map((book) => (
                    <Book book = {book} rating={book.rating} key = {book.id} title={book.title} url={book.url} originalPrice={book.originalPrice} salePrice={book.salePrice} />
                ))}

                </div>
            </div>
        </div>
    </section>
    
  )
}