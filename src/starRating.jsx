import React from 'react';


const StarRating = ({ rating = 0 }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;


  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={`full-${i}`} className="bi bi-star-fill text-warning"></i>);
  }

 
  if (hasHalfStar) {
    stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);
  }


  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={`empty-${i}`} className="bi bi-star text-warning"></i>);
  }

  return <span className="ms-2 me-1">{stars}</span>;
};

export default StarRating;