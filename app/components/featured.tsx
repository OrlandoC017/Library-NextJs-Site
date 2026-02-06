
import {books} from '../data'
import Book from "../components/ui/book";

export default function Featured() {
    console.log(books)
console.log(books.filter((book) => book.rating === 5).slice(0,4));
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <div className="section__title">
            <h2>
              Featured <span className="purple">Books</span>
            </h2>
            <div className="books">
                {books.filter((book) => book.rating === 5).slice(0,4).map((book) => (
                    <Book book = {book} rating={book.rating} key = {book.id} title={book.title} url={book.url} originalPrice={book.originalPrice} salePrice={book.salePrice} />
                ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
