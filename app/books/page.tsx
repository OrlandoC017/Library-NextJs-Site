"use client";

import { books as initialBooks } from "../data";
import Books from "./books";

export default function BooksPage() {
  return <Books books={initialBooks} />;
}
