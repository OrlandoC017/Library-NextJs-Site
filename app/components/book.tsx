"use client";

import React from 'react';
import { Star } from 'lucide-react';

interface BookProps {
  book: any;
  rating: number;
  title: string;
  url: string;
  originalPrice: number;
  salePrice: number | null;
}

export default function Book({ book, rating, title, url, originalPrice, salePrice }: BookProps) {
  return (
    <div className="book">
      <img src={url} alt={title} className="book__img" />
      <div className="book__info">
        <h3 className="book__title">{title}</h3>
        <div className="book__rating">
          <Star className="book__star" />
          <span className="book__rating-value">{rating}</span>
        </div>
        <div className="book__prices">
          <span className="book__price book__price--original">${originalPrice}</span>
          {salePrice && (
            <span className="book__price book__price--sale">${salePrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
