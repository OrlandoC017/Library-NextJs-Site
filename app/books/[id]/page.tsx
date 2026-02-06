"use client";

import Rating from '@/app/components/ui/rating'
import Price from '@/app/components/ui/price'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/dist/client/link'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { books } from '@/app/data'

export default function page() {
  const params = useParams();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    if (params.id) {
      const id = parseInt(params.id as string);
      const foundBook = books.find(b => b.id === id);
      setBook(foundBook);
    }
  }, [params.id]);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div id="books__body">
        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <Link href="/books" className="book__link"><ArrowLeft size={24} /><h2 className="book__selected--title--top">Books</h2></Link>
                </div>
                <div className="book__selected">
                    <figure className="book__selected--figure">
                        <img src={book.url} alt={book.title} className="book__selected-img" />
                    </figure>
                    <div className="book__selected--description">
                        <h2 className="book__selected--title">{book.title}</h2>
                        <Rating rating={book.rating} />
                        <div className="book__selected--price">
                            <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                        </div>
                        <div className="book__summary--title">Summary</div>
                        <p className="book__summary__para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, et nihil excepturi eum esse consequatur in provident magnam sequi impedit, expedita tenetur omnis optio blanditiis, repudiandae numquam velit enim voluptatibus.</p>
                        <p className="book__summary__para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, et nihil excepturi eum esse consequatur in provident magnam sequi impedit, expedita tenetur omnis optio blanditiis, repudiandae numquam velit enim voluptatibus.</p>
                        <div className="book__summary__btn--wrapper">   
                        <button className="btn">Add to cart</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
