import React from 'react'
import { Star, StarHalf } from 'lucide-react';

export default function Rating({ rating }) {
  const ratingFloor = Math.floor(rating);
  return (
      <div className="book__ratings">
        
        {         
            new Array(ratingFloor).fill(0).map((_, index) => <Star key={index} />)
        }
        
        {
            !Number.isInteger(rating) ? <> <StarHalf /></> : null
        }

      </div>
  )
}
